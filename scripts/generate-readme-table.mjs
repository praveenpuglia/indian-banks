#!/usr/bin/env node
import { access, readdir, readFile, writeFile } from 'node:fs/promises';

const LOGOS_ROOT = 'assets/logos';
const README = 'README.md';
const BANKS = 'data/banks.json';
const START = '<!-- BANKS_TABLE_START -->';
const END = '<!-- BANKS_TABLE_END -->';

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

function assetCell(folder, base, hasSvg, hasPng) {
  const src = hasSvg ? `${base}.svg` : hasPng ? `${base}.png` : null;
  if (!src) return '—';

  const tags = [hasSvg && '`SVG`', hasPng && '`PNG`'].filter(Boolean).join(' ');
  return `<img src="./${folder}/${src}" height="64" /><br/>${tags}`;
}

const banks = JSON.parse(await readFile(BANKS, 'utf8'));
const slugs = Object.keys(banks).sort();

const folderEntries = await readdir(LOGOS_ROOT, { withFileTypes: true });
const folderSlugs = new Set(
  folderEntries.filter((e) => e.isDirectory()).map((e) => e.name),
);
const jsonSlugs = new Set(slugs);

const missingFromJson = [...folderSlugs].filter((s) => !jsonSlugs.has(s)).sort();
const missingFromDisk = [...jsonSlugs].filter((s) => !folderSlugs.has(s)).sort();

if (missingFromJson.length > 0 || missingFromDisk.length > 0) {
  console.error(`${BANKS} and ${LOGOS_ROOT}/ are out of sync:`);
  if (missingFromJson.length > 0) {
    console.error(
      `  Folder(s) without a ${BANKS} entry: ${missingFromJson.join(', ')}`,
    );
    console.error(`  → add an entry: "<slug>": "Official Bank Name"`);
  }
  if (missingFromDisk.length > 0) {
    console.error(
      `  ${BANKS} entries without a folder: ${missingFromDisk.join(', ')}`,
    );
    console.error(`  → create ${LOGOS_ROOT}/<slug>/ and drop assets in`);
  }
  process.exit(1);
}

const rows = await Promise.all(
  slugs.map(async (slug) => {
    const folder = `${LOGOS_ROOT}/${slug}`;
    const [logoSvg, logoPng, symbolSvg, symbolPng] = await Promise.all([
      exists(`${folder}/logo.svg`),
      exists(`${folder}/logo.png`),
      exists(`${folder}/symbol.svg`),
      exists(`${folder}/symbol.png`),
    ]);

    const name = `[${banks[slug]}](./${folder}/)`;
    const logo = assetCell(folder, 'logo', logoSvg, logoPng);
    const symbol = assetCell(folder, 'symbol', symbolSvg, symbolPng);

    return `| ${name} | \`${slug}\` | ${logo} | ${symbol} |`;
  }),
);

const table = [
  '| Bank Name | Slug | Logo | Symbol |',
  '| --- | --- | --- | --- |',
  ...rows,
].join('\n');

const readme = await readFile(README, 'utf8');
const regex = new RegExp(`(${START})[\\s\\S]*?(${END})`);

if (!regex.test(readme)) {
  console.error(`Markers ${START} / ${END} not found in ${README}.`);
  process.exit(1);
}

const next = readme.replace(regex, `$1\n${table}\n$2`);
if (next === readme) {
  console.log(`${README} already up to date (${slugs.length} banks).`);
  process.exit(0);
}

await writeFile(README, next);
console.log(`Updated ${README} with ${slugs.length} banks.`);

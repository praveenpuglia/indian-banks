#!/usr/bin/env node
import { access, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const LOGOS_ROOT = 'assets/logos';
const PREVIEWS = 'assets/previews';
const README = 'README.md';
const BANKS = 'data/banks.json';
const TYPES = 'data/types.json';

// Same groups and order as https://www.rbi.org.in/scripts/banklinks.aspx
const GROUPS = {
  private: 'Private Sector Banks',
  'local-area': 'Local Area Banks',
  'small-finance': 'Small Finance Banks',
  payments: 'Payments Banks',
  public: 'Public Sector Banks',
  'financial-institution': 'Financial Institutions',
  'regional-rural': 'Regional Rural Banks',
  foreign: 'Foreign Banks',
};
const START = '<!-- BANKS_TABLE_START -->';
const END = '<!-- BANKS_TABLE_END -->';

// Display size in the README; previews are rendered at 2x for crispness.
const SIZES = { logo: { height: 40, maxWidth: 200 }, symbol: { height: 32, maxWidth: 32 } };
const PAD = 8;

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

// Transparent logos with dark ink vanish on GitHub's dark theme, so the table
// shows each asset on a white rounded card instead of the raw file.
async function renderPreview(src, out, { height, maxWidth }) {
  const logo = await sharp(src, { density: 300 })
    .resize({ height: height * 2, width: maxWidth * 2, fit: 'inside' })
    .png()
    .toBuffer({ resolveWithObject: true });
  const w = logo.info.width + PAD * 4;
  const h = logo.info.height + PAD * 4;
  const card = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="${w}" height="${h}" rx="${PAD * 2}" fill="#fff"/></svg>`,
  );
  await sharp(card)
    .composite([{ input: logo.data, left: PAD * 2, top: PAD * 2 }])
    .png({ palette: true })
    .toFile(out);
  return w / 2;
}

async function assetCell(folder, slug, base, hasSvg, hasPng) {
  const src = hasSvg ? `${base}.svg` : hasPng ? `${base}.png` : null;
  if (!src) return '—';

  const preview = `${PREVIEWS}/${slug}-${base}.png`;
  const width = await renderPreview(`${folder}/${src}`, preview, SIZES[base]);
  return `<a href="./${folder}/${src}"><img src="./${preview}" width="${width}" alt="${slug} ${base}" /></a>`;
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

const types = JSON.parse(await readFile(TYPES, 'utf8'));
const untyped = slugs.filter((s) => !(types[s] in GROUPS));
const orphanTypes = Object.keys(types).filter((s) => !jsonSlugs.has(s));

if (untyped.length > 0 || orphanTypes.length > 0) {
  console.error(`${TYPES} and ${BANKS} are out of sync:`);
  if (untyped.length > 0) {
    console.error(`  Slug(s) with a missing or unknown type: ${untyped.join(', ')}`);
    console.error(`  → add "<slug>": one of ${Object.keys(GROUPS).join(', ')}`);
  }
  if (orphanTypes.length > 0) {
    console.error(`  ${TYPES} entries without a ${BANKS} entry: ${orphanTypes.join(', ')}`);
  }
  process.exit(1);
}

// Regenerate from scratch so removed banks don't leave stale previews behind.
await rm(PREVIEWS, { recursive: true, force: true });
await mkdir(PREVIEWS, { recursive: true });

const rows = Object.fromEntries(await Promise.all(
  slugs.map(async (slug) => {
    const folder = `${LOGOS_ROOT}/${slug}`;
    const [logoSvg, logoPng, symbolSvg, symbolPng] = await Promise.all([
      exists(`${folder}/logo.svg`),
      exists(`${folder}/logo.png`),
      exists(`${folder}/symbol.svg`),
      exists(`${folder}/symbol.png`),
    ]);

    const name = `[${banks[slug]}](./${folder}/)`;
    const logo = await assetCell(folder, slug, 'logo', logoSvg, logoPng);
    const symbol = await assetCell(folder, slug, 'symbol', symbolSvg, symbolPng);

    return [slug, `| ${name} | \`${slug}\` | ${logo} | ${symbol} |`];
  }),
));

const byName = (a, b) => banks[a].localeCompare(banks[b], 'en', { sensitivity: 'base' });
const groups = Object.entries(GROUPS)
  .map(([type, title]) => ({ title, members: slugs.filter((s) => types[s] === type).sort(byName) }))
  .filter((g) => g.members.length > 0);

// Counts stay out of the headings so their anchors don't change as banks are added.
const anchor = (title) => title.toLowerCase().replace(/\s+/g, '-');
const jump = groups.map((g) => `[${g.title}](#${anchor(g.title)}) (${g.members.length})`).join(' · ');

const table = [
  jump,
  ...groups.map((g) =>
    [
      `### ${g.title}`,
      '',
      '| Bank Name | Slug | Logo | Symbol |',
      '| --- | --- | --- | --- |',
      ...g.members.map((s) => rows[s]),
    ].join('\n'),
  ),
].join('\n\n');

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

#!/usr/bin/env node
import { readdir, mkdir } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { parseArgs } from 'node:util';
import sharp from 'sharp';

const ROOT = 'assets/logos';
const FORMATS = ['png', 'avif'];
const SCALES = [1, 2, 3];

const { values, positionals } = parseArgs({
  args: process.argv.slice(2).filter((a) => a !== '--'),
  allowPositionals: true,
  options: {
    format: { type: 'string', short: 'f', default: 'png' },
    scale: { type: 'string', short: 's', default: '1' },
    out: { type: 'string', short: 'o' },
    help: { type: 'boolean', short: 'h', default: false },
  },
});

if (values.help) {
  console.log(`Convert bank SVG logos to raster formats.

Usage: pnpm run convert -- [options]

Options:
  -f, --format <png|avif>   Output format. Default: png
  -s, --scale  <1|2|3>      Scale factor (1x, 2x, 3x). Default: 1
  -o, --out    <dir>        Output directory. If omitted, writes alongside
                            the source SVGs in ${ROOT}/
  -h, --help                Show this help

Output filenames: logo.png at 1x, logo@2x.png at 2x, logo@3x.png at 3x.
`);
  process.exit(0);
}

const format = values.format.toLowerCase();
if (!FORMATS.includes(format)) {
  console.error(`Invalid --format: ${values.format}. Use one of: ${FORMATS.join(', ')}`);
  process.exit(1);
}

const scale = Number.parseInt(String(values.scale).replace(/x$/i, ''), 10);
if (!SCALES.includes(scale)) {
  console.error(`Invalid --scale: ${values.scale}. Use one of: 1, 2, 3`);
  process.exit(1);
}

const outDir = values.out ?? ROOT;

async function findSvgs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await findSvgs(path)));
    } else if (entry.isFile() && entry.name.endsWith('.svg')) {
      results.push(path);
    }
  }
  return results;
}

const svgs =
  positionals.length > 0
    ? positionals.filter((p) => p.endsWith('.svg'))
    : await findSvgs(ROOT);

if (svgs.length === 0) {
  console.log('No SVG files to convert.');
  process.exit(0);
}

const suffix = scale === 1 ? '' : `@${scale}x`;
console.log(
  `Converting ${svgs.length} SVG(s) → ${format.toUpperCase()} at ${scale}x into ${outDir}/`,
);

let converted = 0;
const failures = [];

await Promise.all(
  svgs.map(async (svg) => {
    const rel = relative(ROOT, svg).replace(/\.svg$/, `${suffix}.${format}`);
    const out = join(outDir, rel);
    try {
      await mkdir(dirname(out), { recursive: true });
      await sharp(svg, { density: 72 * scale })
        .toFormat(format)
        .toFile(out);
      converted++;
    } catch (err) {
      failures.push({ svg, message: err.message });
    }
  }),
);

console.log(`✓ ${converted} converted`);
if (failures.length > 0) {
  console.error(`✗ ${failures.length} failed:`);
  for (const { svg, message } of failures) {
    console.error(`  ${svg}: ${message}`);
  }
  process.exit(1);
}

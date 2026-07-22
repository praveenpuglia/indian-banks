#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises';

const CDN_BASE = 'https://cdn.jsdelivr.net/gh/AnkitBalhara/indian-banks@latest/assets/logos';
const banksJsonPath = new URL('../data/banks.json', import.meta.url);
const outputPath = new URL('../data/banks-symbols.json', import.meta.url);

const banks = JSON.parse(await readFile(banksJsonPath, 'utf8'));
const bankList = Object.entries(banks).map(([slug, name]) => ({
  slug,
  name,
  logo: `${CDN_BASE}/${slug}/symbol.svg`,
}));

await writeFile(outputPath, JSON.stringify(bankList, null, 2) + '\n');
console.log(`Created ${outputPath.pathname}`);

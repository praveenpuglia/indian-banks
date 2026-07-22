#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const CDN_BASE = 'https://cdn.jsdelivr.net/gh/AnkitBalhara/indian-banks@latest/assets/logos';
const BANKS_JSON = new URL('../data/banks.json', import.meta.url);

export async function buildBankSymbolList() {
  const banks = JSON.parse(await readFile(BANKS_JSON, 'utf8'));

  return Object.entries(banks).map(([slug, name]) => ({
    slug,
    name,
    logo: `${CDN_BASE}/${slug}/symbol.svg`,
  }));
}

export default buildBankSymbolList;

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const list = await buildBankSymbolList();
  console.log(JSON.stringify(list, null, 2));
}

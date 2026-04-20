# Contributing

Thanks for helping improve this repository. When this project started, there was no single source of high-quality design assets and data for Indian banks — it took a lot of scouting and manual verification to get here. Every contribution — a new bank, a better logo, a corrected name — makes it more useful for everyone.

## What we need

- **Logos** — a full logo and a symbol (the small/square variant)
- **Accurate metadata** — the bank's official name and slug

SVGs are preferred because they scale cleanly and stay crisp. If a bank only publishes raster artwork, a high-resolution PNG is acceptable as a fallback.

|                                           | Logo                                                                                                                                                      | Symbol                                                                                                                                                          |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The full wordmark used in headers and app bars | ![HDFC Logo](./assets/logos/hdfc/logo.svg)                                                                                                                | ![HDFC Symbol](./assets/logos/hdfc/symbol.svg)                                                                                                                  |

## Slugs

Every bank lives under `assets/logos/<slug>/` and is keyed by `<slug>` in [`data/banks.json`](./data/banks.json). The slug is the bank's **IFSC prefix** in lowercase — the first four characters of any IFSC code issued by that bank. For example:

| Bank                | IFSC sample     | Slug   |
| ------------------- | --------------- | ------ |
| HDFC Bank           | `HDFC0000001`   | `hdfc` |
| State Bank of India | `SBIN0000123`   | `sbin` |
| Bank of Baroda      | `BARB0XXXXXX`   | `barb` |

Using the IFSC prefix keeps slugs stable, official, and easy to look up.

## Development setup

```sh
pnpm install
```

That's it. The post-install step configures a pre-commit hook via husky. You don't need to install `svgo`, `inkscape`, or anything system-wide.

## Adding or updating a bank

1. Create the folder: `assets/logos/<slug>/`
2. Drop in the assets you have:
   - `logo.svg` and/or `logo.png`
   - `symbol.svg` and/or `symbol.png`
3. Add an entry in [`data/banks.json`](./data/banks.json):
   ```json
   "<slug>": "Official Bank Name"
   ```
4. Commit your changes.

That's all. The pre-commit hook handles the rest:

- **SVGs** are optimized in place with `svgo` (preserves `viewBox`).
- **1x PNGs** are regenerated from each SVG and staged alongside.
- **The Bank Slugs table in [`README.md`](./README.md)** is regenerated from `data/banks.json` + the filesystem, with format tags (`SVG` / `PNG`) and a link to each bank's asset folder.

If you ever need to run any of these manually:

```sh
pnpm run optimize          # optimize all SVGs under assets/logos/
pnpm run convert           # regenerate 1x PNGs alongside every SVG
pnpm run generate:readme   # rebuild the Bank Slugs table in README.md
```

## Other scales and formats

The repo ships only 1x PNGs (intrinsic SVG size). If you need 2x/3x or AVIF output for your own consumption, `convert.mjs` takes flags:

```sh
# 2x AVIFs into ./dist
pnpm run convert -- --format avif --scale 2 --out dist
```

See `pnpm run convert -- --help` for the full list.

## What not to commit

- Inkscape/Illustrator project files (`.ai`, `.eps`, `.sketch`, etc.) — upstream `.svg`/`.png` only.
- Bitmap-traced SVGs that embed a raster image (`<image>` tag inside the SVG). Prefer a real vector.
- Logos downloaded from Google Images or unofficial blogs. Prefer sources linked from the bank's own website, press kits, or annual reports.

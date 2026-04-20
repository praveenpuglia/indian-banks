export default {
  'assets/logos/**/*.svg': (files) => {
    const pngs = files.map((f) => f.replace(/\.svg$/, '.png'));
    return [
      `svgo ${files.join(' ')}`,
      `node scripts/convert.mjs ${files.join(' ')}`,
      `git add ${pngs.join(' ')}`,
    ];
  },
};

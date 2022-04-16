const getExtension = (config, lang) => {
  switch (config) {
    case `browser`:
    case `jest`:
    case `node`:
      return lang
    case `preact`:
    case `react`:
      return `${lang}x`
    default:
      console.error(`Invalid config "${config}" provided, defaulting to .js`)
      return `js`
  }
}
const createOverride = (config, lang) => {
  const ext = getExtension(config, lang)
  return {
    files: [`./test/${config}-${lang}.${ext}`],
    extends: `./configs/${config}-${lang}.js`,
  }
}
const testFileSetups = [`browser`, `jest`, `node`, `preact`, `react`].reduce(
  (acc, config) => [...acc, createOverride(config, `js`), createOverride(config, `ts`)],
  []
)

module.exports = {
  overrides: [
    {
      files: [`./.eslintrc.js`, `./configs/**/*.js`],
      extends: `./configs/node-js.js`,
      rules: {
        'id-length': `off`,
        'max-lines': `off`,
        'no-magic-numbers': `off`,
        'sort-keys': `off`,

        'import/no-commonjs': `off`,
      },
    },
    ...testFileSetups,
  ],
}

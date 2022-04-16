module.exports = {
  extends: [`./common-ts.js`, `./jest-base.js`],
  rules: {
    '@typescript-eslint/unbound-method': `off`,
    'jest/unbound-method': [
      `error`,
      {
        ignoreStatic: true,
      },
    ],
  },
}

module.exports = {
  extends: [`./ts-base.js`, `./common-base.js`],
  rules: {
    // Not really needed in most if not all scenarios with TS
    'import/extensions': `off`,
    // Handled by TS, no need for eslint to pull double duty on it
    'import/named': `off`,
  },
}

module.exports = {
  extends: [`./ts-base.js`, `./common-base.js`],
  rules: {
    // Handled by TS, no need for eslint to pull double duty on it
    'import/named': `off`,
  },
}

module.exports = {
  extends: [`./common-ts.js`],
  env: {
    browser: true,
    webextensions: true,
    worker: true,
  },
  rules: {
    'import/no-nodejs-modules': `error`,
  },
}

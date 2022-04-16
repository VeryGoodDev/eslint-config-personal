module.exports = {
  extends: [`./common-js.js`],
  env: {
    browser: true,
    webextensions: true,
    worker: true,
  },
  rules: {
    'import/no-nodejs-modules': `error`,
  },
}

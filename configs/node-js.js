module.exports = {
  extends: [`./common-js.js`, `./node-base.js`],
  rules: {
    'import/extensions': [`error`, `always`],
    'import/no-unresolved': `error`,
  },
}

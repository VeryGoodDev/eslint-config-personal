module.exports = {
  extends: [`./eslint-base.js`, `./react-base.js`],
  settings: {
    react: {
      pragma: `React`,
      fragment: `Fragment`,
      version: `detect`,
    },
    formComponents: [{ name: `Form`, formAttribute: `endpoint` }],
    linkComponents: [{ name: `Link`, linkAttribute: `to` }],
  },
}

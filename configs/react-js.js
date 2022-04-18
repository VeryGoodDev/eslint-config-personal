module.exports = {
  extends: [`./browser-js.js`, `./react-base.js`],
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

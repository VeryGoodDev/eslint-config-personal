module.exports = {
  extends: [`./common-ts.js`, `./react-base.js`],
  settings: {
    react: {
      pragma: `h`,
      fragment: `Fragment`,
      version: `17.0`,
    },
    formComponents: [{ name: `Form`, formAttribute: `endpoint` }],
    linkComponents: [{ name: `Link`, linkAttribute: `to` }],
  },
}

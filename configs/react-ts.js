module.exports = {
  extends: [`./ts-base.js`, `./react-base.js`],
  settings: {
    react: {
      pragma: `React`,
      fragment: `Fragment`,
      version: `detect`,
    },
    formComponents: [{ name: `Form`, formAttribute: `endpoint` }],
    linkComponents: [{ name: `Link`, linkAttribute: `to` }],
  },
  rules: {
    'react/jsx-filename-extension': [
      `error`,
      {
        allow: `always`,
        extensions: [`.tsx`],
      },
    ],
  },
}

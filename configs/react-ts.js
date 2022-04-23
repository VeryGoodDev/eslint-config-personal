module.exports = {
  extends: [`./browser-ts.js`, `./react-base.js`],
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
  overrides: [
    {
      files: [`**/*.tsx`],
      rules: {
        '@typescript-eslint/explicit-function-return-type': `off`,
        '@typescript-eslint/explicit-module-boundary-types': `off`,
        '@typescript-eslint/naming-convention': `off`,
        '@typescript-eslint/no-extra-parens': `off`,
      },
    },
  ],
}

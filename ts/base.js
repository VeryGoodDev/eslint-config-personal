/* eslint-disable sort-keys */
module.exports = {
  extends: [`../js/base.js`],
  parser: `@typescript-eslint/parser`,
  plugins: [`@typescript-eslint`],
  rules: {
    // ESLint extensions/overrides
    'brace-style': `off`,
    '@typescript-eslint/brace-style': [
      `warn`,
      `1tbs`,
      {
        allowSingleLine: true,
      },
    ],
    'comma-dangle': `off`,
    '@typescript-eslint/comma-dangle': [
      `error`,
      {
        arrays: `always-multiline`,
        objects: `always-multiline`,
        imports: `always-multiline`,
        exports: `always-multiline`,
        functions: `never`,
        // Following are TS-specific
        enums: `always-multiline`,
        generics: `never`,
        tuples: `always-multiline`,
      },
    ],
    'comma-spacing': `off`,
    '@typescript-eslint/comma-spacing': [
      `warn`,
      {
        after: true,
        before: false,
      },
    ],
    'default-param-last': `off`,
    '@typescript-eslint/default-param-last': [`error`],
    'dot-notation': `off`,
    '@typescript-eslint/dot-notation': [
      `error`,
      {
        allowIndexSignaturePropertyAccess: false,
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
      },
    ],

    // TypeScript rules
  },
}

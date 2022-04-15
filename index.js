/* eslint-disable sort-keys */
module.exports = {
  plugins: [`@babel`, `html`, `jsx-a11y`, `react-hooks`],
  extends: [`./configs/eslint-base.js`],
  parser: `@babel/eslint-parser`,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: `module`,
    requireConfigFile: false,
  },
  // Personal preferences overrides for some rules from extended configs
  rules: {
    // Plugin-specific
    '@babel/no-unused-expressions': [`warn`, { allowShortCircuit: true }],

    'import/prefer-default-export': `off`,

    'jsx-a11y/label-has-associated-control': [`error`, { assert: `either` }],

    'react/jsx-filename-extension': `off`,
    'react/jsx-props-no-spreading': `off`,
    'react/prop-types': `off`,
    'react/require-default-props': `off`,
    'react/no-unescaped-entities': `off`,

    'react-hooks/rules-of-hooks': `error`,
    'react-hooks/exhaustive-deps': `error`,
  },
}

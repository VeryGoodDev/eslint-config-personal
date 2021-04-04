module.exports = {
  plugins: [`@babel`, `html`, `jsx-a11y`, `react-hooks`],
  extends: [
    `airbnb`,
    `plugin:jest/recommended`,
    `plugin:jsx-a11y/recommended`,
    `plugin:prettier/recommended`,
    `prettier/react`,
  ],
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
    // Regular ESLint
    'default-case': `off`,
    'lines-between-class-members': `off`,
    'max-classes-per-file': `off`,
    'no-console': `off`,
    'no-param-reassign': `off`,
    'no-plusplus': `off`,
    'no-unused-expressions': `off`,
    'no-use-before-define': [`error`, { functions: false, classes: true, variables: true }],
    'no-warning-comments': `off`,
    'prefer-const': [`error`, { destructuring: `all` }],
    'prefer-destructuring': `off`,
    quotes: [`error`, `backtick`],

    // Plugin-specific
    '@babel/no-unused-expressions': [`warn`, { allowShortCircuit: true }],

    'import/prefer-default-export': `off`,

    'jsx-a11y/label-has-associated-control': [`error`, { assert: `either` }],

    'prettier/prettier': [
      `warn`,
      {
        arrowParens: `always`,
        endOfLine: `lf`,
        printWidth: 120,
        semi: false,
        singleQuote: true,
        trailingComma: `es5`,
      },
    ],

    'react/jsx-filename-extension': `off`,
    'react/jsx-props-no-spreading': `off`,
    'react/prop-types': `off`,
    'react/require-default-props': `off`,
    'react/no-unescaped-entities': `off`,

    'react-hooks/rules-of-hooks': `error`,
    'react-hooks/exhaustive-deps': `error`,
  },
}

module.exports = {
  plugins: [`jest`, `jest-formatting`],
  env: {
    jest: true,
  },
  rules: {
    // Main Jest rules
    'jest/consistent-test-it': [
      `error`,
      {
        fn: `it`,
        withinDescribe: `test`,
      },
    ],
    'jest/expect-expect': [
      `error`,
      {
        assertFunctionNames: [`expect`],
        additionalTestBlockFunctions: [`theoretically`],
      },
    ],
    'jest/max-nested-describe': [
      `error`,
      {
        // May require some tweaking once I work with more tests
        max: 3,
      },
    ],
    'jest/no-alias-methods': `error`,
    'jest/no-commented-out-tests': `error`,
    'jest/no-conditional-expect': `error`,
    'jest/no-conditional-in-test': `error`,
    'jest/no-deprecated-functions': `error`,
    'jest/no-disabled-tests': `error`,
    'jest/no-done-callback': `error`,
    'jest/no-duplicate-hooks': `error`,
    'jest/no-export': `error`,
    'jest/no-focused-tests': `error`,
    'jest/no-hooks': `off`,
    'jest/no-identical-title': `error`,
    'jest/no-interpolation-in-snapshots': `error`,
    'jest/no-jasmine-globals': `error`,
    'jest/no-jest-import': `error`,
    'jest/no-large-snapshots': [
      `error`,
      {
        maxSize: 64,
        inlineMaxSize: 16,
      },
    ],
    'jest/no-mocks-import': `error`,
    'jest/no-restricted-matchers': [
      `error`,
      {
        // Matchers such as toBeFalsy, resolves, etc. can be put here
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-matchers.md
      },
    ],
    'jest/no-standalone-expect': [
      `error`,
      {
        additionalTestBlockFunctions: [`theoretically`],
      },
    ],
    // Since jest/no-disabled-tests and no-focused-tests raise errors on their usage, doesn't really matter which one is used when temporarily debugging, tweaking, etc.
    'jest/no-test-prefixes': `off`,
    'jest/no-test-return-statement': `error`,
    'jest/prefer-called-with': `error`,
    'jest/prefer-comparison-matcher': `error`,
    'jest/prefer-equality-matcher': `error`,
    // Gonna experiment with having this on, subject to change if I don't like it
    'jest/prefer-expect-assertions': [
      `error`,
      {
        onlyFunctionsWithAsyncKeyword: true,
        onlyFunctionsWithExpectInCallback: true,
        onlyFunctionsWithExpectInLoop: true,
      },
    ],
    'jest/prefer-expect-resolves': `off`,
    'jest/prefer-hooks-on-top': `error`,
    'jest/prefer-lowercase-title': [
      `error`,
      {
        allowedPrefixes: [],
        ignore: [],
        ignoreTopLevelDescribe: true,
      },
    ],
    'jest/prefer-snapshot-hint': [`error`, `multi`],
    'jest/prefer-spy-on': `error`,
    'jest/prefer-strict-equal': `off`,
    'jest/prefer-to-be': `error`,
    'jest/prefer-to-contain': `error`,
    'jest/prefer-to-have-length': `error`,
    'jest/prefer-todo': `error`,
    'jest/require-hook': [
      `error`,
      {
        allowedFunctionCalls: [],
      },
    ],
    'jest/require-to-throw-message': `error`,
    'jest/require-top-level-describe': [
      `error`,
      {
        maxNumberOfTopLevelDescribes: 1,
      },
    ],
    'jest/valid-describe-callback': `error`,
    'jest/valid-expect': [
      `error`,
      {
        alwaysAwait: false,
        asyncMatchers: [`toReject`, `toResolve`],
        maxArgs: 1,
        minArgs: 1,
      },
    ],
    'jest/valid-expect-in-promise': `error`,
    'jest/valid-title': [
      `error`,
      {
        disallowedWords: [],
        ignoreTypeOfDescribeName: false,
        // Some interesting options for mustMatch/mustNotMatch if needs arise
        // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-title.md#mustmatch--mustnotmatch
        // mustMatch: [],
        mustNotMatch: {
          describe: [`\\.$`, `Titles should not end with a period`],
          it: [`\\.$`, `Titles should not end with a period`],
          test: [`\\.$`, `Titles should not end with a period`],
        },
      },
    ],

    // Formatting rules
    'jest-formatting/padding-around-after-all-blocks': `error`,
    'jest-formatting/padding-around-after-each-blocks': `error`,
    'jest-formatting/padding-around-before-all-blocks': `error`,
    'jest-formatting/padding-around-before-each-blocks': `error`,
    'jest-formatting/padding-around-expect-groups': `error`,
    'jest-formatting/padding-around-describe-blocks': `error`,
    'jest-formatting/padding-around-test-blocks': `error`,
  },
}

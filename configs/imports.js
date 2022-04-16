module.exports = {
  plugins: [`import`],
  rules: {
    // Static analysis
    'import/default': `error`,
    'import/named': `error`,
    'import/namespace': [
      `error`,
      {
        allowComputed: false,
      },
    ],
    'import/no-absolute-path': `error`,
    'import/no-cycle': [
      `error`,
      {
        ignoreExternal: true,
        maxDepth: 2,
      },
    ],
    'import/no-dynamic-require': `error`,
    'import/no-internal-modules': `off`,
    'import/no-relative-packages': `off`,
    'import/no-relative-parent-imports': `off`,
    'import/no-restricted-paths': `off`,
    'import/no-self-import': `error`,
    // Docs warn that there may be false positives if using something besides Node or Webpack, so may need to be disabled if esbuild isn't playing nice with this
    'import/no-unresolved': `error`,
    'import/no-useless-path-segments': [
      `error`,
      {
        noUselessIndex: true,
      },
    ],
    'import/no-webpack-loader-syntax': `error`,

    // Helpful warnings
    'import/export': `error`,
    'import/no-deprecated': `error`,
    'import/no-extraneous-dependencies': [
      `error`,
      { devDependencies: false, optionalDependencies: true, peerDependencies: true, bundledDependencies: false },
    ],
    'import/no-mutable-exports': `error`,
    'import/no-named-as-default-member': `error`,
    // NOTE: Mildly iffy about this one, will revisit if needed
    'import/no-named-as-default': `error`,
    'import/no-unused-modules': [
      `error`,
      {
        missingExports: true,
        unusedExports: true,
      },
    ],

    // Module systems
    'import/no-amd': `error`,
    'import/no-commonjs': [
      `error`,
      {
        allowConditionalRequire: false,
        allowPrimitiveModules: false,
        allowRequire: false,
      },
    ],
    'import/no-import-module-exports': [
      `error`,
      {
        exceptions: [],
      },
    ],
    // Enabled in browser configs
    'import/no-nodejs-modules': `off`,
    // NOTE: Not fully sure what this does, will revisit if needed
    'import/unambiguous': `error`,

    // Stylistic
    'import/dynamic-import-chunkname': `off`,
    'import/exports-last': `error`,
    'import/extensions': [`error`, `never`],
    'import/first': `error`,
    'import/group-exports': `off`,
    'import/max-dependencies': `off`,
    'import/newline-after-import': [
      `error`,
      {
        considerComments: true,
        count: 1,
      },
    ],
    'import/no-anonymous-default-export': [
      `error`,
      {
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowArray: false,
        allowArrowFunction: false,
        allowCallExpression: true,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    'import/no-default-export': `off`,
    'import/no-duplicates': `error`,
    'import/no-named-default': `error`,
    'import/no-named-export': `off`,
    // NOTE: Trying this out for now, will revisit if needed
    'import/no-namespace': `error`,
    'import/no-unassigned-import': `off`,
    'import/order': [
      `error`,
      {
        alphabetize: {
          order: `asc`,
          caseInsensitive: true,
        },
        groups: [`builtin`, `external`, `internal`, `parent`, `sibling`, `index`, `object`, `type`],
        'newlines-between': `always`,
        // The pathGroups option may come in handy for specifying my eventual component library as an internal module https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#pathgroups-array-of-objects
        warnOnUnassignedImports: false,
      },
    ],
    'import/prefer-default-export': `off`,
  },
}
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
    // Docs warn that there may be false positives if using something besides Node or Webpack, so this only gets turned on for the node-js config for now
    'import/no-unresolved': `off`,
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
      {
        bundledDependencies: true,
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    'import/no-mutable-exports': `error`,
    'import/no-named-as-default-member': `error`,
    // NOTE: Mildly iffy about this one, will revisit if needed
    'import/no-named-as-default': `error`,
    // Causes problems for files that might just run a file e.g. a simple browser script that doesn't export
    'import/no-unused-modules': `off`,

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
    // No idea what this does, and it causes problems literally everywhere, so off it stays for now
    'import/unambiguous': `off`,

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
        // Currently not actually enabled in 2.26.0, check back later
        // considerComments: true,
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

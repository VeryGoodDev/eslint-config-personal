module.exports = {
  plugins: [`n`],
  env: {
    node: true,
  },
  settings: {
    node: {
      allowModules: [`electron`],
      resolvePaths: [__dirname],
      tryExtensions: [`.js`, `.json`, `.node`],
    },
  },
  rules: {
    // Potential errors
    'n/handle-callback-err': `off`,
    'n/no-callback-literal': `off`,
    'n/no-exports-assign': `off`,
    'n/no-extraneous-import': `error`,
    'n/no-extraneous-require': `error`,
    'n/no-missing-import': `error`,
    'n/no-missing-require': `error`,
    'n/no-new-require': `error`,
    'n/no-path-concat': `error`,
    // Generally a good practice to follow, the docs for this rule convinced me. May override via comment occasionally if needed
    'n/no-process-exit': `error`,
    // Not something I've ever dealt with before, can add convertPath settings as needed if I do
    'n/no-unpublished-bin': [`error`, { convertPath: {} }],
    // Not fully sure what these no-unpublished- rules are doing but they are causing errors that don't make sense so off they will stay
    'n/no-unpublished-import': `off`,
    'n/no-unpublished-require': `off`,
    // These unsupported feature rules are nice in theory, but the plugin hasn't been updated in awhile and the JS ecosystem moves too fast to reasonably expect to keep it or your own code up-to-date all the time, so I'd rather keep these off and just use good judgment on whether something is supported well enough to use
    'n/no-unsupported-features/es-builtins': `off`,
    'n/no-unsupported-features/es-syntax': `off`,
    'n/no-unsupported-features/node-builtins': `off`,
    'n/process-exit-as-throw': `off`,
    'n/shebang': `off`,

    // Best practices
    // This one disabled for similar reasons to the unsupported features, would rather use good judgment in avoiding deprecated APIs
    'n/no-deprecated-api': `off`,

    // Stylistic stuff
    'n/callback-return': `off`,
    'n/exports-style': [
      `error`,
      `module.exports`,
      {
        allowBatchAssign: false,
      },
    ],
    // Too heavy-handed, was having issues recognizing a nested scoped package as a module not needing an extension
    'n/file-extension-in-import': `off`,
    'n/global-require': `error`,
    'n/no-mixed-requires': [
      `error`,
      {
        allowCall: false,
        grouping: true,
      },
    ],
    'n/no-process-env': `off`,
    // Probably covered by no-restricted-import in base config
    'n/no-restricted-import': `off`,
    'n/no-restricted-require': `off`,
    'n/no-sync': `error`,
    'n/prefer-global/buffer': [`error`, `always`],
    'n/prefer-global/console': [`error`, `always`],
    'n/prefer-global/process': [`error`, `always`],
    'n/prefer-global/text-decoder': [`error`, `always`],
    'n/prefer-global/text-encoder': [`error`, `always`],
    'n/prefer-global/url-search-params': [`error`, `always`],
    'n/prefer-global/url': [`error`, `always`],
    'n/prefer-promises/dns': `error`,
    'n/prefer-promises/fs': `error`,
  },
}

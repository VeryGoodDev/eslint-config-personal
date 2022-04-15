module.exports = {
  plugins: [`node`],
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
    'node/handle-callback-err': `off`,
    'node/no-callback-literal': `off`,
    'node/no-exports-assign': `off`,
    'node/no-extraneous-import': `error`,
    'node/no-extraneous-require': `error`,
    'node/no-missing-import': `error`,
    'node/no-missing-require': `error`,
    'node/no-new-require': `error`,
    'node/no-path-concat': `error`,
    // Generally a good practice to follow, the docs for this rule convinced me. May override via comment occasionally if needed
    'node/no-process-exit': `error`,
    // Not something I've ever dealt with before, can add convertPath settings as needed if I do
    'node/no-unpublished-bin': [`error`, { convertPath: {} }],
    'node/no-unpublished-import': `error`,
    'node/no-unpublished-require': `error`,
    // These unsupported feature rules are nice in theory, but the plugin hasn't been updated in awhile and the JS ecosystem moves too fast to reasonably expect to keep it or your own code up-to-date all the time, so I'd rather keep these off and just use good judgment on whether something is supported well enough to use
    'node/no-unsupported-features/es-builtins': `off`,
    'node/no-unsupported-features/es-syntax': `off`,
    'node/no-unsupported-features/node-builtins': `off`,
    'node/process-exit-as-throw': `off`,
    'node/shebang': `off`,

    // Best practices
    // This one disabled for similar reasons to the unsupported features, would rather use good judgment in avoiding deprecated APIs
    'node/no-deprecated-api': `off`,

    // Stylistic stuff
    'node/callback-return': `off`,
    'node/exports-style': [
      `error`,
      `module.exports`,
      {
        allowBatchAssign: false,
      },
    ],
    'node/file-extension-in-import': [`error`, `always`],
    'node/global-require': `error`,
    'node/no-mixed-requires': [
      `error`,
      {
        allowCall: false,
        grouping: true,
      },
    ],
    'node/no-process-env': `off`,
    // Probably covered by no-restricted-import in base config
    'node/no-restricted-import': `off`,
    'node/no-restricted-require': `off`,
    'node/no-sync': `error`,
    'node/prefer-global/buffer': [`error`, `always`],
    'node/prefer-global/console': [`error`, `always`],
    'node/prefer-global/process': [`error`, `always`],
    'node/prefer-global/text-decoder': [`error`, `always`],
    'node/prefer-global/text-encoder': [`error`, `always`],
    'node/prefer-global/url-search-params': [`error`, `always`],
    'node/prefer-global/url': [`error`, `always`],
    'node/prefer-promises/dns': `error`,
    'node/prefer-promises/fs': `error`,
  },
}

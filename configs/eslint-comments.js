module.exports = {
  plugins: [`eslint-comments`],
  rules: {
    // Best practices
    'eslint-comments/disable-enable-pair': [
      `error`,
      {
        allowWholeFile: true,
      },
    ],
    'eslint-comments/no-aggregating-enable': `off`,
    'eslint-comments/no-duplicate-disable': `error`,
    'eslint-comments/no-unlimited-disable': `error`,
    'eslint-comments/no-unused-disable': `error`,
    'eslint-comments/no-unused-enable': `error`,

    // Stylistic
    'eslint-comments/no-restricted-disable': `off`,
    'eslint-comments/no-use': `off`,
    'eslint-comments/require-description': `error`,
  },
}

import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
  },
  {
    rules: {
      'max-len': [
        'error',
        { code: 115, tabWidth: 2, comments: 100 },
      ],
    },
    ignores: [
      '.yarn/**/*',
      '.devcontainer/*.json',
      '.vscode/*.json',
      'commitlint.config.js',
      '.README.md',
    ],
  },
  {
    files: ['.yarn/**/*'],
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
    },
  },
)

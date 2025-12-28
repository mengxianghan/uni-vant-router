import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: {
      html: true,
      css: true,
      markdown: true,
    },
    typescript: true,
    rules: {
      'regexp/no-unused-capturing-group': 'off',
      'ts/no-unsafe-function-type': 'off',
      'no-useless-call': 'off',
    },
  },
)

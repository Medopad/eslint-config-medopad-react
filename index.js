module.exports = {
  env: {
    jest: true
  },
  extends: [
    'medopad',
    'standard-react',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended'
  ],
  plugins: [
    'react',
    'jsx-a11y',
    'jest'
  ],
  rules: {
    'node/no-unsupported-features': [
      'error',
      {
        'ignores': [
          'modules'
        ]
      }
    ],
    'react/jsx-boolean-value': ['error', 'always']
  }
}

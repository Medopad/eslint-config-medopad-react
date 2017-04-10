module.exports = {
  env: {
    mocha: true
  },
  extends: './index.js',
  parserOptions: {
    sourceType: 'script'
  },
  rules: {
    'node/no-unsupported-features': ['error', {
      ignores: ['modules']
    }]
  }
}

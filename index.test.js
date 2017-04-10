const CLIEngine = require('eslint').CLIEngine
const should = require('should')
const config = require('./')

describe('Medopad\'s ESLint configuration for React', () => {
  it('should have property `env`', () => {
    should(config).have.property('env')
  })

  it('should have property `extends`', () => {
    should(config).have.property('extends')
  })

  it('should have property `plugins`', () => {
    should(config).have.property('plugins')
  })

  it('should have all required modules listed as dependencies', () => {
    config.extends.forEach((config) => {
      if (!config.startsWith('plugin')) {
        (() => require.resolve(`eslint-config-${config}`)).should.not.throw()
      }
    })

    config.plugins.forEach((plugin) => {
      (() => require.resolve(`eslint-plugin-${plugin}`)).should.not.throw()
    })
  })

  describe('Rules', () => {
    const cli = new CLIEngine({
      configFile: 'index.js'
    })

    it('should validate `react/jsx-boolean-value`', () => {
      const code = 'import React from \'react\'\n'

      should(cli.executeOnText(
        code + 'React.render(<input required={true} />)\n'
      ).errorCount).equal(0)

      should(cli.executeOnText(
        code + 'React.render(<input required={false} />)\n'
      ).errorCount).equal(0)

      should(cli.executeOnText(
        code + 'React.render(<input required />)\n'
      ).errorCount).equal(1)
    })
  })
})

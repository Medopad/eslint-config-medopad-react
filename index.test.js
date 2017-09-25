const CLIEngine = require('eslint').CLIEngine
const should = require('should')

const forEach = require('lodash').forEach
const startsWith = require('lodash').startsWith

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
    forEach(config.extends, (config) => {
      if (!startsWith(config, 'plugin')) {
        (() => require.resolve(`eslint-config-${config}`)).should.not.throw()
      }
    })

    forEach(config.plugins, (plugin) => {
      (() => require.resolve(`eslint-plugin-${plugin}`)).should.not.throw()
    })
  })

  describe('Rules', () => {
    const cli = new CLIEngine({
      configFile: 'index.js'
    })

    it('should validate `node/no-unsupported-features`', () => {
      should(cli.executeOnText(
        'export const test = \'This is only a test\'\n'
      ).errorCount).equal(0)
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

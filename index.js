'use strict'

module.exports = function dsf (options) {
  const dsf = require('node-dsf')
  const buildQuery = require('./lib/build-query')
  const seneca = this

  seneca.add('role:dsf, cmd:lookup', (args, done) => {
    const dsfQuery = buildQuery(args, options)

    const dsfOptions = {
      method: options.method || 'hentDetaljer',
      config: options.config,
      query: dsfQuery
    }

    dsf(dsfOptions, (error, data) => {
      if (error) {
        done(error, null)
      } else {
        done(null, data)
      }
    })
  })

  return options.tag || 'seneca-dsf'
}

'use strict'

module.exports = (args, opts) => {
  const options = opts || {}
  var query = {
    foedselsnr: args.foedselsnr
  }

  if (options && options.saksref) {
    query.saksref = options.saksref
  }

  if (args.etternavn) {
    query.etternavn = args.etternavn
  }

  if (args.fornavn) {
    query.fornavn = args.fornavn
  }

  return query
}

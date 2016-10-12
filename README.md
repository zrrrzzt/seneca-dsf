[![Build Status](https://travis-ci.org/zrrrzzt/seneca-dsf.svg?branch=master)](https://travis-ci.org/zrrrzzt/seneca-dsf)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# seneca-dsf
Lookup data from DSF (Det sentrale folkeregister). 

To obtain login credentials and other permissions go to [infotorg.no](https://www.infotorg.no)
                                                   
## Usage

See all supported methods (dsfOption.method) at [node-dsf](https://github.com/telemark/node-dsf#supported-methods)

```JavaScript
'use strict'

const seneca = require('seneca')()
const dsf = require('seneca-dsf')

const dsfOptions = {
  saksref: 'systemtest-av-seneca-dsf',
  method: 'hentDetaljer',
  config: {
    url: 'http://ws-test.infotorg.no/xml/ErgoGroup/DetSentraleFolkeregister1_4/2015-08-10/DetSentraleFolkeregister1_4.wsdl',
    namespaceBrukersesjon: 'http://ws.infotorg.no/xml/Admin/Brukersesjon/2006-07-07/Brukersesjon.xsd',
    distribusjonskanal: 'PTP',
    systemnavn: 'seneca-dsf',
    brukernavn: 'your-username',
    passord: 'your-password'
  }
}

const payload = {
  foedselsnr: '01010750160',
  etternavn: 'topstad',
  fornavn: 'tomas'
}

seneca.use(dsf, dsfOptions)

seneca.act('role: dsf, cmd: lookup', payload, (error, data) => {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
```

## License
[MIT](LICENSE)
const repl = require('repl')

r = repl.start('recipe_connection > ')

r.context = Object.assign(
  r.context,
  {
    ...require('ramda'),
    axios: require('axios'),
    crypto: require('crypto'),
    ducks: require('@articulate/ducks'),
    funky: require('@articulate/funky'),
    joi: require('joi'),
    kratos: require('@oryd/kratos-client'),
    lodash: require('lodash'),
    qs: require('query-string'),
    requireDir: require('require-dir'),
    reselect: require('reselect'),
    sinon: require('sinon')
  }
)

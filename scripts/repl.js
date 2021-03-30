const repl = require('repl')

r = repl.start('recipe_connection > ')

r.context = Object.assign(
  r.context,
  {
    ...require('ramda'),
    axios: require('axios'),
    crypto: require('crypto'),
    ducks: require('@articulate/ducks'),
    joi: require('joi'),
    kratos: require('@oryd/kratos-client'),
    lodash: require('lodash'),
    requireDir: require('require-dir')
  }
)

const repl = require('repl')

r = repl.start('recipe_connection > ')

r.context = Object.assign(
  r.context,
  {
    lodash: require('lodash'),
    axios: require('axios'),
    kratos: require('@oryd/kratos-client'),
    requireDir: require('require-dir'),
    ...require('ramda')
  }
)

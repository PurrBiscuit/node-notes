const repl = require('repl')

r = repl.start('recipe_connection > ')

// the 'classnames' package doesn't work properly
// in this repl.js file; use in a regular node repl instead.

r.context = Object.assign(
  r.context,
  {
    ...require('ramda'),
    _: require('highland'),
    axios: require('axios'),
    crypto: require('crypto'),
    crocks: require('crocks'),
    ducks: require('@articulate/ducks'),
    EventEmitter: require('eventemitter3'),
    funky: require('@articulate/funky'),
    joi: require('joi'),
    kratos: require('@oryd/kratos-client'),
    lodash: require('lodash'),
    md: require('markdown-it')({ html: true }),
    qs: require('query-string'),
    requireDir: require('require-dir'),
    reselect: require('reselect'),
    sinon: require('sinon'),
    styled: require('styled-components')
  }
)

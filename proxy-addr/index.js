const proxyAddr = require('proxy-addr')

const req = {
  headers: {
    'x-forwarded-for': '1.1.1.1,2.2.2.2'
  },
  socket: {
    remoteAddress: '::ffff:172.31.28.1'
  }
}

const trust = proxyAddr.compile([ 'loopback', 'uniquelocal', 'linklocal' ])

console.log('proxyAddr.all(req, trust) ->', proxyAddr.all(req, trust))

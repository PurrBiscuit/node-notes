const { get } = require('axios')

const getRequest = url => {
  return get(url, {
    headers: {
      'User-Agent': 'Proxyquire-Examples'
    }
  })
}

const returnAxiosGet = () => get

module.exports = {
  getRequest,
  returnAxiosGet
}

const axios = require('axios')

const updateRecord = records => {}

const getRequest = url => {
  return axios.get(url, {
    headers: {
      'User-Agent': 'Proxyquire-Examples'
    }
  })
}

const returnAxiosObject = () => axios

module.exports = {
  getRequest,
  returnAxiosObject
}

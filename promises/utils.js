// function that will return a promise that resolves
// or rejects after a certain amount of time passes
const promisifiedTimeout = (time, status, message) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === 'resolve') return resolve(message)

      return reject(message)
    }, time)
  })

module.exports = {
  promisifiedTimeout
}

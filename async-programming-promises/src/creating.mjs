import setText, { appendText } from "./results.mjs";

export function timeout(time) {
  const wait = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`this promise resolved after ${time} seconds`)
    }, time)
  })

  wait.then(text => setText(text))
}

export function interval(time) {
  let counter = 0

  const wait = new Promise((resolve, reject) => {
    setInterval(() => {
      resolve(`Counter = ${++counter}`)
    }, time)
  })

  wait.then(text => setText(text))
      .finally(() => appendText(` -- Done ${counter}`))
}

export function clearIntervalChain(time) {
  let counter = 0
  let interval

  const wait = new Promise((resolve, reject) => {
    interval = setInterval(() => {
      resolve(`Counter = ${++counter}`)
    }, time)
  })

  wait.then(text => setText(text))
      .finally(() => clearInterval(interval))
}

export function xhr() {
  const request = new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:3000/users/7')

    xhr.onload = () => {
      if (xhr.status === 200) return resolve(xhr.responseText)

      reject(`Request Failed - ${xhr.statusText}`)
    }

    xhr.onerror = () => reject('Request Failed')

    xhr.send()
  })

  request
    .then(result => setText(result))
    .catch(error => setText(error))
}

export function allPromises() {
  const categories = axios.get('http://localhost:3000/itemCategories')
  const statuses = axios.get('http://localhost:3000/orderStatuses')
  const userTypes = axios.get('http://localhost:3000/userTypes')
  const addressTypes = axios.get('http://localhost:3000/addressTypes')


  Promise.all([
    categories,
    statuses,
    userTypes,
    addressTypes,
  ])
  .then(([ cats, stats, types, addresses ]) => {
    setText(JSON.stringify(cats.data))
    appendText(JSON.stringify(stats.data))
    appendText(JSON.stringify(types.data))
    appendText(JSON.stringify(address.data))
  })
  .catch(error => setText(error))
}

export function allSettled() {
  const categories = axios.get('http://localhost:3000/itemCategories')
  const statuses = axios.get('http://localhost:3000/orderStatuses')
  const userTypes = axios.get('http://localhost:3000/userTypes')
  const addressTypes = axios.get('http://localhost:3000/addressTypes')


  Promise.allSettled([
    categories,
    statuses,
    userTypes,
    addressTypes,
  ])
  .then(values => {
    const results = values.map(value => {
      if (value.status === 'fulfilled')
        return `FULFILLED: ${JSON.stringify(value.value.data)}  `

      return `REJECTED: ${value.reason.message}  `
    })

    setText(results)
  })
  .catch(error => setText(error))
}

export function race() {
  const users = axios.get("http://localhost:3000/users")
  const backup = axios.get("http://localhost:3001/users")

  Promise.race([
    users,
    backup
  ])
  .then(users => setText(JSON.stringify(users.data)))
  .catch(error => setText(error))
}

// use the crypto library to generate a sha256 in JS
const crypto = require('crypto')

// the easiest way to generate a sha256 hash;
// use the hex digest to output it as a hexadecimal string (what sha256 output should look like)
const data = 'somedatatohash'
const hash = crypto.createHash('sha256').update(data).digest('hex')
console.log(`\nData being hashed is: ${data}\n`)
console.log(`Hex output is -> ${hash}`)

console.log('---------------------------------------------------------------------------------')

// you can also return the digest as a buffer and then use .toString()
// to convert it to different encodings later.
const data2 = 'someotherdatatohash'

console.log(`\nData being hashed is: ${data2}\n`)

const hashier = crypto.createHash('sha256').update(data2).digest()
console.log(hashier)
console.log(`Base64 output is -> ${hashier.toString('base64')}`)
console.log(`Hex output is -> ${hashier.toString('hex')}`)

console.log('---------------------------------------------------------------------------------')

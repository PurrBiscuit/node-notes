const { yellow } = require('chalk')

const underlinePrint = msg => {
  console.log(`\n${yellow(msg)}`)
  console.log(yellow('-').repeat(msg.length))
}

module.exports = {
  underlinePrint
}

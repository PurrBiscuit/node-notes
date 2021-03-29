const { underlinePrint } = require('../utils')

// implement a method that will rearrange the characters
// in a string and return a new string as the result

String.prototype.rearrange = function(cycles = 10) {
  const arr = [ ...this ]

  for (let i = 0; i < cycles; i++) {
    const randomNum = Math.floor(Math.random() * this.length)
    const randomNum2 = Math.floor(Math.random() * this.length)

    const temp = arr[randomNum]
    arr[randomNum] = arr[randomNum2]
    arr[randomNum2] = temp
  }

  return arr.join('')
}

const rearrangeMe = 'thisstringneedstobearranged'

underlinePrint('Calling the new rearrange string method:')

console.log(`result from calling on the string - ${rearrangeMe}: ${rearrangeMe.rearrange()}`)

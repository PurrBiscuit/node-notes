const callback = fn => {
  fn()
}

class BrokenPerson {
  constructor(init) {
    this.firstName = init.firstName,
    this.lastName = init.lastName
  }

  sayHi() {
    if (this) console.log(`Hi, ${this.firstName} ${this.lastName}`)
    else console.log(`Skipping hi since "this" is ${this}`)
  }

  callbackHi() {
    // this doesn't work since the context of this gets lost
    // in the SayHi function as it's passed as a callback to setTimeout
    callback(this.sayHi)
  }
}

const personObj = {
  firstName: 'Marty',
  lastName: 'McFly'
}

console.log('\nOutput from brokenPerson object:')
console.log(`------------------------------------`)

const brokenPerson = new BrokenPerson(personObj)
brokenPerson.sayHi()
// will result a string with undefined logged
brokenPerson.callbackHi()


class PersonBind {
  constructor(init) {
    this.firstName = init.firstName,
    this.lastName = init.lastName
  }

  sayHi() {
    if (this) console.log(`Hi, ${this.firstName} ${this.lastName}`)
    else console.log(`Skipping hi since "this" is ${this}`)
  }

  callbackHi() {
    // this works since the context of this is bound to the sayHi
    // function before it's passed to the callback function
    callback(this.sayHi.bind(this))
  }
}

console.log('\nOutput from personBind object:')
console.log('------------------------------------')

const personBind = new PersonBind(personObj)
personBind.sayHi()

// will result in the same string returned as sayHi this time
personBind.callbackHi()



class PersonArrow {
  constructor(init) {
    this.firstName = init.firstName,
    this.lastName = init.lastName
  }

  sayHi() {
    if (this) console.log(`Hi, ${this.firstName} ${this.lastName}`)
    else console.log(`Skipping hi since "this" is ${this}`)
  }

  callbackHi() {
    // this works since the anonymous arrow function that's passed
    // to callback will preserve the "this" context from sayHi
    callback(() => this.sayHi())
  }
}

console.log('\nOutput from personArrow object:')
console.log('------------------------------------')

const personArrow = new PersonArrow(personObj)
personArrow.sayHi()
// will result in the same string returned as sayHi this time
personArrow.callbackHi()

console.log()

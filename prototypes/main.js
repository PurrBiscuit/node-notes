const { underlinePrint } = require('../utils')

underlinePrint('Using the Object.setPrototypeOf method:')

function talk() {
  console.log(this.sound)
}

const animal = {
  talk
}

const cat = {
  sound: 'meow!'
}

// trying to call cat.talk method before it
// exists on the cat object will result in an error
try {
  cat.talk()
} catch (error) {
  console.log(`ERROR: ${error.message}`)
}

// setting the prototype of cat to be animal will
// make the talk method available to the cat object.
// this is similar to class type inheritance in other languages.
Object.setPrototypeOf(cat, animal)

cat.talk()


// using the cat object to delegate the sound property
// to on a new bigCat object using Object.setPrototypeOf

underlinePrint('Using Object.setPrototypeOf to get access to a prototypes property:')

const bigCat = {
  loudSound: function () {
    console.log(this.sound.toUpperCase())
  }
}

// Object.setPrototypeOf will make it so that this.sound
// can be found on the original cat object through bigCat
Object.setPrototypeOf(bigCat, cat)

bigCat.talk()
bigCat.loudSound()

// Updating the prototypes method after using Object.setPrototypeOf
// will result in the objects that use that prototype being updated as well

underlinePrint('Updating the talk method on the animal prototype:')

animal.talk = function() {
  console.log('the talk method has been updated')
}

// the two objects that are using the animal prototype will now
// have the updated method instead of the original one
cat.talk()
bigCat.talk()

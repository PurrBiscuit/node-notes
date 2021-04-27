const assert = require('assert')
const sinon = require('sinon')

function greet(name) {    
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var now  = new Date();
  var formattedDate = now.toLocaleDateString("en-US", options);
  return `Hello, ${name}! Today is ${formattedDate}`;
}

describe("testing the greeter", function() {
  it("checks the greet function", function() {
    const clock = sinon.useFakeTimers(new Date(2021, 0, 15))
    console.log(new Date())

    assert.strictEqual(greet('Alice'), 'Hello, Alice! Today is Friday, January 15, 2021')

    clock.restore()
    console.log(new Date())
  });
});

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
    // overwriting the clock used by the system to a hardcoded value
    const clock = sinon.useFakeTimers(new Date(2021, 0, 15))

    assert.strictEqual(greet('Alice'), 'Hello, Alice! Today is Friday, January 15, 2021')

    // reseting the useFakeTimers method overwriting so it's back to normal
    clock.restore()
  });
});

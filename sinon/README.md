# Sinon

## References

- [Sinon JS Official Docs](https://sinonjs.org/)
- [Testim Blog - Sinon JS Tutorial: A Beginner's Guide To Mocking](https://www.testim.io/blog/sinon-js-tutorial/)

## Test Doubles

"Test Double" is the generic term for an object or procedure you use to replace a real object or procedure that's hard to test.  The test double looks and behaves as if it was the real thing, but without incurring any side-effects (writing to database, making a network call, etc.) whatsoever.  There are several types of test doubles, including spies, stubs and mocks.

### Spies

Spies record some information based on how they were called.  They do more than just adhere to the expected interface.  They can also record useful information about the interactions that happened between them and the test code.

`sinon.spy()` can be used to create a fake function that can be spied on.

`sinon.spy(obj, '<functionname>')` can be used to wrap an actual method on an object so that it can be spied on.  This won't alter the behavior of the method at all, but rather will let us see how the method was called.

### Stubs

Stubs provide canned answers to calls made during the test.  They can be thought of as a dumb object that simply implements the interface of the object we're stubbing out.  It doesn't try to be a working implementation.

`sinon.stub(obj, '<functionname>')` can be used to replace a method on an object.  This essentially overrides the old method and replaces it with a new one that we can spy on AND control the behavior of (ie. what it returns, if it throws an error, etc.).

### Mocks

Mocks are objects pre-programmed with expectations which form a specification of the calls they are expected to receive.  Mocks are all about interaction.  When you use mocks, you care about how your object interacted with the test code.  

Mocks are fake methods (like spies) with pre-programmed behavior (like stubs) as well as pre-programmed expectations.

`sinon.mock(obj)` can be used to mock an object.  An example would look like:

```
const res = {
  render: function() {}
}

const mock = sinon.mock(res)
```

# Testing in Javascript

## Styles of Testing

![types_of_testing](https://user-images.githubusercontent.com/4661524/115572562-0487da80-a28e-11eb-8279-00a58442c633.jpg)

### Unit Testing

Find the smallest available piece of an application and test it (ie. a single function in a Javascript file).  If the unit depends on anything else, we'll mock it.  

### Integration Testing

Tieing some things together and testing them at one time to see how they interact.  Still use mocking, like in unit testing, to mimic calls that the thing we are integration testing might depend on.

### Functional Testing

Testing the whole application together at one time; end to end testing.  Black box testing - we have no idea what the underlying implementation of the application looks like, all we know is that we input something and get an output from the application as a result.

## Mocha

### References

- [Official Mocha Documentation](https://mochajs.org/)

### Overview

Mocha is just a test runner; a mechanism by which the tests you write in javascript are run.

## Chai

### References

- [Official Chai Documentation](https://www.chaijs.com/)

### Overview

Chai is an assertion library.  You can use any assertion library you'd like within mocha, so long as it throws an `Error` to signify a failing test, but chai is popular because it's a more natural language based asssertion library.

## Sinon

### References

- [Official Sinon Documentation](https://sinonjs.org/)

### Overview

Allows you to easily mock things out, like objects and functions.  You can use spys in sinon to create functions that you can view the result of what happened when it was called (what sort of arguments were given to it, how many times it was called, etc.).

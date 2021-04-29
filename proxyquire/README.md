# Proxyquire

## References

- [Proxyquire - Yarn Documentation](https://classic.yarnpkg.com/en/package/proxyquire)
- The examples in the `../sinon` directory (`sinon` is different then `proxyquire` but they can be used hand-in-hand)

## Overview

Proxies nodejs `require` in order to allow overriding dependencies during testing.  A dependency is a package or module that a function relies on.  For example, `fs` is a package that could be brought into a module in a project.  We could then have a function in that module that looks like the following:

```
const fs = require('fs')

const readFile = filename => {
  return fs.readFileSync(`./data/${filename}`)
}

module.exports = {
  readfile
}
```

Testing this function would require calling the actual `fs.readFileSync` method unless we stubbed out that function.  There are several different ways we could do that.

1. Require the `fs` module in our testing file and use `sinon.stub(fs, 'readFileSync')` to override the method on the `fs` object.

    This approach requires that the module that we are testing uses `const fs = require('fs')` to import the package.  It won't work if the module uses destructuring, like `const { readFileSync } = require('fs')`, UNLESS we require the module that's using `fs` into the testing suite AFTER we stub out the method in `fs`.  This is because once we require the module we want to test, it will run the `require('fs')` right away and save a reference to the method in the destructuring as a function that's always pointed to the method that was part of `fs` when it was first required.  It won't update this reference as the object's method gets stubbed out later on.

    See [this Stack Overflow post](https://stackoverflow.com/questions/52587999/sinon-stub-function-used-with-destructuring) for more information about this.

    Reference the following examples:
      - ./examples/overriddenDestructured.js
      - ./examples/notOverriddenDestructured.js

1. Use `proxyquire` to import the upstream module and be able to stub out dependency methods on the fly.  This also requires that the upstream module imports the package with something like `const fs = require('fs')` instead of using destructuring.  If destructuring is used then the same limitations to `require` apply to `proxyquire` in that the upstream module using the dependency with stubs needs to be required AFTER the stubbing happens.  An additional limitation is that you can't stub out methods on the dependency on the fly if destructuring is used.

    Reference the following examples:
      - ./examples/proxyquireUrlGetter.js

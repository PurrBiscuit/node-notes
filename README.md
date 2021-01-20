# Node REPL Test Env

A place to try out new NPM module's in the node REPL.

## To Use

1.) After `git clone` run `yarn install`.
2.) Start the node REPL from the same directory that step 1 was run in.
3.) `require` any module's you want to use in the REPL. (ie. `const R = require('ramda')`)
4.) Try it out. (ie. `const curriedFunction = R.curry(someFunction)`)

## Adding a package

Is as simple as issuing the `yarn add <package_name>` command.  Don't forget to push the updated `yarn.lock` and `package.json` files up to Github afterward.

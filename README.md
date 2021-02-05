# Node REPL Test Env

A place to try out new NPM module's in the node REPL.

## To Use

1.) After `git clone` run `yarn install`.\
2.) Run `yarn repl` to start the `repl` with libraries loaded into it already.

## Adding a package

1.) Run `yarn add <package_name>`.
2.) Add a `require` statement to the `scripts/repl.js` file for the new package.
3.) Push the updated `yarn.lock` and `package.json` files up to Github afterward.

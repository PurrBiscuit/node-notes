# Node Notes

A place to store notes/examples of different node.js techniques, quirks and NPM packages.  Also includes a `scripts/repl.js` file that will preload a bunch of NPM packages into a REPL for a quick sandbox environment to try them out in.

## To Use

1. After `git clone` run `yarn install`.
2. Run `yarn repl` to start the `repl` with libraries loaded into it already.

## Adding a Package to the REPL

1. Run `yarn add <package_name>`.
2. Add a `require` statement to the `scripts/repl.js` file for the new package.
3. Push the updated `yarn.lock` and `package.json` files up to Github afterward.

# 🏗 ts-scaffold

Scaffold project for Typescript projects, with Unit Tests and basic dependencies set up.

## Features:

1. ⭐️ Bump script to automatically bump patch version (x.x.x.1, forth location)
2. ⭐️ Ready-to-use Github Actions config file to seamlessly enable Continuous-Integration to run your Jest tests each commit on any branch and Continuous-Delivery to publish NPM package on each commit on main
3. Jest setup with ready-to-run configuration for local and CI + coverage reports
4. Scaffold for Main Program App (inspired by .net's Main program) for quick testing and running through command line (e.g: $ node build/Main.js)
5. Scaffold for global extensions
6. VSCode pre-made debugger settings:
    1. Node attach
    2. Launch & debug current opened file
    3. Debug current Jest test file
7. Opinionated TSConfig targeting ES6 to get you going quickly
8. Build & watch yarn/npm commands
9. Prettier

## Develop:

### Init new scaffold:

> `$ git clone --depth=1 git@github.com:Livshitz/ts-scaffold.git ts-scaffold-temp && rm -rf ts-scaffold-temp/.git`

\* **Publishing to npm:** [`publish.yml`](./.github/workflows/publish.yml) releases on every push to `main`. It does **not** store an npm token in the repo — it fetches one at publish time from a scoped, read-only secrets broker. Set two repo secrets to enable it: `NPM_TOKEN_URL` (the broker's single-key endpoint) and `NPM_BROKER_SECRET` (its read-only credential). Everything else works out of the box.

#### Interact with npm binary:
Run `yarn link` to make the command set up in `package.json` be available as symlink, and execute: 
> `$ my-command`  



### Build:

> `$ yarn build`

### Watch & Build:

> `$ yarn watch`

### Run tests:

> `$ yarn test <optional: path-to-test-file>`

### Debug:

> ` Select 'typescript' debug configuration, open file in vscode (to run it specifically) and run debugger`

or:

> ` Select 'Node Attach' debug configuration, run specific file in debug mode (you can pass also args):`

> `$ node --inspect build/Main.js`

## Use:

### Run:

> `$ yarn run`  
> or:  
> `$ node build/Main.js`

---

Scaffolded with [🏗 TS-scaffold](https://github.com/Livshitz/ts-scaffold.git)

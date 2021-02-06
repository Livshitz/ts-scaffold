# ts-scaffold
Scaffold project for Typescript projects, with Unit Tests and basic dependencies set up.

## Features:
1. Best practices configuration for most commonly used TS cases
2. Build & watch yarn/npm commands
3. Bump script to automatically bump patch version (x.x.x.1, forth location)
4. Jest setup with ready-to-run configuration for local and CI + coverage reports
5. Ready-to-use Github Actions config file to seamlessly enable Continuous-Integration to run your Jest tests each commit on any branch and Continuous-Delivery to publish NPM package on each commit on master
6. Scaffold for Main Program App (inspired by .net's Main program) for quick testing and running through command line (e.g: $ node build/Main.js)
7. Scaffold for global extensions
8. Auto pretty with Prettier
9. VSCode pre-made debugger settings:
	1. Node attach
 	2. Launch & debug current opened file
 	3. Debug current Jest test file

## Develop:

### Init new scaffold:
> ``` $ git clone --depth=1 git@github.com:Livshitz/ts-scaffold.git ts-scaffold-temp && rm -rf ts-scaffold-temp/.git ```

\* If you use this as scaffold for NPM package - make sure to add your NPM token in Github Secrets and change Github Actions config file with your github info:
[.github/workflows/nodejs.yml](./.github/workflows/nodejs.yml#L36)


### Build:
> ``` $ yarn build ```

### Watch & Build:
> ``` $ yarn watch ```

### Run tests:
> ``` $ yarn test ```

### Debug:
> ` Select 'typescript' debug configuration, open file in vscode (to run it specifically) and run debugger`  

or:   
> ` Select 'Node Attach' debug configuration, run specific file in debug mode (you can pass also args):`  

> ``` $ node --inspect build/Main.js ```  

## Use:

### Run:
> ``` $ yarn run ```  
or:   
``` $ node build/Main.js ```

-----
Scaffolded by [TS-scaffold](https://github.com/Livshitz/ts-scaffold.git)

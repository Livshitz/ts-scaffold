# ts-scaffold
Scaffold project for Typescript projects, with Unit Tests and basic dependencies set up

## Develop:

### Init new scaffold:
> ``` $ git clone --depth=1 git@github.com:Livshitz/ts-scaffold.git ts-scaffold-temp && rm -rf ts-scaffold-temp/.git ```

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

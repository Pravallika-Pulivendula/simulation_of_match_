# Simulation of cricket match
 
A TypeScript application to simulate the last 4 overs of the match, ball by ball.  

### Steps to run the TypeScript application

1. Start by downloading a code editor to write the code in. I used VSCode for this application. You can download the whatever editor you like.

2. TSC is a command-line application written in TypeScript, which requires NodeJS to run it. Install the NodeJS on your machine. You can find the instructions to set NodeJS up from their official [website](https://nodejs.org/en/).

3. Now we'll start installing TSC and TSLint using NPM (a package manager that comes from NodeJS). Start by typing the following command in your terminal:

    ```
    #Initialize a new NPM project (follow the prompts)
    npm init

    #Install TSC, TSLint, and type declarations for NodeJS
    npm install --save-dev typescript tslint @types/node

> Every TypeScript project should include a file called tsconfig.json in its root directory. tsconfig.json is where TypeScript projects define things like which files should be compiled, which directory to compile them to. 

4. Create a new file called tsconfig.json in your root folder, and add the following contents:

    ```
    {
        "compilerOptions":{
            "lib":["es2015"],
            "module":"commonjs",
            "sourceMap":true,
            "strict":true,
            "target":"es5",
            "downlevelIteration": true
    },
    "include":["src"]
    }
    ```
    tsconfig.json supports dozens of options, and the new ones can be added all the time.
    
5. Now you've set up your tsconfig.json, create a src folder containing your first TypeScript file:
    ```
    mkdir src
    touch src/app.ts
    ```
    Your project's folder structure should look like this:
    ```
    root_directory/
    |-node_modules/
    |-src/
    |  |_app.ts
    |-tsconfig.json
    ```
  
 6. Write all your code and then compile and run the TypeScript code by using following commands:
    ```
    #compile your TypeScript code with TSC
    src/tsc app.ts
    
    #run the run with NodeJS
    src/node app.js
    ```
   
   





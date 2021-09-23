# Simulation of cricket match
 
A TypeScript application to simulate the last 4 overs of the match, ball by ball.  

### Problem Statement

It's the finals of the T20 Cup! Bengaluru and Chennai, neighbours and fierce rivals, are
fighting it out for the title. Bengaluru's star batsman Kirat is at the crease. Can he win it for
Bengaluru? Write code to simulate the last 4 overs of the match.
It's the last 4 overs of the match. Bengaluru needs 40 runs to win and with 4 wickets left. Each
player has a different probability for scoring runs. Your coding problem is to simulate the match,
ball by ball. The match simulation will require you to use a weighted random number generation
based on probability to determine the runs scored per ball.

![image](https://user-images.githubusercontent.com/88448149/134458217-4795b03b-0f71-48ed-9a70-50449ff2410f.png)

#### Rules of the game:
1. Batsmen change strike end of every over. They also change strike when they score a
1,3 or 5
2. When a player gets out, the new player comes in at the same position.
3. Assume only legal balls are bowled (no wides, no no-balls etc..). Therefore an over is
always 6 balls.

#### Sample Output
Bengaluru won by 1 wicket and 2 balls remaining

Kirat Boli - 12 (6 balls)
NS Nodhi - 25 (11 balls)
R Rumrah - 2* (3 balls)
Shashi Henra - 2* (2 balls)

#### Sample commentary
4 overs left. 40 runs to win 
0.1 Kirat Boli scores 1 run
0.2 NS Nodhi scores 4 runs
0.3 NS Nodhi scores 1 run
0.4 Kirat Boli scores 2 runs
0.5 Kirat Boli scores 3 runs
0.6 NS Nodhi scores 1 run
3 overs left. 28 runs to win
1.1 NS Nodhi scores 2 runs
…
....


#### Guidelines
- Use your favorite language & editor
- Clean, OO (or functional if you prefer) code is expected. Preferably with tests.
- Add a README file detailing the instructions to run tests and the application.

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
   
   





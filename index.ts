#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep =()=>{
    return new Promise((res) => {
        setTimeout(res,2000);        
    })
}

async function welcome() {
 let rainbowTitle = chalkAnimation.rainbow(`lets start command line calculator`)   
 await sleep();
 rainbowTitle.replace(`with NODE.JS INQUIRER and CHALK`)
 await sleep();
 rainbowTitle.replace(`lets enjoy calculation!!!`)
 await sleep();
 rainbowTitle.stop();
 
 let pulseTitle = chalkAnimation.pulse(`DEVELOPED BY MUHAMMAD SHAHEER FOR TYPESCRIPT FACULTY TEST.`)
 await sleep();
 pulseTitle.stop();

 let neonTitle =chalkAnimation.neon(`
  _____________________
 |  _________________  |
 | | CALCULATOR   0. | |
 | |_________________| |
 |  ___ ___ ___   ___  |
 | | 7 | 8 | 9 | | + | |
 | |___|___|___| |___| |
 | | 4 | 5 | 6 | | - | |
 | |___|___|___| |___| |
 | | 1 | 2 | 3 | | x | |
 | |___|___|___| |___| |
 | | . | 0 | = | | / | |
 | |___|___|___| |___| |
 |_____________________| `);
 await sleep();
 neonTitle.stop();

 startloop();
}

async function askQuestion () {

    let answer = await inquirer.prompt([
        {
            type:"list",
            name:"operator",
            message:chalk.yellowBright("Which operator you want to perform?/n"),
            choices:["+ Addition","- Subraction","* Multiplication","/ Division"]
        },
        {
            type:"number",
            name:"num1" ,
            message: chalk.greenBright("Enter First Number: ")
        },
        {
            type:"number",
            name:"num2" ,
            message: chalk.greenBright("Enter Second Number: ")
        }
    ])
    switch(answer.operator){
     case "+ Addition":{
        console.log(chalk.blue(`${answer.num1} + ${answer.num2} = ${answer.num1+answer.num2}`));
        break;
     }  
     case "- Subraction":{
        console.log(chalk.blue(`${answer.num1} - ${answer.num2} = ${answer.num1-answer.num2}`));
        break;   
    } 
     case "* Multiplication":{
        console.log(chalk.blue(`${answer.num1} * ${answer.num2} = ${answer.num1*answer.num2}`));
        break; 
    } 
     case "/ Division":{
        console.log(chalk.blue(`${answer.num1} / ${answer.num2} = ${answer.num1/answer.num2}`));
        break;     
    } 
    default:{
        console.log("Default code.")
        break; 
    } 
}
}

async function startloop() {
    do{
        await askQuestion();
        var again = await inquirer.prompt([
        {
        type:"list",
        name: "restart",
        choices:[`Yes`,`No`],
        message: chalk.yellowBright("Do You Want To Continue : ")
        }
    ])
}while(again.restart == `Yes`);
            
}
    welcome();
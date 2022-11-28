#!/usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
async function userInput() {
    const rainbow = chalkAnimation.rainbow("Calculator Loading..."); // Animation starts
    setTimeout(() => {
        rainbow.stop();
        startAgain();
    }, 2000);
}
userInput();
async function askQuestion() {
    let answer = await inquirer.prompt([
        {
            type: "list",
            name: "operators",
            message: "Which operation you want to peform?",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
        {
            type: "number",
            name: "num1",
            message: "Enter first Number",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second Number",
        },
    ]);
    switch (answer.operators) {
        case "Addition":
            console.log(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`);
            break;
        case "Subtraction":
            console.log(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`);
            break;
        case "Multiplication":
            console.log(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`);
            break;
        case "Division":
            console.log(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`);
            break;
        default:
            console.log("No Operation Selected");
            break;
    }
}
async function startAgain() {
    let again;
    do {
        await askQuestion();
        again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: " Do want to play again? Press Y or N: ",
            },
        ]);
    } while (again.restart === "Y" || again.restart === "y");
}
// startAgain();

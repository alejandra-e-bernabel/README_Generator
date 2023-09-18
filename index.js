const inquirer = require ('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    //title
    "What is the title of your project?\n",
    //description
    "Provide a short description explaining the what, why, and how of your project. \nUse the following questions as a guide:\n- What was your motivation?\n- Why did you build this project?\n- What problem does it solve?\n- What did you learn?\n",
    //Table of contents
    "Would you like to include a table of contents?\n",
    //Installation
    "What are the steps required to install your project?\nProvide a step-by-step description of how to get the development environment running.\n",
    //Usage
    "Provide instructions and examples for use. Include screenshots as needed.\nTo add a screenshot, create an assets/images folder in your repository and import desired images.\n",
    //credits
    "List your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.\nIf you followed tutorials, include links to those here as well.\n",
    //license
    "What lisence would you like to use (select one)\n",
    //questions
    "What is the name of the person users should reach out to with questions?\n",
    "What is the email of the person users should reach out to with questions?\n",
    //contributing
    "Where should your users go to contribute to your project?\n" //default: https://choosealicense.com/
    // Tests
];

//test stuff
// const fileName = "alejandraExample";
// const data = "hello world";

// writeToFile(fileName,data);

//function to write README file
function writeToFile(fileName, data) {
    const fs = require("fs");
    fs.writeFile(fileName + ".md", data, (err) => err ? console.error(err) : console.log("information was received and a file was created."));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            //title
            {
                type: "name",
                message: questions[0],
                name: "title"
            },
            //description
            {
                type: "name",
                message: questions[1],
                name: "description"
            },
            //usage
            {
                type: "name",
                message: questions[2],
                name: "usage"
            },
            //table of contents
            {
                type: "name",
                message: questions[3],
                name: "tableOfContents"
            },
            //Installation
            {
                type: "name",
                message: questions[4],
                name: "installation"
            },
            //usage
            {
                type: "name",
                message: questions[5],
                name: "usage"
            },
            //credits
            {
                type: "name",
                message: questions[6],
                name: "credits"
            },
            //license
            {
                type: "name",
                message: questions[7],
                name: "license"
            },
            //questionName
            {
                type: "name",
                message: questions[8],
                name: "questionName"
            },
            //questionEmail
            {
                type: "name",
                message: questions[9],
                name: "questionEmail"
            },
            //contributing
            {
                type: "name",
                message: questions[10],
                name: "contributing"
            }
        ])
        .then(data => {
            console.log("The name of the project is " + data.title);
        })
}

// Function call to initialize app
init();

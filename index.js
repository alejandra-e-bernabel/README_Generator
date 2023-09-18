// TODO: Create an array of questions for user input
const questions = [
    //title
    "What is the title of your project?",
    //description
    "Provide a short description explaining the what, why, and how of your project. \nUse the following questions as a guide:\n- What was your motivation?\n- Why did you build this project?\n- What problem does it solve?\n- What did you learn?",
    //Table of contents
    "Would you like to include a table of contents?",
    //Installation
    "What are the steps required to install your project?\nProvide a step-by-step description of how to get the development environment running.",
    //Usage
    "Provide instructions and examples for use. Include screenshots as needed.\nTo add a screenshot, create an assets/images folder in your repository and import desired images.",
    //credits
    "List your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.\nIf you followed tutorials, include links to those here as well.",
    //license
    "What lisence would you like to use (select one)",
    //questions
    "What is the name of the person users should reach out to with questions?",
    "What is the email of the person users should reach out to with questions?",
    //contributing
    "Where should your users go to contribute to your project?" //default: https://choosealicense.com/
    // Tests
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fs = require ("fs");
    fs.writeFile ("sampleREADME.md"), data,(err)=> console.log("information was not received and a file could not be created.");
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

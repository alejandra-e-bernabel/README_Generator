const fs = require("fs");
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
    "A license lets other developers know what they can and cannot do with your project.\nIf you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).\n\nWhat lisence would you like to use?\n(select one)\n",
    //questions
    "What is the name of the person users should reach out to with questions?\n",
    "What is the email of the person users should reach out to with questions?\n",
    //contributing
    "Where should your users go to contribute to your project?\n" //default: https://choosealicense.com/
    // Tests
];

//test stuff
const fileName = "alejandraExample";
// const data = "hello world";

// writeToFile(fileName,data);

//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + ".md", data, (err) => err ? console.error(err) : console.log("information was received and a file was created."));
}

function appendToFile (fileName, data) {
    fs.appendFile(fileName + ".md", data, (err) => err ? console.error(err) : console.log("information was received and a file was created."));
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
            //table of contents
            {
                type: "confirm",
                message: questions[2],
                name: "tableOfContents"
            },
            //installation
            {
                type: "name",
                message: questions[3],
                name: "installation"
            },
            //usage
            {
                type: "name",
                message: questions[4],
                name: "usage"
            },
            //Credits
            {
                type: "name",
                message: questions[5],
                name: "credits"
            },
            //license
            //BSD, MIT, GNU GPL, Apache License 2.0, ISC License
            {
                type: "list",
                message: questions[6],
                choices: ["BDS", "MIT", "GNU GPL", "Apache License 2.0", "ISC License"],
                name: "license"

            },
            //questionName
            {
                type: "name",
                message: questions[7],
                name: "questionName"
            },
            //questionEmail
            {
                type: "name",
                message: questions[8],
                name: "questionEmail"
            },
            // //questionEmail
            // {
            //     type: "name",
            //     message: questions[9],
            //     name: "questionEmail"
            // },
            // //contributing
            // {
            //     type: "name",
            //     message: questions[10],
            //     name: "contributing"
            // }
        ])
        .then(data => {
            const titleString = "# " + data.title;
            writeToFile(fileName, titleString + "\n");

            const descriptionString = "## Description\n\n" + data.description + "\n\n";
            let tableOfContentsString = "";

            if (data.tableOfContents) {
                tableOfContentsString = "## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Credits](#credits)\n- [License](#license)";
            }

            const installationString = "\n\n## Installation\n\nThe necessary applications to run this program are:\n" + data.installation + "\n\n";
            const usageString = "## Usage\n\n" + data.usage + "\n\n";
            const creditsString = "## Credits \n\n" + data.credits + "\n\n";

            const questionString = "## Questions? \n\nIf you have questions or have notived a bug in this code, please reach out to " + data.questionName + " at " + data.questionEmail;

            let licenseString = "";
            switch (data.license) {
                case "BDS":
                    licenseString = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
                    break;
                
                case "MIT":
                    licenseString = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                    break;

                case "GNU GPL":
                    licenseString = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                    break;
                    
                case "Apache License 2.0":
                    licenseString = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                    break;
                
                case "ISC License":
                    licenseString = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
                    break;

                default: 
                licenseString = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            }

            const appendToFileString = licenseString + descriptionString + tableOfContentsString + installationString + usageString + creditsString + questionString;

            appendToFile(fileName, appendToFileString);
        })
}

// Function call to initialize app
init();

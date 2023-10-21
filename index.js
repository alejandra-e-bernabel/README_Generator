//The readme generated will be titled using the following filename: 
const fileName = "chrisExample";

const fs = require("fs");
const inquirer = require ('inquirer');

//An array of questions for user input
const questions = [
    //title
    "What is the title of your project?\n\n",
    //description
    "Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:\n\n- What was your motivation?\n- Why did you build this project?\n- What problem does it solve?\n- What did you learn?\n\n",
    //Table of contents
    "Would you like to include a table of contents?\n\n",
    //Installation
    "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.\n\n",
    //Usage
    "Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an assets/images folder in your repository and import desired images directly to the created README.\n\n",
    //credits
    "List your collaborators, if any, with links to their GitHub profiles.If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.\n\nIf you followed tutorials, include links to those here as well.\n\n",
    //license
    "A license lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).\n\nWhat License would you like to use? (select one)\n\n",
    //questions
    "Who should the user reach out to if they have questions questions?\n\n",
    "What is the email of the person users should reach out to with questions?\n\n",
    //contributing
    "Where should your users go to contribute to your project?\n\n",
    //tests
    "What testing steps should a user follow?\n\n",
    "What is the GitHub username of the person users should reach out to with questions?\n\n"
];

//Function to write initial README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + ".md", data, (err) => {if (err) console.error(err)});
}

//Function to append inforamtion to README file
function appendToFile (fileName, data) {
    fs.appendFile(fileName + ".md", data, (err) => {if (err) console.error(err)});
    console.log("\n\nYour professional README file has been created!")
}

//Function to initialize app
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
                choices: ["GNU AGPLv3", "MIT", "GNU GPL", "Apache License 2.0", "Mozilla Public License 2.0"],
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
            //questionGitHub
            {
                type: "name",
                message: questions[11],
                name: "questionGitHub"
            },
            //contributing
            {
                type: "name",
                message: questions[9],
                name: "contributing",
                default: "https://choosealicense.com/"
            },
            //tests
            {
                type: "name",
                message: questions[10],
                name: "tests"
            }
        ])
        .then(data => {
            const titleString = "# " + data.title;
            writeToFile(fileName, titleString + "\n");

            const descriptionString = "\n\n## Description\n\n" + data.description + "\n\n";
            let tableOfContentsString = "";

            if (data.tableOfContents) {
                tableOfContentsString = "## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Credits](#credits)\n- [License](#license)\n- [Questions](#questions?)\n- [Contributing](#how-to-contribute)\n- [Test](#tests)";
            }

            const installationString = "\n\n## Installation\n\nThe necessary applications to run this program are:\n" + data.installation + "\n\n";
            const usageString = "## Usage\n\n" + data.usage + "\n\n";
            const creditsString = "## Credits \n\n" + data.credits + "\n\n";
            const questionString = "## Questions? \n\nIf you have questions or have notived a bug in this code, please reach out:\nName: " + data.questionName + "\nEmail: " + data.questionEmail + "\nGitHub: " + data.questionGitHub + "\n\n";
            const contributingString = "## How To Contribute \n\nTo contribute, please visit " + data.contributing;
            const testsString = "\n\n## Tests \n\nTo test this code, follow these steps:\n" + data.tests;

            let licenseBadge = "";
            let licenseString = "## License \n\n";
            switch (data.license) {
                case "GNU AGPLv3":
                    licenseBadge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
                    licenseString += "[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)"
                    break;
                
                case "MIT":
                    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                    licenseString += "[MIT](https://choosealicense.com/licenses/mit/)"
                    break;

                case "GNU GPL":
                    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                    licenseString += "[GNU GPL](https://choosealicense.com/licenses/agpl-3.0/)"
                    break;
                    
                case "Apache License 2.0":
                    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                    licenseString += "[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)"
                    break;
                
                case "Mozilla Public License 2.0":
                    licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
                    licenseString += "[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)"
                    break;

                default: 
                licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                licenseString += "[MIT](https://choosealicense.com/licenses/mit/)"
            }

            licenseString+= "\n\n";

            const appendToFileString = licenseBadge + descriptionString + tableOfContentsString + installationString + usageString + creditsString + licenseString + questionString + contributingString + testsString;
            appendToFile(fileName, appendToFileString);

        })
}

// Function call to initialize app
init();

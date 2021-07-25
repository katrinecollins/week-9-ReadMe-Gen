// Packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// const generateMarkdown = require('./utils/generateMarkdown.js');

const getBadge = (license) => {

    if(license ==  'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (license == 'Apache') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license ==  'GNU') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    } else if (license == 'Boost') {
        return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt'
    }




}


const generatePage = (obj) => {
    return `
# ${obj.title}

${getBadge(obj.License)}

${obj.name}

[https://github.com/${obj.github}](https://github.com/${obj.github})

## Description
${obj.ReadMeDescription}

## Installation
${obj.Installation}

## Usage
${obj.Usage}

## License
${obj.License}

## Contributing
${obj.Contributing}

## Tests
${obj.Tests}

## Questions
${obj.Questions}
`;
};

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: titleInput => {
            if (titleInput) {
                return true
            } else (console.log("Please enter your project title"))
            return false;
        }
    },
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your github id?"
    },
    {
        type: "input",
        name: "ReadMeDescription",
        message: "What is the description of your project?",
    },
    {
        type: "input",
        name: "Installation",
        message: "How to install",
    },
    {
        type: "input",
        name: "Usage",
        message: "How to use",
    },
    {
        type: "list",
        name: "License",
        message: "Please choose your license?",
        choices: [
            "MIT",
            "Apache",
            "GNU",
            "Boost"],
    },
    {
        type: "input",
        name: "Contributing",
        message: "Please list any contributions to this project"
    },
    {
        type: "input",
        name: "Tests",
        message: "Please list any tests associated with this project"
    },
    {
        type: "input",
        name: "Questions",
        message: "Please enter your e-mail address",
    },
];



// Create a function to write README file
function writeToFile(fileName, data) {

 }

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            console.log(answers);

            const myREADME = generatePage(answers);

            console.log(myREADME);

           
            fs.writeFile('./output/README.md', myREADME, () => {
                console.log('README creation success!')
            })


        })
}

// Function call to initialize app
init();

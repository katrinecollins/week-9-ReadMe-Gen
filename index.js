// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown.js');


const generatePage = (obj) => {
    return `
# ${obj.title}

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

`;

// #Contributing
// #${obj.Contributing}
// #Tests
// #${obj.Tests}
// #Questions
// #${obj.Questions}
};

// TODO: Create an array of questions for user input
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
        message: "Which is your license?",
        choices: [
            "MIT",
            "Apache",
            "GNU",
            "Bash"],
    },
];
/* Pass your questions in here */


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

 }

// TODO: Create a function to initialize app
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


// review

// data types: number, string, boolean, arrays, objects
// 1, "blue", true, 
// [1, 6, 87, 3, 6] ---- ["blue", "red", "yellow"]
/*
    {
        color: "blue",
        size: 10,
        isRaining: true
    }
*/

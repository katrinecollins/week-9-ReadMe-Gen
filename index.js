// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');
const generatePage = (obj)=>{
    return `
<head>
    #${obj.title}
</head>
<body>
  #${obj.name}
  #[title](https://github.com/${obj.github})
  #Description
  #${obj.ReadMeDescription}
  #Table of Contents
  #${obj.TableofContents}
  #Installation
  #${obj.Installation}
  #Usage
  #${obj.Usage}
  #License
  #${obj.License}
  #Contributing
  #${obj.Contributing}
  #Tests
  #${obj.Tests}
  #Questions
  #${obj.Questions}
</body>
</html>
`;
};

// TODO: Create an array of questions for user input
const questions = ()=> {
    return inquirer.prompt([
        {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: titleInput => {if(titleInput){
        return true
    } else(console.log("Please enter your project title"))
return false;
}
}, 
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?",
    }, 
    {    
    type: "input",
    name: "your name",
    message: "What is your name?",
    },
    {
        type:"input",
        name:"github id",
        message: "What is your github id?"
    },
    
   {
    type: "checkbox",
    name: "license",
    message: "Which is your license?",
    choices: [
        "MIT",
        "Apache",
        "GNU",
        "Bash"],
   },
])};
    /* Pass your questions in here */
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        // Use user feedback for... whatever!!
       
        const myREADME = generateMarkdown(answers);

        console.log(myREADME)
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

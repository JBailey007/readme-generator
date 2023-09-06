// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () =>
inquirer.prompt([
{
    type: 'input', 
    questionName: 'title',
    message: 'What is the title?',
},
{
    type: 'input', 
    questionName: 'description',
    message: 'Please describe your application.',
},
{
    type: 'input', 
    questionName: 'installation',
    message: 'How do you install your app?',
},
{
    type: 'input', 
    questionName: 'usage',
    message: 'How do you use your app?',
},
{
    type: 'input', 
    questionName: 'credits',
    message: 'Do you have any credits?',
},
{
    //list of licenses to choose from
    type: 'list', 
    questionName: 'License',
    message: 'What license did you use?',
    choices: ["The MIT License", "The GPL License", "GNU License", "N/A"],
},
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
.createPromptModule([
{
    type: 'input', 
    questionName: 'title',
    message: 'What is the title?',
    validate: (value)=>{ if (value){return true} else {return "I need a value to continue"}},
},
{
    type: 'input', 
    questionName: 'installation',
    message: 'How do you install your app?',
    validate: (value)=>{ if (value){return true} else {return "I need a value to continue"}},
},
{
    type: 'input', 
    questionName: 'instructions',
    message: 'What instructions must you follow?',
    validate: (value)=>{ if (value){return true} else {return "I need a value to continue"}},
},
{
    type: 'input', 
    questionName: 'credits',
    message: 'Do you have any credits?',
    validate: (value)=>{ if (value){return true} else {return "I need a value to continue"}},
},
{
    type: 'input', 
    questionName: 'credits',
    message: 'Do you have any credits?',
    validate: (value)=>{ if (value){return true} else {return "I need a value to continue"}},
},
])
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

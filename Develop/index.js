//Packages required to run this application
const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require('./utils/generateMarkdown');

//Array of questions for users to fill out
const questions = [
{
    type: 'input', 
    name: 'title',
    message: 'What is the title?',
},
{
    type: 'input', 
    name: 'description',
    message: 'Please describe your application.',
},
{
    type: 'input', 
    name: 'installation',
    message: 'How do you install your app?',
},
{
    type: 'input', 
    name: 'usage',
    message: 'How do you use your app?',
},
{
    type: 'input', 
    name: 'credits',
    message: 'Do you have any credits?',
},
{
    //list of licenses to choose from
    type: 'list', 
    name: 'license',
    message: 'What license did you use?',
    choices: ["The MIT License", "The GPL License", "GNU License", "N/A"],
},
{
    type: 'input', 
    name: 'email',
    message: 'What is your Email',
},
{
    type: 'input', 
    name: 'github',
    message:'What is your Github?',
},
];

//This function will initialize the app and will write the README.md file.
function init() {
    return inquirer.prompt(questions)
        .then ((data) => {
            const mark = MarkDown.generateReadme(data)
            fs.writeFile('README.md', mark, function (err) {
                if (err) {
                    console.log('Could not save file', err)
                } else {
                    console.log('Success: new README.md file generated inside the current folder')
                }
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

// Function call to initialize app
init();

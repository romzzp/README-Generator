// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project:',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter the description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter the installation instruction?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage of your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines to your project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How to run tests on your project?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Please select the licence for your project:',
        name: 'license',
        choices: ['Apache', 'GNU', 'MIT', 'None']
    },
    {
        type: 'input',
        message: 'Please enter your Github username:',
        name: 'username',
    },
    {
        type: 'email',
        message: ' Please enter your email address:',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.log(err) : console.log('Your README has been generated!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response)
        writeToFile('README.md', generateMarkdown(response))
    })
}

// Function call to initialize app
init();

const inquirer = require('inquirer');
const fs = require('fs')
const Shape = require('./shapes');

const questions = [
    {
        type: 'input',
        name: 'font color',
        message: 'What color would you like your font to be?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('please choose a font color')
                return false;
            }
        }
},
    {
        type: 'list',
        name: 'shape choice',
        message: 'What shape would you like to use?',
        choices: [
            'circle',
            'square',
            'triangle',
            'none'
        ],
    },
    {
        type: 'input',
        name: 'shape color',
        message: 'what color would you like your shape to be?'
    },

    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err) throw err;
    
            console.log("SVG file created!")
        });
    },
];

    // Function call to initialize app
init();

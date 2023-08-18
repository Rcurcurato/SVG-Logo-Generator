//index.js: This file will be your entry point where you collect user input,
// generate SVG shapes, and write to files.

//lib/shapes.js: This module could contain the logic for generating SVG shapes based on the user's choices.

//lib/file.js: This module could contain the logic for writing SVG data to a file.

const inquirer = require('inquirer');
const Shapes = require('./lib/shapes');
const writeToFile = require('./lib.file');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'please enter text for your logo (enter up to three characters)',
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
        type: 'input',
        name: 'fontColor',
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
        name: 'shapeChoice',
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
        name: 'shapeColor',
        message: 'what color would you like your shape to be?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('please choose a font color')
                return false;
            }
        }
    },

];

    // Function call to initialize app
init();



//index.js: This file will be your entry point where you collect user input,
// generate SVG shapes, and write to files.

//lib/shapes.js: This module could contain the logic for generating SVG shapes based on the user's choices.

//lib/file.js: This module could contain the logic for writing SVG data to a file.

const inquirer = require('inquirer');
const Shapes = require('./lib/shapes');
const writeToFile = require('./lib.file');

//user prompts
function init() {
    inquirer
        .prompt([
            {
                name: 'textChoice',
                message: 'Enter text for logo (can be up to three letters'
            }
        ])
        .then(answers => {
            console.info('Answer', answers.textChoice);

            inquirer
                .prompt([
                    {
                        name: 'fontColor',
                        message: 'choose a font color'
                    }
                ])
                .then(answers => {
                    console.info('Answer', answers.fontColor)


                    inquirer
                        .prompt([
                            {
                                type: 'list',
                                name: 'shapes',
                                message: 'choose a shape',
                                choices: ['circle', 'square', 'triangle'],
                            },
                        ])
                        .then(answers => {
                            console.info('Answer', answers.shapes)


                            inquirer
                                .prompt([
                                    {
                                        name: 'shapeColor',
                                        message: 'choose a shape color'
                                    }
                                ])
                                .then(answers => {
                                    console.info('Answer', answers.shapeColor)
                                });
                        });
                });
        });
}


// Function call to initialize app
init();



const inquirer = require("inquirer");
const fs = require("fs");

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter your Github Username (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your Github Username!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAbout",
        message:
          'Would you like to enter some information about yourself for an "About" section?',
        default: true,
      },
      {
        type: "input",
        name: "about",
        message: "Provide some information about yourself:",
        when: ({ confirmAbout }) => confirmAbout,
      },
    ])
    .then((data) => {
      const filename = `index.HTML`;

      fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    });
};

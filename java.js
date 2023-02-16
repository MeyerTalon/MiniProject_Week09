const inquirer = require("inquirer");
const fs = require("fs");

inquirer
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
      console.log(data.name);
      const filename = `index.HTML`;
      fs.writeFile(filename, `<!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      </head>
      <body>
      <h1>${data.name}</h1>
      <h3>${data.github}</h3>
      <div>${data.about}</div>
      </body>
      </html>`, (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    });

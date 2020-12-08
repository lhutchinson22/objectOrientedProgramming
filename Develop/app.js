const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

inquirer
  .prompt([
    {
      type: "input",
      message: "what is your name?",
      name: "nameInput",
    },
    {
      type: "list",
      message: "choose a job title",
      name: "jobTitleInput",
      choices: [
        "engineer",
        "manager",
        "intern",
      ],
    },

  ])
  .then((res) => {
    console.log(res);

    //employees array
    let employees = [];
    let titleQuestion = "";

    let employee_name = "";
    let employee_title = "";
    let employee_titleInput = "";

    if (res.jobTitleInput === "engineer"){
        titleQuestion = "what is your github profile?";
        employee_name = res.nameInput;
        employee_title = res.jobTitleInput;


    } else if (res.jobTitleInput === "manager"){
        titleQuestion = "what is your  office number?";
        employee_name = res.nameInput;
        employee_title = res.jobTitleInput;

    } else if (res.jobTitleInput === "intern"){
        titleQuestion = "what is your school?";
        employee_name = res.nameInput;
        employee_title = res.jobTitleInput;
    };

    inquirer
        .prompt([
            {
                name: "titleInput",
                type: "input",
                message: titleQuestion
            }
        ])
    .then((res2) => {
        console.log(res2);

        employee_titleInput = res2.titleInput;

        employees.push(`{name: ${employee_name}, title: ${employee_title}, titleInput: ${employee_titleInput}}`)
        console.log(employees)
        // console.log(employee_name, employee_title, employee_titleInput);
    });





    // fs.writeFile("main.html", html, (err) =>
    //   err ? console.error(err) : console.log("Success!")
    // );

});
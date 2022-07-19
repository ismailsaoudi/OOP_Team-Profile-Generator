const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
// please import Engineer and Intern libraries
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML = require("./src/generateHTML");
const managerCard = require("./src/managerHTML");
const engineerCard = require("./src/engineerHTML");
const internCard = require("./src/internHTML");

//import engineer and intern cards same as manager card above

// you must create engineer and intern questions separately

const employeeArray = [];
const managerQuestions = [
  {
    type: "input",
    message: "What is the manager's name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is the manager's id?",
    name: "managerId",
  },
  {
    type: "input",
    message: "What is the manager's email?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is the manager's Office number?",
    name: "managerOfficeNumber",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "engineerName",
  },
  {
    type: "input",
    message: "What is the engineer's id?",
    name: "engineerId",
  },
  {
    type: "input",
    message: "What is the engineer's email?",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "What is the engineer's github?",
    name: "engineerGithub",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "internName",
  },
  {
    type: "input",
    message: "What is the intern's id?",
    name: "internId",
  },
  {
    type: "input",
    message: "What is the intern's email?",
    name: "internEmail",
  },
  {
    type: "input",
    message: "What is the intern's github?",
    name: "internGithub",
  },
];

function init() {
  inquirer.prompt(managerQuestions).then((response) => {
    const manager = new Manager(
      response.managerName,
      response.managerId,
      response.managerEmail,
      response.managerOfficeNumber,
    );

    employeeArray.push(manager);

    confirmNext();
  });
}

function confirmNext() {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Do you want to add more employee?",
        name: "addMore",
      },
    ])
    .then((response) => {
      if (response.addMore === true) {
        addEmployee();
      } else {
        createHTML();
      }
    });
}
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Do you want to add Engineer or Intern?",
        choices: ["Engineer", "Intern"],
        name: "selection",
      },
    ])
    .then((response) => {
      if (response.selection === "Engineer") {
        addEngineer();
      } else {
        addIntern();
      }
    });
}

function addEngineer() {
  //ask questions about engineer using inquirer
    // create new instance engineer and add it to the employeeArray using push
    inquirer.prompt(engineerQuestions).then((response) => {
        const engineer = new Engineer(
          response.engineerName,
          response.engineerId,
          response.engineerEmail,
          response.engineerGithub,
        );
        employeeArray.push(engineer);

    confirmNext();
  });
}

function addIntern() {
  //ask questions about intern using inquirer
  // create new instance intern and add it to the employeeArray using push
  inquirer.prompt(internQuestions).then((response) => {
    const intern = new Intern(
      response.internName,
      response.internId,
      response.internEmail,
      response.internGithub,
    );
    employeeArray.push(intern);

  confirmNext();
})

}

function createHTML() {
  console.log(employeeArray);

  let cards = "";

  for (let i = 0; i < employeeArray.length; i++) {
    if (employeeArray[i].getRole() === "Manager") {
      cards = cards + managerCard (employeeArray[i]);
    } else if (employeeArray[i].getRole() === "Engineer"){
        cards = cards + engineerCard(employeeArray[i]);
      //same as manager card but for Engineer card
    } else { cards = cards + internCard(employeeArray[i]);
      //same as manager card but for intern card
    }
  }
  fs.writeFileSync("./dist/team.html", generateHTML(cards));
}

init();

const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const express = require("express");
const confirm = require("inquirer-confirm");

inquirer.prompt([
  {
    type: "input",
    message: "manager's Name ?",
    name: "Manager",
  },
  {
    type: "input",
    message: "What's The manager's ID ?",
    name: "ManagerId",
  },
  {
    type: "input",
    message: "What's the manager's Email ?",
    name: "ManagerEmail",
  },

//   {
//     confirm('Would you like to add a team Mumber?')
//   then(function confirmed() {
//    console.log('Please Proceed');
//   }, 
//   function cancelled() {
//     console.log('goodbye');
//   })
//   },

  {
    type: "checkbox",
    name: "Role",
    message: "Employee Role ?",
    choices: ["Engineer", "Intern"],
  },
  {
    type: "input",
    message: "Employee Name ?",
    name: "Name",
  },
  {
    type: "input",
    message: "Employee ID ?",
    name: "id",
  },
  {
    type: "input",
    message: "Employee Email ?",
    name: "Email",
  },
]);

// confirm('Would you like to add a team Mumber?')
//   .then(function confirmed() {
//     console.log('Please Proceed');
//   }, function cancelled() {
//     console.log('goodbye');
//   })

const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");

let finalTeam = [];

function managerQuestions() {
    const questions = [
        {
            type: "input",
            name: "managerName",
            message: "Please enter the Manager's name."
        },
        {
            type: "input",
            name: "managerId",
            message: "Please enter the Manager's ID."
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Please enter the Manager's email."
        },
        {
            type: "input",
            name: "managerOffice",
            message: "Please enter the Manager's office number."
        },
        {
            type: "list",
            name: "addNew",
            message: "Would you like to add another member to the team? If so, please select the type of team member.",
            choices: ["Engineer", "Employee", "Intern", "Done building team!"]
        }
    ];
    return inquirer.prompt(questions).then(response => {
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice)

        manager.push(finalTeam)
        console.log(finalTeam);
        
        if(response.addNew === "Engineer") {
            engineerQuestions();
        } else if(response.addNew === "Employee") {
            employeeQuestions();
        } else if(response.addNew === "Intern") {
            internQuestions();
        } else {
            return;
        }
    });
};

managerQuestions();

function engineerQuestions() {
    const questions = [
        {
            type: "input",
            name: "engineerName",
            message: "Please enter the Engineer's name."
        },
        {
            type: "input",
            name: "engineerId",
            message: "Please enter the Engineer's ID."
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Please enter the Engineer's email."
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "Please enter the Engineer's GitHub username."
        }
    ];
    return inquirer.prompt(questions);
};

function employeeQuestions() {
    const questions = [
        {
            type: "input",
            name: "employeeName",
            message: "Please enter the Employee's name."
        },
        {
            type: "input",
            name: "employeeId",
            message: "Please enter the Employee's ID."
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "Please enter the Employee's email."
        }
    ];
    return inquirer.prompt(questions);
};

function internQuestions() {
    const questions = [
        {
            type: "input",
            name: "internName",
            message: "Please enter the Intern's name."
        },
        {
            type: "input",
            name: "internId",
            message: "Please enter the Intern's ID."
        },
        {
            type: "input",
            name: "internEmail",
            message: "Please enter the Intern's email."
        },
        {
            type: "input",
            name: "internSchool",
            message: "Please enter the school that the Intern attended."
        },
    ];
    return inquirer.prompt(questions);
};
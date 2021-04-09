const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Final list of all team members 
let finalTeam = [];

function createPage() {
    fs.writeFile(index.html, response, err => {
        if (err) throw err;
    });
};

function addMember() {
    const question = [
        {
            type: "list",
            name: "addNew",
            message: "Would you like to add another member to the team? If so, please select the type of team member.",
            choices: ["Manager", "Engineer", "Employee", "Intern", "Done building team!"]
        },
    ];

    return inquirer.prompt(question).then( response => {
        switch(response.addNew) {
            case "Manager":
                managerQuestions();
            break;
            case "Engineer":
                engineerQuestions();
            break;
            case "Employee":
                employeeQuestions();
            break;
            case "Intern":
                internQuestions();
            break;
            default:
                createPage();
        };
    });
};

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
    ];

    // Creates new "Manager" with user response to questions
    return inquirer.prompt(questions).then(response => {
        const manager = new Manager(
            response.managerName, 
            response.managerId, 
            response.managerEmail, 
            response.managerOffice
        );

        addMember();

        finalTeam.push(manager);
        // console.log(finalTeam);
    
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

    // Creates new "Engineer" with user response to questions
    return inquirer.prompt(questions).then( response => {
        const engineer = new Engineer(
            response.engineerName,
            response.engineerId,
            response.engineerEmail,
            response.engineerGitHub
        );

        addMember();

        finalTeam.push(engineer);
        // console.log(finalTeam);

    });
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

    // Creates new "Employee" with user response to questions
    return inquirer.prompt(questions).then( response => {
        const employee = new Employee(
            response.employeeName,
            response.employeeId,
            response.employeeEmail
        );

        addMember();

        finalTeam.push(employee);
        // console.log(finalTeam);

    });
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

    // Creates new "Intern" with user response to questions
    return inquirer.prompt(questions).then( response => {
        const intern = new Intern(
            response.internName,
            response.internId,
            response.internEmail,
            response.internSchool
        );

        addMember();

        finalTeam.push(intern);
        // console.log(finalTeam);

    });
};
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Final list of all team members 
let finalTeamEngineer = [];
let finalTeamManager = [];
let finalTeamIntern = [];

function createPage() {
    fs.writeFile("index.html", `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <title>Team Profile Generator</title>
</head>
<body>
    <main>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Team Profile Generator</h1>
              </div>
              ${createCardManager()}
              ${createCardEngineer()}
              ${createCardIntern()}
          </div>
    </main>
</body>
</html>`, err => {
        if (err) throw err;
    });
};

function createCardEngineer() {
    let team = ""
    for (let i = 0; i < finalTeamEngineer.length; i++) {
        team += `
        <div class="card bg-primary text-white">
            <div class="card-body">
                <h3 class="card-title">${finalTeamEngineer[i].name}</h3>
                <h4 class="card-subtitle"><i class="fas fa-mug-hot">${finalTeamEngineer[i].role}</i></h4>
                <p>ID: ${finalTeamEngineer[i].id}</p>
                <p>Email: ${finalTeamEngineer[i].email}</p>
                <p>GitHub: ${finalTeamEngineer[i].github}</p>
            </div>
        </div>
        `
    };
    return team;
};

function createCardManager() {
    let team = ""
    for (let i = 0; i < finalTeamManager.length; i++) {
        team += `
        <div class="card bg-primary text-white">
            <div class="card-body">
                <h3 class="card-title">${finalTeamManager[i].name}</h3>
                <h4 class="card-subtitle"><i class="fas fa-mug-hot">${finalTeamManager[i].role}</i></h4>
                <p>ID: ${finalTeamManager[i].id}</p>
                <p>Email: ${finalTeamManager[i].email}</p>
                <p>Office Number: ${finalTeamManager[i].officeNumber}</p>
            </div>
        </div>
        `
    };
    return team;
};

function createCardIntern() {
    let team = ""
    for (let i = 0; i < finalTeamIntern.length; i++) {
        team += `
        <div class="card bg-primary text-white">
            <div class="card-body">
                <h3 class="card-title">${finalTeamIntern[i].name}</h3>
                <h4 class="card-subtitle"><i class="fas fa-mug-hot">${finalTeamIntern[i].role}</i></h4>
                <p>ID: ${finalTeamIntern[i].id}</p>
                <p>Email: ${finalTeamIntern[i].email}</p>
                <p>School: ${finalTeamIntern[i].school}</p>
            </div>
        </div>
        `
    };
    return team;
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

    return inquirer.prompt(question).then(response => {
        switch (response.addNew) {
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

        finalTeamManager.push(manager);
        // console.log(finalTeam);

        addMember();

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
    return inquirer.prompt(questions).then(response => {
        const engineer = new Engineer(
            response.engineerName,
            response.engineerId,
            response.engineerEmail,
            response.engineerGitHub
        );

        finalTeamEngineer.push(engineer);
        // console.log(finalTeam);

        addMember();

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
    return inquirer.prompt(questions).then(response => {
        const employee = new Employee(
            response.employeeName,
            response.employeeId,
            response.employeeEmail
        );

        finalTeamEmployee.push(employee);
        // console.log(finalTeam);

        addMember();

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
    return inquirer.prompt(questions).then(response => {
        const intern = new Intern(
            response.internName,
            response.internId,
            response.internEmail,
            response.internSchool
        );

        finalTeamIntern.push(intern);
        // console.log(finalTeam);

        addMember();

    });
};
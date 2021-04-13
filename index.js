const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Final list of all team member types
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
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
        <title>Dream Team</title>
    </head>
    
    <body>
        <main>
            <div class="card text-center">
                <h1 class="card-title custom-card-title">Meet the Dream Team!</h1>
            </div>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 g-4">
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

function createCardManager() {
    let team = ""
    for (let i = 0; i < finalTeamManager.length; i++) {
        team += `
                <div class="col-3 mb-1 mt-4">
                    <div class="card bg-primary text-white">
                        <div class="card-body">
                            <h3 class="card-title">${finalTeamManager[i].name}</h3>
                            <h4 class="card-subtitle"><i class="fas fa-mug-hot"> ${finalTeamManager[i].role}</i></h4><br>
                            <p>ID: ${finalTeamManager[i].id}</p>
                            <p>Email: <a href="mailto:${finalTeamManager[i].email}">${finalTeamManager[i].email}</a></p>
                            <p>Office Number: ${finalTeamManager[i].officeNumber}</p>
                        </div>
                    </div>
                </div>
        `
    };
    return team;
};

function createCardEngineer() {
    let team = ""
    for (let i = 0; i < finalTeamEngineer.length; i++) {
        team += `
                <div class="col-3 mb-1 mt-4">
                    <div class="card bg-primary text-white">
                        <div class="card-body">
                            <h3 class="card-title">${finalTeamEngineer[i].name}</h3>
                            <h4 class="card-subtitle"><i class="fas fa-glasses"> ${finalTeamEngineer[i].role}</i></h4><br>
                            <p>ID: ${finalTeamEngineer[i].id}</p>
                            <p>Email: <a href="mailto:${finalTeamEngineer[i].email}">${finalTeamEngineer[i].email}</a></p>
                            <p>GitHub: ${finalTeamEngineer[i].github}</p>
                        </div>
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
                <div class="col-3 mb-1 mt-4">
                    <div class="card bg-primary text-white">
                        <div class="card-body">
                            <h3 class="card-title">${finalTeamIntern[i].name}</h3>
                            <h4 class="card-subtitle"><i class="fas fa-user-graduate"> ${finalTeamIntern[i].role}</i></h4><br>
                            <p>ID: ${finalTeamIntern[i].id}</p>
                            <p>Email: <a href="mailto:${finalTeamIntern[i].email}">${finalTeamIntern[i].email}</a></p>
                            <p>School: ${finalTeamIntern[i].school}</p>
                        </div>
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
            choices: ["Manager", "Engineer", "Intern", "Done building team!"]
        }
    ];

    return inquirer.prompt(question).then(response => {
        switch (response.addNew) {
            case "Manager":
                managerQuestions();
                break;
            case "Engineer":
                engineerQuestions();
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
        }
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
        }
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
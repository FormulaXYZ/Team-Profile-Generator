const inquirer = require("inquirer");
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
const genrateSite = require ("./src/generat-site.js");
const fs = require ("fs");
const path = require ("path");
const OUTPUT_DIR = path.resolve(__dirname,"output");
const outputpath = path.join(OUTPUT_DIR,"tem-html");
const teamMembers = [];

const promptmanager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "what is your name ?(Required)",
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log("please inter your name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "employeeId",
            message: "Enter your emploee id (Required)",
            validate: employeeId => {
                if (employeeId){
                    return true;
                }else {
                    console.log("Please inter your employee id!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter your emploee email address (Required)",
            validate: email => {
                if (email){
                    return true;
                }else {
                    console.log("Please inter your email address!");
                    return false;
                }
            }
        },
        
        {
            type: "input",
            name: "officeNumber",
            message: "Enter your officeNumber (Required)",
            validate: officeNumber => {
                if (officeNumber){
                    return true;
                }else {
                    console.log("Please inter your office Number!");
                    return false;
                }
            }
        },
    ]) .then(answer => {
        console.log(answer);
        const manager = new Manager(answer.name, answer.employeeId, answer.email, answer.officeNumber, answer);
        teamMembers.push(manager);
        promptMenu();
        
    })

}
const promptMenu = () => {
    return requirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "Please select your option!",
            choices: ["add an engineer", "add an intern", "finish building the Team"]
        }
    ])
    .then(userChoice => {
        switch (userChoice.menu){
            case "add an engineer":
                promptEngineer();
                break;
            case "add an intern":
                promptIntern();
                break;
                default:
                buildTeam();
        }
    })
}
const promptEngineer = () => {
    console.log("add a new engineer");

    return inquirer.prompt([
        {
            type:"input",
            name: "name",
            message: "what is the name of the engineer ? (Required)",
            validate:engineerName =>{
                if(engineerName){
                    return true;
                }else {
                    console.log("Please inter the name of the engineer!");
                    return false;
                }
            }

        },

{
    type: "input",
    mane: "employeeId",
    message: "enter your employe id(required)",
    validate: employeeId => {
        if(employeeId){
            return true;
        } else {
            console.log("please enter your employee id!");
            return false;
        }
    }

},

{
    type: "input",
    mane: "email",
    message: "enter your email(required)",
    validate: email => {
        if(email){
            return true;
        } else {
            console.log("please enter your email!");
            return false;
        }
    }

},
{
    type: "input",
    mane: "github",
    message: "enter your github(required)",
    validate: github => {
        if(github){
            return true;
        } else {
            console.log("please enter your github!");
            return false;
        }
    }

}


    ]).then(function(answer) {
        console.log(answer);
        const engineer = new Engineer(answer.name, answer.employeeId, answer.email, answer.github);
        teamMembers.push(engineer);
        promptMenu();
    })
}
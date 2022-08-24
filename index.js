const inquirer = require("inquirer");
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
const genrateSite = require ("./generate-site");
const fs = require ("fs");
const path = require ("path");
const OUTPUT_DIR = path.resolve(__dirname,"output");
const outputpath = path.join(OUTPUT_DIR,"team.html");
const teamMembers = [];

const promptManager = () => {
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
            message: "Enter your employee email address (Required)",
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
    return inquirer.prompt([
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
                    console.log("Please enter the name of the engineer!");
                    return false;
                }
            }

        },

{
    type: "input",
    name: "employeeId",
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
    name: "email",
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
    name: "githubUsername",
    message: "enter your github user name.(required)",
    validate: github => {
        if(github){
            return true;
        } else {
            console.log("please enter your github user name!");
            return false;
        }
    }

}


    ]).then(answer => {
        console.log(answer);
        const engineer = new Engineer(answer.name, answer.employeeId, answer.email, answer.githubUsername);
        teamMembers.push(engineer);
        promptMenu();
    })
}

const promptIntern = () => {
    console.log("add a new Intern");

    return inquirer.prompt([
        {
            type:"input",
            name: "name",
            message: "what is the name of the Intern ? (Required)",
            validate:internName =>{
                if(internName){
                    return true;
                }else {
                    console.log("Please enter the name of the Intern!");
                    return false;
                }
            }

        },

{
    type: "input",
    name: "employeeId",
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
    name: "email",
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
    name: "school",
    message: "enter your school.(required)",
    validate: school => {
        if(school){
            return true;
        } else {
            console.log("please enter your school name!");
            return false;
        }
    }

}


    ]).then(answer => {
        console.log(answer);
        const intern = new Intern(answer.name, answer.employeeId, answer.email, answer.school);
        teamMembers.push(intern);
        promptMenu();
    })
};
const buildTeam = () => {
    console.log( "Finished building the Team!");

    // The output directory
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputpath, genrateSite(teamMembers),"utf-8");
}
promptManager();

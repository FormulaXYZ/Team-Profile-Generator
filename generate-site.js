
const generateTeam = (team) => {
    console.log(team);
    // create an empty arry to push an html element on to
    const html = [];
    // create functions for each type of employee that returns html data
    const generateManager  = manager => {
      console.log(manager);
      let managerHTML = `
      <section  class="card">
  <div class="card-head">
      <header>${manager.getName()}</header>
      <ul class="list">
        <li class="id">ID${manager.getId()}</li>
        <li class="email">email:<a href="${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="office">office number${manager.getOfficeNumber()}</li>
      </ul>
      <i class="my-class"></i>Manager</div>
      <p></p>
    </section>
      `
      html.push(managerHTML);
      return;
  }

const generateEngineer  = engineer => {
console.log(engineer);
let engineerHTML =`
<section class="card">
      <div class="card-head">
        <header>${engineer.getName()}</header>
        <ul class="list">
          <li class="id">ID${engineer.getId()}</li>
          <li class="email">email:<a href="${engineer.getEmail()}">${engineer.getEmail()}</li>
          <li class="github">Github username::<a href="${engineer.getGithub()}">${engineer.getGithub()}</li>
        </ul>
        <i class="my-class"></i>Engineer</div>
      
      <p></p>
    </section>`

    html.push(engineerHTML);
    return engineerHTML;
}
const generateIntern = intern => {
console.log(intern); 
      let internHTML = `
      <section  class="card">
  <div class="card-head">
      <header>${intern.getName()}</header>
      <ul class="list">
        <li class="id">ID${intern.getId()}</li>
        <li class="email">email:<a href="${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="office">school:${intern.getSchool()}</li>
      </ul>
      <i class="my-class"></i>intern</div>
      <p></p>
    </section>
      `
      html.push(internHTML);
      return;
    }

    // let's create loop for all employees here
     
    for(let i=0; i < team.length; i ++){
      if (team[i].getStatus() === "manager"){
        generateManager(team[i]);
      }
      if (team[i].getStatus() === "engineer"){
        generateEngineer(team[i]);
      }
          if (team[i].getStatus() === "intern"){
            generateIntern(team[i]);
          }
            }       
            return `!DOCTYPE html>
            <html>
              <head>
                <title>Team Profile grnerator</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="style.css" />
              </head>
              <body>
                <header>
                  <h1>The Team
                          </h1>
                  <p>
                    The Best Team 
                  </p>
                </header>
            
                <main>
                ${html.join("")}
                  
                </main>
              </body>
            </html>
            `    
 }                                   
module.exports = generateTeam



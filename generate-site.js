
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
      return managerHTML;
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

    return engineerHTML;
}
const generatIntern = intern => {
console.log(intern); 
      let internHTML = `
      <section  class="card">
  <div class="card-head">
      <header>${intern.getName()}</header>
      <ul class="list">
        <li class="id">ID${intern.getId()}</li>
        <li class="email">email:<a href="${intern.getEmail()}">${manager.getEmail()}</a></li>
        <li class="office">school:${intern.school()}</li>
      </ul>
      <i class="my-class"></i>intern</div>
      <p></p>
    </section>
      `
  
      return internHTML;
    }

    // let's create loop for all employees here
     
    for(let i=0; i < team.length; i ++){
      if (team[i].getStatus() === "Manager"){
        generateManager(team[i]);
      }
      if (team[i].getStatus() === "Engineer"){
        generateEngineer(team[i]);
      }
          if (team[i].getStatus() === "Intern"){
            generateIntern(team[i]);
          }
            }       
            return html.join('');    
 }                                   
module.exports = generateTeam



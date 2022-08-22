const employee = require("./employee");

class engineer extends employee {
    constructor(name, id, email, githubUsername) {

     // here we call parent constructor
     super(name, id ,email);
      
     this.githubUsername = githubUsername;
    }
    getGithub() {
        return this.githubUsername;
    }
    getStatus() {
        return "engineer";
    }
}
module.exports = engineer;
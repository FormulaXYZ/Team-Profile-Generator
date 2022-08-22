const employee = require("./employee");

class intern extends employee {
    constructor(name, id, email, school) {

     // here we call parent constructor
     super(name, id ,email);
      
     this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getStatus() {
        return "intern";
    }
}
module.exports = intern;
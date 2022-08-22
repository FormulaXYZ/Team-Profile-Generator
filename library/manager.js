const employee = require("./employee");

class manager extends employee {
    constructor(name, id, email, officeNumber) {

     // here we call parent constructor
     super(name, id ,email);
      
     this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getStatus() {
        return "manager";
    }
}
module.exports = manager;
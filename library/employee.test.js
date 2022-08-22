const Employee = require("../library/employee");
const employee = new Employee("thomas","1","thomas@email.com");

it("should get the constructor values of the employee object", () => {
    expect(employee.name).toEqual("thomas");
    expect(employee.id).toEqual("1");
    expect(employee.email).toEqual("thomas@email.com");
});

it("should get the name from the name getName() method", () => {
    expect(employee.getName()).toEqual("thomas");
});

it("should get the id from the name getId() method", () => {
    expect(employee.getId()).toEqual("1");
});

it("should get the email from the name getEmail() method", () => {
    expect(employee.getEmail()).toEqual("thomas@email.com");
});
 
it("should get the status from the name getStatus() method", () => {
    expect(employee.getStatus()).toEqual("employee");
});
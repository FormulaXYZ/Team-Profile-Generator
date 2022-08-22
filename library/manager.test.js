const Manager = require("../library/manager");
const manager = new Manager("thomas","1","thomas@email.com", "100");

it("should get the constructor values of the manager object", () => {
    expect(manager.name).toEqual("thomas");
    expect(manager.id).toEqual("1");
    expect(manager.email).toEqual("thomas@email.com");
    expect(manager.officeNumber).toEqual("100");
});

it("should get the name from the name getName() method", () => {
    expect(manager.getName()).toEqual("thomas");
});

it("should get the id from the name getId() method", () => {
    expect(manager.getId()).toEqual("1");
});

it("should get the email from the name getEmail() method", () => {
    expect(manager.getEmail()).toEqual("thomas@email.com");
});

it("should get the officeNumber from the name getOfficeNumber() method", () => {
    expect(manager.getOfficeNumber()).toEqual("100");
});
 
it("should get the status from the name getStatus() method", () => {
    expect(manager.getStatus()).toEqual("manager");
});
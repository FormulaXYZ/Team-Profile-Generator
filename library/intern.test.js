const Intern = require("../library/intern");
const intern = new Intern("thomas","1","thomas@email.com", "berkeley");

it("should get the constructor values of the intern object", () => {
    expect(intern.name).toEqual("thomas");
    expect(intern.id).toEqual("1");
    expect(intern.email).toEqual("thomas@email.com");
    expect(intern.school).toEqual("berkeley");
});

it("should get the name from the name getName() method", () => {
    expect(intern.getName()).toEqual("thomas");
});

it("should get the id from the name getId() method", () => {
    expect(intern.getId()).toEqual("1");
});

it("should get the email from the name getEmail() method", () => {
    expect(intern.getEmail()).toEqual("thomas@email.com");
});

it("should get the officeNumber from the name getSchool() method", () => {
    expect(intern.getSchool()).toEqual("berkeley");
});
 
it("should get the status from the name getStatus() method", () => {
    expect(intern.getStatus()).toEqual("intern");
});
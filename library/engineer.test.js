const Engineer = require("../library/engineer");
const engineer = new Engineer("thomas","1","thomas@email.com", "github");

it("should get the constructor values of the engineer object", () => {
    expect(engineer.name).toEqual("thomas");
    expect(engineer.id).toEqual("1");
    expect(engineer.email).toEqual("thomas@email.com");
    expect(engineer.githubUsername).toEqual("github");
});

it("should get the name from the name getName() method", () => {
    expect(engineer.getName()).toEqual("thomas");
});

it("should get the id from the name getId() method", () => {
    expect(engineer.getId()).toEqual("1");
});

it("should get the email from the name getEmail() method", () => {
    expect(engineer.getEmail()).toEqual("thomas@email.com");
});

it("should get the officeNumber from the name githunUsername() method", () => {
    expect(engineer.getGithub()).toEqual("github");
});
 
it("should get the status from the name getStatus() method", () => {
    expect(engineer.getStatus()).toEqual("engineer");
});
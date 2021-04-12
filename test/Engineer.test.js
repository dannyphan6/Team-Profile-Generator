const Engineer = require("../lib/Engineer");

test("Able to set Engineer's name via constructor", () => {
    const testValue = "Daniel";
    const newEmployee = new Engineer(testValue, 1000, "test@comcast.net", "dannyphan6")
    expect(newEmployee.name).toBe(testValue)
});

test("Able to set Engineer's ID via constructor", () => {
    const testValue = "1000";
    const newEmployee = new Engineer("Daniel", testValue, "test@comcast.net", "dannyphan6")
    expect(newEmployee.id).toBe(testValue)
});

test("Able to set Engineer's email via constructor", () => {
    const testValue = "test@comcast.net";
    const newEmployee = new Engineer("Daniel", 1000, testValue, "dannyphan6")
    expect(newEmployee.email).toBe(testValue)
});

test("Able to set Engineer's GitHub username via constructor", () => {
    const testValue = "dannyphan6";
    const newEmployee = new Engineer("Daniel", 1000, "test@comcast.net", testValue)
    expect(newEmployee.github).toBe(testValue)
});

test("Able to get Engineer's GitHub username via getGithub()", () => {
    const testValue = "dannyphan6";
    const newEmployee = new Engineer("Daniel", 1, "test@comcast.net", testValue)
    expect(newEmployee.getGithub()).toBe(testValue)
});

test("Able to get Engineer's role via getRole()", () => {
    const testValue = "Engineer";
    const newEmployee = new Engineer("Daniel", 1, "test@comcast.net", "dannyphan6")
    expect(newEmployee.getRole()).toBe(testValue)
});


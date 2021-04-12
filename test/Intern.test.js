const Intern = require("../lib/Intern");

test("Able to set user's name via constructor", () => {
    const testValue = "Daniel";
    const newEmployee = new Intern(testValue, 1000, "test@comcast.net", "dannyphan6")
    expect(newEmployee.name).toBe(testValue)
});

test("Able to set user's id via constructor", () => {
    const testValue = "1000";
    const newEmployee = new Intern("Daniel", testValue, "test@comcast.net", "dannyphan6")
    expect(newEmployee.id).toBe(testValue)
});

test("Able to set user's email via constructor", () => {
    const testValue = "test@comcast.net";
    const newEmployee = new Intern("Daniel", 1000, testValue, "dannyphan6")
    expect(newEmployee.email).toBe(testValue)
});

test("Able to set user's school via constructor", () => {
    const testValue = "University of Washington";
    const newEmployee = new Intern("Daniel", 1000, "test@comcast.net", testValue)
    expect(newEmployee.school).toBe(testValue)
});

test("Able to get user's school via getSchool()", () => {
    const testValue = "University of Washington";
    const newEmployee = new Intern("Daniel", 1, "test@comcast.net", testValue)
    expect(newEmployee.getSchool()).toBe(testValue)
});

test("Able to get user's role via getRole()", () => {
    const testValue = "Intern";
    const newEmployee = new Intern("Daniel", 1, "test@comcast.net", "dannyphan6")
    expect(newEmployee.getRole()).toBe(testValue)
});

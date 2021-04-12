const Manager = require("../lib/Manager");

test("Able to set Manager's name via constructor", () => {
    const testValue = "Daniel";
    const newEmployee = new Manager(testValue, 1000, "test@comcast.net", "521")
    expect(newEmployee.name).toBe(testValue)
});

test("Able to set Manager's ID via constructor", () => {
    const testValue = "1000";
    const newEmployee = new Manager("Daniel", testValue, "test@comcast.net", "521")
    expect(newEmployee.id).toBe(testValue)
});

test("Able to set Manager's email via constructor", () => {
    const testValue = "test@comcast.net";
    const newEmployee = new Manager("Daniel", 1000, testValue, "521")
    expect(newEmployee.email).toBe(testValue)
});

test("Able to set Manager's office number via constructor", () => {
    const testValue = "521";
    const newEmployee = new Manager("Daniel", 1000, "test@comcast.net", testValue)
    expect(newEmployee.officeNumber).toBe(testValue)
});

test("Able to get Manager's office number via getOfficeNumber()", () => {
    const testValue = "521";
    const newEmployee = new Manager("Daniel", 1, "test@comcast.net", testValue)
    expect(newEmployee.getOfficeNumber()).toBe(testValue)
});

test("Able to get Manager's role via getRole()", () => {
    const testValue = "Manager";
    const newEmployee = new Manager("Daniel", 1, "test@comcast.net", "521")
    expect(newEmployee.getRole()).toBe(testValue)
});
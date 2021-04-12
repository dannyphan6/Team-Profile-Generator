const Employee = require("../lib/Employee");

test("Able to set Employee's name via constructor", () => {
    const testValue = "Daniel";
    const newEmployee = new Employee(testValue, 1000, "test@comcast.net")
    expect(newEmployee.name).toBe(testValue)
});

test("Able to set Employee's ID via constructor", () => {
    const testValue = "1000";
    const newEmployee = new Employee("Daniel", testValue, "test@comcast.net")
    expect(newEmployee.id).toBe(testValue)
});

test("Able to set Employee's email via constructor", () => {
    const testValue = "test@comcast.net";
    const newEmployee = new Employee("Daniel", 1000, testValue)
    expect(newEmployee.email).toBe(testValue)
});

test("Able to get Employee's name via getName()", () => {
    const testValue = "Daniel";
    const newEmployee = new Employee(testValue, 1000, "test@comcast.net")
    expect(newEmployee.getName()).toBe(testValue)
});

test("Able to get Employee's ID via getId()", () => {
    const testValue = "521";
    const newEmployee = new Employee("Daniel", testValue, "test@comcast.net")
    expect(newEmployee.getId()).toBe(testValue)
});

test("Able to get Employee's email via getEmail()", () => {
    const testValue = "test@comcast.net";
    const newEmployee = new Employee("Daniel", 1, testValue)
    expect(newEmployee.getEmail()).toBe(testValue)
});

test("Able to get Employee's role via getRole()", () => {
    const testValue = "Employee";
    const newEmployee = new Employee("Daniel", 1, "test@comcast.net")
    expect(newEmployee.getRole()).toBe(testValue)
});
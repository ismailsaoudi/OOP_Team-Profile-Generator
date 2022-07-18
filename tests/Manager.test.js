const Employee = require("../lib/Manager")
describe("Employee", () => {
    describe("test Manager's properties", () => {
        it("test all properties", () => {
            const employee = new Employee('Ismail', 1, 'ismail.saoudi@icloud.com')

            expect(employee.name).toEqual('Ismail')
            expect(employee.id).toEqual(1)
            expect(employee.email).toEqual('ismail.saoudi@icloud.com')
            

        })

    })

    describe("test Manager's methods", () => {
        it("test all methods", () => {
            const employee = new Employee('brian', 2, 'brian@yahoo.com')
            expect(employee.getName()).toEqual('brian')
            expect(employee.getId()).toEqual(2)
            expect(employee.getEmail()).toEqual('brian@yahoo.com')
            expect(employee.getRole()).toEqual('Manager')
        })
    })
})
const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    employeeId: String,
    firstname: String,
    lastname: String,
    email: String,
    phone: String

});

const Employee = new mongoose.model("Employee", EmployeeSchema);
module.exports = Employee
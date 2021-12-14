const mongoose = require('mongoose')
const Employee = require('./models/Employee')
const main = async () => {

    mongoose.connect('mongodb://localhost:27017/test')

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Editing database')
    })

    const firstname = ["Harshit", "Komal", "Yogesh", "Nishant", "Praveen", "Faizan"];
    const lastname = ["Kodru", "Raj", "Singh", "Agarwal", "Reddy", "Khan"];
    const email = ["@gmail.com", "@yahoo.com", "@outlook.com", "@rediffmail.com"];

    const employees = [];

    await Employee.deleteMany({})

    for (let i = 0; i < 20; i++) {
        const firstname_ = firstname[Math.floor(Math.random() * 5)]
        const lastname_ = lastname[Math.floor(Math.random() * 5)]
        const email_ = `${firstname_ + lastname_ + email[Math.floor(Math.random() * 4)]}`
        const employeeId_ = Math.floor(Math.random() * Math.pow(10, 5)).toString()
        const phone_ = Math.floor(Math.random() * Math.pow(10, 10)).toString()
        const employee = {
            employeeId: employeeId_,
            phone: phone_,
            firstname: firstname_,
            lastname: lastname_,
            email: email_,
        };
        employees.push(employee);
    }

    await Employee.insertMany(employees);
}

main().then(() => {
    console.log("SEED DATA UPLOADED")
    mongoose.connection.close()
    console.log("CONNECTION CLOSED")
}).catch(err => console.log("******************\n" + err))

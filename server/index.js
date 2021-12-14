const { connect, Mongoose } = require('mongoose');
const express = require('express')
const Employee = require('./models/Employee')
const cors = require('cors')

async function main() {
    await connect('mongodb://localhost:27017/test');

    const app = express()
    app.use(cors({
        origin: "*",
        credentials: true
    }))
    app.use(express.json({ limit: "1mb" }))
    const port = 3000

    app.post('/createEmployee', async (req, res) => {
        const newEmployeeData = req.body.employee
        const employee = await Employee.create(newEmployeeData)
        res.status(200).send(employee)
    })

    app.put('/:id/update', async (req, res) => {
        const newEmployeeData = req.body.employee
        const id = req.params.id
        const employeeData = await Employee.findOneAndUpdate({ _id: id }, newEmployeeData)
        res.status(200).send("OK")
    })
    app.delete('/:id/delete', async (req, res) => {
        const id = req.params.id
        await Employee.findOneAndDelete({ _id: id })
        res.status(200).send("ok")
    })

    app.get('/:id', async (req, res) => {
        const id = req.params.id
        const employee = await Employee.findOne({ _id: id })
        res.send(employee)
    })
    app.get('/', async (req, res) => {
        const allEmployees = await Employee.find({})
        res.send(allEmployees)
    })
    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`)
    })
}
main().catch(err => console.log(err));
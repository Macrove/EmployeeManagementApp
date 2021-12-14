import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Table from './Table';
import { Link, useLocation } from "react-router-dom";



const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await fetch("http://localhost:3000/")
        const data = await response.json()
        setEmployees(data)
    }

    const deleteEmployee = async (id) => {
        await fetch(`http://localhost:3000/${id}/delete`, { method: "DELETE" })
        const newEmployees = employees.filter((e) => e._id !== id)
        setEmployees(newEmployees)
    }

    const tableHead = ["Employee First Name", "Employee Last Name", " Employee Email Id", "Actions"];
    // console.log(navigation)
    if (employees.length === 0) {
        return (
            <View style={styles.body} >
                <Link style={{ ...linkStyle, width: "20rem", fontSize: "2rem", margin: "auto", marginTop: "5rem" }}
                    to={"/createEmployee"}>CREATE EMPLOYEE</Link>
            </View>
        )
    }

    return (

        <View style={styles.body} >
            <Text style={styles.heading}>Employee List</Text>
            <Link to={"/createEmployee"} style={linkStyle}>Add Employee</Link>
            <View >
                <Header headerData={tableHead} />
                <Table data={employees} deleteEmployee={deleteEmployee} />
            </View>
        </View>
    )
}

const linkStyle = {
    height: "2rem",
    width: "8rem",
    justifyContent: "center",
    border: "1px solid transparent",
    padding: "0.2rem 0.5rem",
    marginBottom: "1rem",
    fontSize: "1.2rem",
    borderRadius: "0.25rem",
    textDecoration: 'none',
    color: "#fff",
    backgroundColor: "#0d6efd",
    borderColor: "#0d6efd"
}
const styles = StyleSheet.create({
    body: {
        width: "80%",
        minWidth: "900px",
        marginHorizontal: "10%"
    },
    heading: {
        fontSize: "1.5rem",
        margin: "auto",
        fontWeight: "bold"
    }
});

export default EmployeeList;
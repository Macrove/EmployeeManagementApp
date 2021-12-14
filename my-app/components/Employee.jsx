import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Link, useParams } from "react-router-dom";

const Employee = ({ deleteEmployee }) => {
    const params = useParams()
    const [employee, setEmployee] = useState({})
    useEffect(() => {
        loadData()
    }, [])
    const loadData = async () => {
        const response = await fetch(`http://localhost:3000/${params.id}`)
        const employee = await response.json()
        setEmployee(employee)
    }
    return (
        <View style={styles.body}>
            <Text style={styles.heading}>Employee</Text>

            <View style={styles.input}>
                <Text style={styles.label}>Employee Id</Text>
                <Text style={styles.inputBox}>{employee.employeeId}</Text>
            </View >
            <View style={styles.input}>
                <Text style={styles.label}>First Name</Text>
                <Text style={styles.inputBox}>{employee.firstname}</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.label}>Last Name</Text>
                <Text style={styles.inputBox}>{employee.lastname}</Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.label}>Email Id</Text>
                <Text style={styles.inputBox}>{employee.email}</Text>
            </View >
            <View style={styles.input}>
                <Text style={styles.label}>Phone Number</Text>
                <Text style={styles.inputBox}>{employee.phone}</Text>
            </View >


            <View style={styles.buttons}>
                <Link style={{ ...linkStyle, backgroundColor: "#f2e527", borderColor: "#f2e527", color: "#1a1803" }}
                    to={`/${employee._id}/update`} >
                    Update
                </Link>
                <Link style={linkStyle} to="/"  >Home</Link>
            </View>
        </View>
    )
}


const linkStyle = {
    height: "1.5em",
    width: "5em",
    border: "1px solid transparent",
    padding: "0.25em",
    marginTop: "2rem",
    marginRight: "3rem",
    fontSize: "1.2rem",
    borderRadius: "0.25rem",
    textDecoration: 'none',
    color: "#fff",
    backgroundColor: "#0d6efd",
    borderColor: "#0d6efd"
}

const styles = StyleSheet.create({

    heading: {
        fontSize: "1.5rem",
        margin: "auto",
        fontWeight: "bold",
        marginBottom: "1.5rem"
    },
    body: {
        width: "80%",
        display: "flex",
        margin: "auto",
        justifyContent: "flex-start",
        minWidth: "400px"
    },
    label: {
        width: "15%",
        fontSize: "1.2rem",
        // borderWidth: "1px",
        marginRight: "1rem",
        display: "flex",
        alignSelf: "center"
        // paddingVertical: "1rem"

    },
    inputBox: {
        fontSize: "1.2rem",
        // borderWidth: "1px",
        marginRight: "1rem",
        display: "flex",
        alignSelf: "center",

        // width: "100%",
        paddingHorizontal: "1rem"
        // borderRadius: "5%",
        // borderColor: "#171308"
    },
    input: {
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    buttons: {
        display: "flex",
        flexDirection: "row"
    }
});

export default Employee;
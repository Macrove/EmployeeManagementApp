import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import { Button, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

const EditEmployee = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [employee, setEmployee] = useState({})
    const [firstNameError, setFirstNameError] = useState(0)
    const [lastNameError, setLastNameError] = useState(0)
    const [emailError, setEmailError] = useState(0)
    const [employeeIdError, setEmployeeIdError] = useState(0)
    const [phoneError, setPhoneError] = useState(0)

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const response = await fetch(`http://localhost:3000/${params.id}`)
        const employee_ = await response.json()
        setEmployee(employee_)
    }
    const handleSubmit = async () => {
        if (!employee.firstname) setFirstNameError(1)
        else if (!employee.lastname) setLastNameError(1)
        else if (!employee.email) setEmailError(1)
        else if (!employee.phone) setPhoneError(1)
        else if (!employee.employeeId) setEmployeeIdError(1)
        else if (!(emailError || firstNameError || lastNameError || phoneError || employeeIdError)) {
            await fetch(`http://localhost:3000/${params.id}/update`,
                {
                    method: 'PUT',
                    body: JSON.stringify({ employee }),
                    headers: { 'Content-Type': 'application/json' },
                }
            )
            navigate(`/${params.id}/view`, { replace: true })
        }
    }

    const handleFirstNameChange = (text) => {
        setEmployee({ ...employee, firstname: text })
        if (!text.match(/^[a-z ,.'-]+$/i)) {
            setFirstNameError(1)
        }
        else {
            setFirstNameError(0)
        }
    }

    const handleLastNameChange = (text) => {
        setEmployee({ ...employee, lastname: text })
        if (!employee.lastname.match(/^[a-z ,.'-]+$/i)) {
            setLastNameError(1)
        }
        else {
            setLastNameError(0)
        }
    }

    const handleEmailChange = (text) => {
        setEmployee({ ...employee, email: text })
        if (!employee.email.toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
            setEmailError(1)
        }
        else {
            setEmailError(0)
        }
    }
    const handleEmployeeIdChange = (text) => {
        setEmployee({ ...employee, employeeId: text })
        if (!(text
            .match(
                /^[0-9]+$/i
            ) && text.length === 5)) {
            setEmployeeIdError(1)
        }
        else {
            setEmployeeIdError(0)
        }
    }
    const handlePhoneChange = (text) => {
        setEmployee({ ...employee, phone: text })
        if (!(text
            .match(
                /^[0-9]+$/i
            ) && text.length === 10)) {
            setPhoneError(1)
        }
        else {
            setPhoneError(0)
        }
    }

    return (
        <View style={styles.body}>
            <Text style={styles.heading}>Update Employee</Text>
            <View>
                <View style={styles.input}>
                    <Text style={styles.label}>Employee Id</Text>
                    <TextInput
                        placeholder="Employee Id"
                        value={employee.employeeId || ''}
                        onChangeText={handleEmployeeIdChange}
                        style={styles.inputBox}
                    />
                </View>
                {employeeIdError ? <ErrorMessage text="Employee Id" /> : null}
            </View>
            <View>
                <View style={styles.input}>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput
                        placeholder="First Name"
                        value={employee.firstname || ''}
                        onChangeText={handleFirstNameChange}
                        style={styles.inputBox}
                    />
                </View>
                {firstNameError ? <ErrorMessage text="First Name" /> : null}
            </View>

            <View>
                <View style={styles.input}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput
                        placeholder="Last Name"
                        value={employee.lastname || ''}
                        onChangeText={handleLastNameChange}
                        style={styles.inputBox}
                    />
                </View>
                {lastNameError ? <ErrorMessage text="Last Name" /> : null}
            </View>

            <View>
                <View style={styles.input}>
                    <Text style={styles.label}>Email Id</Text>
                    <TextInput
                        placeholder="Email Id"
                        value={employee.email || ''}
                        onChangeText={handleEmailChange}
                        style={styles.inputBox}
                    />
                </View>
                {emailError ? <ErrorMessage text="Email" /> : null}
            </View>

            <View>
                <View style={styles.input}>
                    <Text style={styles.label}>Phone</Text>
                    <TextInput
                        placeholder="Phone"
                        value={employee.phone || ''}
                        onChangeText={handlePhoneChange}
                        style={styles.inputBox}
                    />
                </View>
                {phoneError ? <ErrorMessage text="Phone Number" /> : null}
            </View>

            <TouchableOpacity style={styles.links} onPress={handleSubmit}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
        </View>
    )

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
        // alignSelf: "center",

        width: "100%",
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
    links: {
        display: "flex",
        marginTop: "2rem",
        border: "1px solid transparent",
        width: "8em",
        // paddingVertical: "0.1rem",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        fontSize: "1rem",
        borderRadius: "0.25rem",
        // textDecoration: 'none',
        backgroundColor: "#41d949",
        borderColor: "#41d949",

    },
    buttonText: {
        fontSize: "1.2rem",
        margin: "auto"
    }
});

export default EditEmployee;
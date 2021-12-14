import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { Link } from "react-router-dom";
const Row = (props) => {
    // console.log(props.rowData)
    return (
        <View style={props.style}>
            <Text style={styles.cellText}>{props.rowData.firstname}</Text>
            <Text style={styles.cellText}>{props.rowData.lastname}</Text>
            <Text style={styles.cellText}>{props.rowData.email}</Text>
            <View style={styles.buttonCell}>
                <Link style={links} to={`/${props.rowData._id}/update`}  >Update</Link>
                <TouchableOpacity style={styles.links} onPress={() => props.deleteEmployee(props.rowData._id)}><Text style={styles.deleteButton}>Delete</Text></TouchableOpacity>
                <Link style={links} to={`/${props.rowData._id}/view`}>View</Link>
            </View>

        </View >

    )
}

const links = {
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    border: "1px solid transparent",
    paddingVertical: "0.1rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    fontSize: "1rem",
    borderRadius: "0.25rem",
    textDecoration: 'none',
    color: "#fff",
    backgroundColor: "#25c9e6",
    borderColor: "#25c9e6"
}

const styles = StyleSheet.create({
    deleteButton: {
        textDecorationColor: "#fafafa"
    },
    links: {
        display: "flex",
        // margin: "auto",s
        justifyContent: "center",
        border: "1px solid transparent",
        // paddingVertical: "0.1rem",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        fontSize: "1rem",
        borderRadius: "0.25rem",
        // textDecoration: 'none',
        backgroundColor: "#e62525",
        borderColor: "#e62525",

    },

    cellText: {
        width: "25%",
        display: "flex",
        fontSize: "1rem",
        height: "2rem",
        flexDirection: "row",
        borderBottomWidth: "1px",
        borderRightWidth: "1px",
        borderColor: "#d1d9de",
        paddingVertical: "0.2rem",
        paddingLeft: "0.25rem"
    },
    buttonCell: {
        width: "25%",
        justifyContent: "space-around",
        display: "flex",
        fontSize: "1rem",
        height: "2rem",
        flexDirection: "row",
        borderBottomWidth: "1px",
        borderRightWidth: "1px",
        borderColor: "#d1d9de",
        paddingVertical: "0.2rem",
        paddingLeft: "0.25rem"
    },

});

export default Row;
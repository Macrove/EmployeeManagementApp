import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
    Link
} from "react-router-dom";



const NoPageFound = () => {

    return (
        <View style={styles.body}>
            <Text style={styles.heading}>
                NO PAGE FOUND
            </Text>
            <Link style={links} to={"/"}>GO TO HOME</Link>
        </View>

    )

}
const links = {
    display: "flex",
    width: "10em",
    // height: "5rem",
    fontSize: "2rem",
    margin: "auto",
    marginTop: "1em",
    justifyContent: "center",
    border: "1px solid transparent",
    paddingVertical: "0.2rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    borderRadius: "0.25rem",
    textDecoration: 'none',
    color: "#fff",
    backgroundColor: "#25c9e6",
    borderColor: "#25c9e6"
}

const styles = StyleSheet.create({
    body: {
        minwidth: "450px"
    },
    heading: {
        marginTop: "5rem",
        fontSize: "2rem",
        margin: "auto",
        fontWeight: "bold",
        marginBottom: "1.5rem"
    },
});

export default NoPageFound;

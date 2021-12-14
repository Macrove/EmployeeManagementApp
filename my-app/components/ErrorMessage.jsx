import React from "react";
import { Text, StyleSheet } from "react-native";

const ErrorMessage = (props) => {
    return (
        <Text style={styles.errorMessage}>Invalid {props.text}</Text>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: "1rem",
        color: "#db361d",
        marginLeft: "18%"
    }
})
export default ErrorMessage;
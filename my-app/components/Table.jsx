import React from "react";
import Row from "./Row";
import { View, Text, StyleSheet } from "react-native";

const Table = (props) => {
    // console.log("from table")
    // console.log(props.data)
    return (
        <View style={styles.table}>{
            props.data.map((rowData_, i) => {
                return <Row key={rowData_._id} style={i % 2 ? styles.rowEven : styles.rowOdd} rowData={rowData_} deleteEmployee={props.deleteEmployee} />
            })
        }</View>
        // <Text>hellow</Text>
    )
}

const styles = StyleSheet.create({
    rowEven: {
        flex: 1,
        height: "2rem",
        display: "flex",
        flexDirection: "row",
        borderColor: "#9da9b0",
        backgroundColor: "#f0f3fa"
    },
    rowOdd: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        borderColor: "#9da9b0"
    },

    table: {
        borderRightWidth: "1px",
        borderLeftWidth: "1px",
        borderColor: "#d1d9de",
        // width: "clamp(600px,20vw,600px)"
    }
});

export default Table
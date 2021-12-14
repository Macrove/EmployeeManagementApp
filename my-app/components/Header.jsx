import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Header = (props) => {
    // console.log(props.rowData)
    return (
        <View>
            <View style={styles.viewText}>
                {props.headerData.map(cellData => {
                    return < Text style={styles.titleText} key={cellData}>{cellData}</Text>
                })}
            </View >
        </View>

    )
}

const styles = StyleSheet.create({

    titleText: {
        width: "25%",
        display: "flex",
        fontSize: "1.25rem",
        paddingVertical: "1rem",
        paddingLeft: "0.25rem",
        fontWeight: "bold",
        borderWidth: "1px",
        borderColor: "#d1d9de"
    },
    viewText: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        borderColor: "#d1d9de"
    }
});

export default Header;
import React from "react";
import { bgColorDarkBlue, bgColorLightBlue } from "../assets/common"
import { View, Text, StyleSheet } from "react-native";

const Advice = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Advice</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColorLightBlue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainText: {
        fontSize: 30,
        fontWeight: 'bold'
    },
});

export default Advice;
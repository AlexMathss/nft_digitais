import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonF({
    btnText
}){
    return(
        <>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>{btnText}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    btnText: {
        fontSize: 15,
        color: '#FFF',
        fontWeight: '700'
    }
})
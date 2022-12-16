import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function Button({
    buttonText,
    width,
    height
}){

    return(
        <View style={styles.cont}>
            <TouchableOpacity
                style={[styles.button, {width: width, height: height}]}
                activeOpacity={0.7}
            >
                <Text style={styles.buttonText}>
                    {buttonText}
                </Text>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'rgb(245,42,245)'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
        
    }
})
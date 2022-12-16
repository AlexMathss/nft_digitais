import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Followers({
    imgProfile,
    user,
    bio
}){
    return(
        <View style={styles.container}>
            <Image source={imgProfile} style={styles.profileImg}/>
            <View style={styles.cardProfile}>
                <Text style={styles.name}>{user}</Text>
                <Text style={styles.about}>{bio}</Text>
            </View>
            <TouchableOpacity style={styles.btnFollow}>
                <Text style={styles.btnText}>Follow</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 19,
        paddingRight: 37,
        borderBottomEndRadius: 80,
        borderColor: '#15BFFD',
        borderWidth: 1,
        backgroundColor: 'rgba(255,255,255,0.2)'
    },
    profileImg: {
        width: 40,
        height: 40
    },
    cardProfile: {
        width: 114,
        height: 35,
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 15,
        fontWeight: '600',
        color: '#FFF'
    },
    about: {
        fontSize: 12,
        color: '#FFF'
    },
    btnFollow: {
        borderBottomWidth: 2,
        borderBottomColor: '#15BFFD',
        width: 47,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#15BFFD'
    }
})
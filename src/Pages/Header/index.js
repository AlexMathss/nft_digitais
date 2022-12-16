import React from "react";
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function Header(){
    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logoImg}/>
            <TouchableOpacity style={styles.wallet}>
                <Image source={require('../../../assets/wallet.png')} style={styles.walletImg}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 107,
        paddingLeft: 25,
        paddingRight: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E2644'
    },
    logoImg: {
        width: 78,
        height: 21
    },
    wallet: {
        width: 30,
        height: 25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#332FD0',
    },
    walletImg: {
        width: 15,
        height: 15
    }
});
import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';

export default function CollectionsComp({
    number,
    profileImg,
    nomeTitle,
    nomeSub,
    vendidos,
    porcentagem
}){
    return(
        <View style={styles.container}>
            <View style={styles.infoProfile}>
                <Text style={styles.number}>{number}</Text>
                <Image source={profileImg} style={styles.profileImg}/>
                <View style={styles.nameNft}>
                    <Text style={styles.name}>{nomeTitle}</Text>
                    <Text style={styles.name}>{nomeSub}</Text>
                </View>
                <Image source={require('../../../assets/arrow.png')} style={styles.arrow}/>
            </View>
            <View style={styles.infoBolsa}>
                <Text style={styles.vendidos}>{vendidos}</Text>
                <Text style={styles.porcentagem}>{porcentagem}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 381,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    infoProfile: {
        width: 222,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    number: {
        fontSize: 30,
        color: '#F52AF5'
    },
    profileImg: {
        width: 32.15,
        height: 32.15
    },
    nameNft: {
        width: 81,
        height: 27,
        justifyContent: 'space-between'
    },
    arrow: {
        width: 11.57,
        height: 18.65
    },
    name:{
        fontSize: 12,
        color: '#fff',
        
    },
    infoBolsa: {
        width: 85,
        height: 36,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    vendidos: {
        fontSize: 15,
        color: '#FFF',
        textTransform: 'uppercase'
    },
    porcentagem: {
        fontSize: 12,
        color: '#00FF57'
    }
})
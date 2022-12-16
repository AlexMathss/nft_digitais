import React from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";

export default function CardMarketRight({
    datames,
    datatitle
}){
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/vector1.png')} resizeMode="cover" style={styles.imgBkg}/>
            <View style={styles.content}>
                <View style={styles.card}>
                    <Text style={styles.title}>{datames}</Text>
                    <View style={styles.cardConteudo}>
                        <Text style={styles.subTitle}>{datatitle}</Text>
                        <Text style={styles.subConteudo}>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

// AUMENTAR O TAMANHO DO CONTAINER DA PAGINA PRINCIPAL PARA CABER TODAS AS INFORMAÇÕES.

const styles = StyleSheet.create({
    container: {
        width: 174,
        height: 150,
        alignItems: 'flex-start'
    },
    imgBkg: {
        flex: 1,
        width: 90,
        height: 150
    },
    content: {
        width: 174,
        height: 150,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        width: 158,
        height: 110,
        borderRadius: 8,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#15BFFD',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: '600',
        
    },
    subTitle: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: '500'
    },
    cardConteudo: {
        height: 80,
        justifyContent: 'space-between',
    },
    subConteudo: {
        fontSize: 12,
        color:'#FFF'
    }
})
import React from "react";
import {ImageBackground, Text, View, StyleSheet} from 'react-native';
import CardMarket from "../../Componetns/CardMarket";

export default function Market(){
    return(
        <View style={styles.container} >
            <ImageBackground source={require('../../../assets/back.png')} resizeMode="cover" style={{flex: 1}}>
                <View style={styles.content}>
                    <View style={styles.containerText}>
                        <Text style={styles.title}>NFT MarketPlace Map</Text>
                        <Text style={styles.sub}>The largest and unique{'\n'}Super rare NFT marketplace.</Text>
                    </View>
                    <View style={styles.card}>
                        <CardMarket/>
                       
                        <View style={styles.line}/>
                        <View style={styles.cardRight}>

                        </View>
                    </View>
                </View>
                
            </ImageBackground>
        </View>
    )
}
{/* <View style={styles.cardLeft}>
                            
</View> */}

const styles = StyleSheet.create({
    container: {
        height: 550,
        flex: 1
    },
    content: {
        backgroundColor: 'orange',
        height: 550,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    containerText: {
        backgroundColor: 'red',
        width: 216,
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFF'
    },
    sub: {
        fontSize: 15,
        textAlign: 'center',
        lineHeight: 20,
        color: '#FFF'
    },
    card: {
        width: 387,
        height: 352,
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardLeft: {
        backgroundColor: 'red',
        width: 174,
        height: 352
    },
    cardRight: {
        backgroundColor: 'red',
        width: 174,
        height: 352
    },
    line:{
        height: 269.71, 
        width: 5, 
        backgroundColor: 'purple', 
        borderRadius: 50
    }
})
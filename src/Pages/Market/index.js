import React from "react";
import {ImageBackground, Text, View, StyleSheet} from 'react-native';
import CardMarketLeft from "../../Componetns/CardMarketLeft";
import CardMarketRight from "../../Componetns/CardMarketRight";
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
                        <View style={styles.cardLeft}>
                            <CardMarketLeft
                                datames={'January'}
                                datatitle={'Brief'}
                            />
                            <CardMarketLeft
                                datames={'March'}
                                datatitle={'Discover'}
                            />
                            <CardMarketLeft
                                datames={'May'}
                                datatitle={'Testing'}
                            />
                        </View>
                       
                        <View style={styles.line}/>
                        <View style={styles.cardRight}>
                            <CardMarketRight
                                datames={'Fabruary'}
                                datatitle={'Research'}
                            />
                            <CardMarketRight
                                datames={'April'}
                                datatitle={'Design'}
                            />
                            <CardMarketRight
                                datames={'June'}
                                datatitle={'Launch & Feedback'}
                            />
                        </View>
                    </View>
                </View>
                
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 750,
        flex: 1
    },
    content: {
        height: 700,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    containerText: {
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
        width: 400,
        height: 600,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardLeft: {
        width: 174,
        height: 500,
        justifyContent: 'space-between'
    },
    cardRight: {
        width: 190,
        height: 500,
        marginTop: 60,
        justifyContent: 'space-between'
    },
    line:{
        height: 269.71, 
        width: 5, 
        backgroundColor: 'purple', 
        borderRadius: 50
    }
})
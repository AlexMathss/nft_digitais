import React from "react";
import {ScrollView, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Live(){
    return(
        <View style={styles.container}>
           <View style={styles.containerTitle}>
                <Text style={styles.title}>Live Acution</Text>
                <Text style={styles.sub}>
                    The largest and unique Super rare NFT marketplace{'\n'}
                    For crypto-collectibles
                </Text>
           </View>
           <View style={styles.scroll}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.card}>
                        <Image source={require('../../../assets/post1.png')} style={styles.post}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={[styles.card, {marginLeft: 19, marginRight: 19}]}>
                        <Image source={require('../../../assets/post2.png')} style={styles.post}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={styles.card}>
                        <Image source={require('../../../assets/post3.png')} style={styles.post}/>
                    </TouchableOpacity>
                </ScrollView>
           </View>
        </View>
        
    )
}

//{height: 437, backgroundColor: 'red'}  / {backgroundColor: 'orange', width: 403, height: 225}

const styles = StyleSheet.create({
    container: {
        height: 400,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        backgroundColor: '#1F274C'
    },
    containerTitle: {
        width: '100%',
        height: 75,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: '600'
    },
    sub: {
        fontSize: 15,
        color: '#FFF',
        textAlign: 'center',
        lineHeight: 23
    },
    scroll: {
        width: 403,
        height: 225
    },
    card: {
        height: 224.92,
        width: 205,
    },
    post: {
        height: 224.92,
        width: 205,
    }
})
import React from "react";
import {Text, View, StyleSheet, Image} from 'react-native';
import Button from "../../Componetns/Button";

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.resumeCard}>
                <Text style={styles.title}>
                    Discover{'\n'}Collect and{'\n'}Sell NFT.
                </Text>
                <Text style={styles.subTitle}>
                    Explore on the world's best{'\n'}largest NFT marketplace
                </Text>
                <View style={styles.total}>
                    <View style={styles.totalCard}>
                        <Text style={styles.totalTitle}>26K+</Text>
                        <Text style={styles.totalSub}>Artwork</Text>
                    </View>
                    <View style={styles.totalCard}>
                        <Text style={styles.totalTitle}>18K+</Text>
                        <Text style={styles.totalSub}>Aucation</Text>
                    </View>
                    <View style={styles.totalCard}>
                        <Text style={styles.totalTitle}>8K+</Text>
                        <Text style={styles.totalSub}>Artist</Text>
                    </View>
                </View>
                <Button
                   width={80}
                   height={20}
                   buttonText={'Explore'}
                />
            </View>
            <View style={styles.imageVr}>
                <Image source={require('../../../assets/home.png')} style={styles.homeImg}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 289,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1F274C',
        alignItems: 'center',
        paddingLeft: 18,
        paddingRight: 18
    },
    resumeCard: {
        width: 182,
        height: 240,
        justifyContent: 'space-between',
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 40
    },
    subTitle: {
        color: '#fff',
        fontSize: 12,
        lineHeight: 20
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 167,
        height: 31
    },
    totalCard: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    totalTitle: {
        fontSize: 15,
        color: '#fff',
    },
    totalSub: {
        color: '#fff',
        fontSize: 12
    },
    imageVr: {
        height: 240,
        width: 177
    },
    homeImg: {
        width: 177,
        height: 240
    }
})
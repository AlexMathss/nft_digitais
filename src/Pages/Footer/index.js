import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ButtonF from "../../Componetns/ButtonF";

export default function Footer(){
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image source={require('../../../logo.png')}/>
                <Text style={styles.title}>NFT MarketPlace</Text>
            </View>
            <View styles={styles.links}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>MarketPlace</Text>
                    <ButtonF btnText={'Explore'}/>
                    <ButtonF btnText={'NFTs'}/>
                    <ButtonF btnText={'Collectibles'}/>
                    <ButtonF btnText={'Virtuallyreally'}/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Company</Text>
                    <ButtonF btnText={'About us'}/>
                    <ButtonF btnText={'Support'}/>
                    <ButtonF btnText={'Careers'}/>
                    <ButtonF btnText={'Contact Us'}/>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Resourses</Text>
                    <ButtonF btnText={'Partners'}/>
                    <ButtonF btnText={'Blogs'}/>
                    <ButtonF btnText={'Help Center'}/>
                    <ButtonF btnText={'Live Action'}/>
                </View>
            </View>
            <View style={styles.social}>
                <Text style={styles.cardTitle}>Social</Text>
                <View style={styles.redes}>
                    <Image source={require('../../../assets/facebook.png')}/>
                    <Image source={require('../../../assets/linkedin.png')}/>
                    <Image source={require('../../../assets/instagram.png')}/>
                    <Image source={require('../../../assets/twitter.png')}/>
                </View>
            </View>
        </View>
    )
}
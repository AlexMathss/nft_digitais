import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native';
import ButtonF from "../../Componetns/ButtonF";

export default function Footer(){
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/footerbg.png')} resizeMode="cover" style={{flex: 1}}>
                <View style={styles.content}>
                    <View style={styles.titleContainer}>
                        <Image source={require('../../../assets/logo.png')}/>
                        <Text style={styles.title}>NFT MarketPlace</Text>
                    </View>
                    <View style={styles.links}>
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
                        <Text style={styles.cardTitle}>Follow Us</Text>
                        <View style={styles.redes}>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/facebook.png')} style={styles.socialImg}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/linkedin.png')} style={styles.socialImg}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/instagram.png')} style={styles.socialImg}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../../assets/twitter.png')} style={styles.socialImg}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 430
    },
    content: {
        height: 430,
        alignItems: 'center'
    },
    titleContainer: {
        height: 30,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        marginBottom: 26
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFF'
    },
    links: {
        width: 342,
        height: 122,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 26
    },
    card: {
        justifyContent: 'space-between'
    },
    cardTitle: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: '600'
    },
    social: {
        width: 160,
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    redes: {
        width: 160,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    socialImg: {
        width: 30,
        height: 30
    }
})
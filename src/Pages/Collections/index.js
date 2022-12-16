import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import CollectionsComp from '../../Componetns/CollectionsComp';

export default function Collections(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Top Collections</Text>
            <View style={styles.cardSumario}>
                <TouchableOpacity style={styles.sumBtn}>
                    <Text style={styles.textBtn}>24H</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.sumBtn, {backgroundColor: '#332FD0'}]}>
                    <Text style={styles.textBtn}>7D</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.sumBtn, {backgroundColor: '#332FD0', width: 100}]}>
                    <Text style={styles.textBtn}>All Time</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerCards}>
                <View style={styles.cabecalho}>
                    <Text style={styles.headerText}>Collections</Text>
                    <Text style={styles.headerText}>Volume</Text>
                </View>
                <View style={styles.card}>
                    <CollectionsComp
                        number={'1'}
                        profileImg={require('../../../assets/profile1.png')}
                        nomeTitle={'Bored Ape'}
                        nomeSub={'Yacht Club'}
                        vendidos={'230.38 eth'}
                        porcentagem={'+50,20%'}
                    />
                    <CollectionsComp
                        number={'2'}
                        profileImg={require('../../../assets/profile2.png')}
                        nomeTitle={'Mutant Ape'}
                        nomeSub={'Yacht Club'}
                        vendidos={'138.38 eth'}
                        porcentagem={'+28,20%'}
                    />
                    <CollectionsComp
                        number={'3'}
                        profileImg={require('../../../assets/profile3.png')}
                        nomeTitle={'Otherdeed for'}
                        nomeSub={'Otherside'}
                        vendidos={'80.18 eth'}
                        porcentagem={'+50,20%'}
                    />
                    <CollectionsComp
                        number={'4'}
                        profileImg={require('../../../assets/profile4.png')}
                        nomeTitle={'Pudgy'}
                        nomeSub={'Penguins'}
                        vendidos={'291.38 eth'}
                        porcentagem={'+49,20%'}
                    />
                    <CollectionsComp
                        number={'5'}
                        profileImg={require('../../../assets/profile5.png')}
                        nomeTitle={'Quirkies'}
                        nomeSub={'Originals'}
                        vendidos={'81.38 eth'}
                        porcentagem={'+50,20%'}
                    />
                    <CollectionsComp
                        number={'6'}
                        profileImg={require('../../../assets/profile6.png')}
                        nomeTitle={'Doodle'}
                        vendidos={'340.21 eth'}
                        porcentagem={'+50,20%'}
                    />
                    <CollectionsComp
                        number={'7'}
                        profileImg={require('../../../assets/profile7.png')}
                        nomeTitle={'Quirkies'}
                        nomeSub={'Originals'}
                        vendidos={'263.82 eth'}
                        porcentagem={'+50,20%'}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 649,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#1F274C'
    },
    title: {
        fontSize: 30,
        color: '#FFF',
        fontWeight: 'bold'
    },
    cardSumario: {
        width: 360,
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    sumBtn: {
        width: 80,
        height: 30,
        backgroundColor: '#F52AF5',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '700'
    },
    containerCards: {
        width: 381,
        height: 528,
        justifyContent: 'space-around'
    },
    cabecalho: {
        height: 26,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#505050'
    },
    headerText: {
        fontSize: 15,
        color: '#FFF',
    },
    card: {
        height: 464,
        justifyContent: 'space-between'
    }
})
import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Followers from "../../Componetns/Followers";

export default function Creater(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.cardTitle}>
                    <Text style={styles.title}>
                        Our Creater
                    </Text>
                    <Text style={styles.sub}>
                        The largest and unique Super rare NFT marketplace{'/'}
                        For crypto-collectibles
                    </Text>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>
                        Explore more
                    </Text>
                </TouchableOpacity>
                <View style={styles.follow}>
                    <Followers
                        imgProfile={require('../../../assets/perfil.png')}
                        user={'Emerson Philips'}
                        bio={'3.2 ETH'}
                    />
                    <Followers
                        imgProfile={require('../../../assets/perfil.png')}
                        user={'Alex Matheus'}
                        bio={'5.2 ETH'}
                    />
                    <Followers
                        imgProfile={require('../../../assets/perfil.png')}
                        user={'Julia Fernandes'}
                        bio={'3.5 ETH'}
                    />
                    <Followers
                        imgProfile={require('../../../assets/perfil.png')}
                        user={'Marcelo Abreu'}
                        bio={'4.2 ETH'}
                    />
                    <Followers
                        imgProfile={require('../../../assets/perfil.png')}
                        user={'Larissa Macedo'}
                        bio={'2.0 ETH'}
                    />
                    <Followers
                        imgProfile={require('../../../assets/perfil.png')}
                        user={'Giovana Oliver'}
                        bio={'3.0 ETH'}
                    />
                    <Followers
                        imgProfile={require('../../../assets/perfil.png')}
                        user={'Anderson Vicci'}
                        bio={'4.1 ETH'}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 873,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1F274C'
    },
    content: {
        width: 313,
        height: 827,
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    cardTitle: {
        width: 313,
        height: 77,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFF'
    },
    sub: {
        fontSize: 12,
        color: '#FFF',
        textAlign: 'center',
        lineHeight: 25
    },
    btn: {
        width: 130,
        height: 30,
        borderWidth: 2,
        borderColor: '#17A1D4',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 12,
        color: '#17A1D4'
    },
    follow: {
        height: 680,
        width: 313,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
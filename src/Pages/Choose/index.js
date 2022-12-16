import React from "react";
import {Text, View, StyleSheet, Image} from 'react-native';

export default function Choose(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.imagens}>
                    <Image source={require('../../../assets/vr.png')} style={styles.vr}/>
                    <Image source={require('../../../assets/bolha.png')} style={styles.bolha}/>
                </View>
                <View style={styles.conteudo}>
                    <Text style={styles.title}>Why choose us?</Text>
                    <Text style={styles.sub}>
                        Lorem ipsum dolor sit amet consectetur. Congue eu arcu{'\n'}
                        neque um semper. Eros suspendisse varius enim ultrices{'\n'}
                        isque et quis ctumst. Feugiat amet velit faucibus amet{'\n'}
                        Eu feugiat adipiscing viverrfeugiat. Mollis tellus malesuada{'\n'}
                        massa amet lacinia aliquamid ultrices vitae. 
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 577,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1F274C'
    },
    content: {
        width: '100%',
        height: 484,
        backgroundColor: 'rgba(255,255,255,0.1)',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imagens: {
        width: 384,
        height: 265,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    vr: {
        width: 191.5,
        height: 270
    },
    bolha: {
        width: 190,
        height: 190
    },
    conteudo: {
        marginBottom: 25,
        width: 384,
        height: 174,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFF'
    },
    sub: {
        fontSize: 12,
        lineHeight: 30,
        color: '#FFF'
    }
});
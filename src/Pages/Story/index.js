import React from "react";
import {Text, View, StyleSheet, Image} from 'react-native';
import Button from '../../Componetns/Button';

export default function Story(){
    return(
        <View style={styles.container}>
            
                <Image source={require('../../../assets/nftno.png')} style={styles.ImgNf} />
            
            <View style={styles.containerConteudo}>
                <Text style={styles.title}>NFT's Story</Text>
                <Text style={styles.conteudoText}>
                    Surgiram em 2014, quando o artista americano Kevin McCoy{'\n'}
                    vendeu uma obra chama Quantum com um código criptografado{'\n'}
                    de autenticidade embutido por meio da tecnologia blockchain.
                </Text>
                <Text style={styles.conteudoText}>
                    O grande boom aconteceu em 2019 e, no ano de 2021 tornou-se{'\n'}
                    uma tendência no mundo dos ativos digitais.
                </Text>
                <Button
                    buttonText={'Learn more'}
                    width={100}
                    height={20}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 264,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1F274C',
        justifyContent: 'space-between',
        paddingLeft: 18,
        paddingRight: 18
    },
    ImgNf: {
        width: 120,
        height: 160
    },
    containerConteudo: {
        width: 234,
        height: 225,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold'
    },
    conteudoText: {
        fontSize: 12,
        lineHeight: 20,
        color: '#FFF'
    }
})
import React from "react";
import { ImageBackground, View, Text } from "react-native";

export default function CardMarket(){
    return(
        <View style={{width: 174, height: 92, backgroundColor: 'blue', alignItems: 'flex-end'}}>
            <ImageBackground source={require('../../../assets/vector2.png')} resizeMode="cover" style={{flex: 1, width: 55, height: 92}}/>
            <View style={{width: 174, height: 92, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{backgroundColor: 'orange', width: 158, height: 70, borderRadius: 8}}>
                    <Text>January</Text>
                    <View>
                        <Text>Brief</Text>
                        <Text style={{fontSize: 10}}>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

// AUMENTAR O TAMANHO DO CONTAINER DA PAGINA PRINCIPAL PARA CABER TODAS AS INFORMAÇÕES.
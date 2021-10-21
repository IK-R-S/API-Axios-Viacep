import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import addcep from './assets/addcep.png'
import api from './services/api';

export default function App() {
    const [cep, setCep] = useState('')
    const [result, setResult] = useState(false)

    const consultarCep = () => {
        api.get(`/ws/${cep}/json/`).then((response) => {
            setResult(response.data);
        }).catch(() => {
            setResult({ cep });
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.searchBox}>
                    <Ionicons style={styles.icon} name='location-outline' size={20} color="white"/>
                    <TextInput onChangeText={(text) => setCep(text)} style={styles.searchInput} placeholder="Insira um CEP" keyboardType="numeric"/>
                </View>
                <TouchableOpacity onPress={consultarCep} style={styles.searchButton}>
                    <Text style={styles.searchButtonTitle}>Pesquisar</Text>
                </TouchableOpacity>
            </View>
            
            {
                result.uf ? (
                    <>
                    <Text style={styles.cepTitle}>{result?.cep}</Text>
                    <View style={styles.resultsBox}>
                        <Text style={styles.results}>Bairro: {result?.bairro}</Text>
                    </View><View style={styles.resultsBox}>
                            <Text style={styles.results}>Endereço: {result?.logradouro}</Text>
                        </View><View style={styles.resultsBox}>
                                <Text style={styles.results}>Complemento: {result?.complemento}</Text>
                            </View><View style={styles.resultsBox}>
                                    <Text style={styles.results}>Localidade: {result?.localidade}</Text>
                                </View><View style={styles.resultsBox}>
                                        <Text style={styles.results}>Estado: {result?.uf}</Text>
                                    </View></>

                ) : (
                    <>
                    <Text style={styles.cepTitle}>EasyCep</Text>
                    <Image style={styles.image} source={addcep} /><Text style={styles.help}>Pesquise por um cep</Text></>    

                )
            }

            <StatusBar style="auto" />
        </View>
    );
}
/*
                        <Text style={styles.data}>Complemento: {result?.complemento}</Text>
                        <Text style={styles.data}>localidade: {result?.localidade}</Text>
                        <Text style={styles.data}>Estado: {result?.uf}</Text>

*/

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#E1E1E1',
    alignItems: 'center',
},
image:{
    width: 250,
    height: 250,
},
help:{
    fontSize: 15,
    color: '#184043',
},
box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 44,
    width: '100%',
    minWidth: 350,
    paddingHorizontal: 8
},
searchBox: {
    backgroundColor: '#184043',
    width: '70%',
    minWidth: '70%',
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    marginRight: 11,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    
    elevation: 7,
},
icon:{
    marginLeft: 10,
    marginRight: 12
},
searchInput:{
    height: 44,
    fontSize: 18,
    width:'100%',
    color: '#FFFFFF'
},
searchButton:{
    backgroundColor: '#0AD3C7',
    borderRadius: 6,
    width: '25%',
    minWidth: '25%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    
    elevation: 7,
},
searchButtonTitle:{
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
},
cepTitle:{
    fontSize: 36,
    color: '#184043',
    fontWeight: 'bold',
    marginBottom: 30,
},
resultsBox:{
    fontSize: 23,
    color: 'black',
    backgroundColor: 'white',
    width: 270,
    height: 55,
    borderRadius: 10,
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 22,
},
results:{
    fontSize: 23,
}

});

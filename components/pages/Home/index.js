// HOME
import QRCode from 'react-native-qrcode-svg';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold, } from '@expo-google-fonts/quicksand';
import { AppLoading } from 'expo-app-loading';
import addcep from './addcep.png';
import api from './api';
import styles from './styles';

function Home({ navigation }){
    // Usando fontes personalizadas
    let FontsLoaded = useFonts({
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_700Bold,
    })

    if(!FontsLoaded){
        return <AppLoading/>
    }

    // Definindo dados de consulta e resposta
    const [cep, setCep] = useState('')
    const [result, setResult] = useState(false)

    // Criando a constante de consulta na API + Execução da Const de ToastAndroid
    const consultarCep = () => {
        //showToast();

        api.get(`/ws/${cep}/json/`).then((response) => {
            setResult(response.data);
        }).catch(() => {
            setResult({ cep });
        })
            
    }

    // Construção de dinâmica de Hyperlink do Maps
    var link = `https://www.google.com.br/maps/search/${result?.cep},%20${result?.uf}`
    
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    function openMaps(){
        openInNewTab(link)
    }

    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.searchBox}>
                    <Ionicons style={styles.iconSearch} name='location-outline' size={25} color="white" />
                    <TextInput onChangeText={(text) => setCep(text)} style={styles.searchInput} placeholder="Insira um CEP" keyboardType="numeric" />
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
                        </View>
                        <View style={styles.resultsBox}>
                            <Text style={styles.results}>Endereço: {result?.logradouro}</Text>
                        </View>
                        <View style={styles.resultsBox}>
                            <Text style={styles.results}>Complemento: {result?.complemento}</Text>
                        </View>
                        <View style={styles.resultsBox}>
                            <Text style={styles.results}>Localidade: {result?.localidade}</Text>
                        </View>
                        <View style={styles.resultsBox}>
                            <Text style={styles.results}>Estado: {result?.uf}</Text>
                        </View>
                        <View style={styles.bottomButtonsView}>
                            <TouchableOpacity style={styles.roundButton}>
                                <Ionicons style={styles.iconBottom} name='heart-outline' size={20} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.roundButton} onPress={openMaps}>
                                <Ionicons style={styles.iconBottom} name='share-outline' size={20} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.qrButton} onPress={() => navigation.navigate('Qrcode')}>
                                <Ionicons style={styles.iconBottomQr} name='qr-code' size={20} color="white" />
                                <Text style={styles.qrText}>Gerar QR Code</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <>
                        <Text style={styles.cepTitle}>EasyCep</Text>
                        <Image style={styles.image} source={addcep} />
                        <Text style={styles.help}>Pesquise por um cep</Text>
                        
                    </>

                )
            }
            <StatusBar hidden={true} />
        </View>

    );
}

export default Home;

// CÓDIGOS IMPORTANTES - RECICLADOS

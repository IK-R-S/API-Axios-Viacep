// QRCODE
import QRCode from 'react-native-qrcode-svg';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold, } from '@expo-google-fonts/quicksand';
import { AppLoading } from 'expo-app-loading';
import styles from './styles';

function Qrcode({ navigation }) {
    // Usando fontes personalizadas
    let FontsLoaded = useFonts({
        Quicksand_300Light,
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_700Bold,
    })

    if (!FontsLoaded) {
        return <AppLoading />
    }


    return (
        <>
        <View style={styles.containerQr}>
            <QRCode value="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={styles.qrcodeView} size={250} color="#184043" backgroundColor='transparent' />
            <Text style={styles.qrcodeInstruction}>Aponte a câmera de outro a parelho ou tire print</Text>
            <View style={styles.bottomButtonsView}>
            <TouchableOpacity style={styles.roundButton}>
                <Ionicons style={styles.iconBottom} name='heart-outline' size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton} >
                <Ionicons style={styles.iconBottom} name='share-outline' size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.qrButton} onPress={() => navigation.navigate('Home')}>
                <Ionicons style={styles.iconBottomQr} name='arrow-back' size={20} color="white" />
                <Text style={styles.qrText}>Voltar a página</Text>
            </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

export default Qrcode;
// QRCODE
import QRCode from 'react-native-qrcode-svg';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold, } from '@expo-google-fonts/quicksand';
import { AppLoading } from 'expo-app-loading';
import styles from '../../../styles/styles';

function Qrcode({ navigation, route }) {
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
    
    // Construção de dinâmica de Hyperlink do Maps e link do QRCode
    let link = route.params?.qrlink

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    function openMaps(){
        openInNewTab(link)
    }


    return (
        <>
        <View style={styles.containerQr}>
            <QRCode value={link} style={styles.qrcodeView} size={250} color="#184043" backgroundColor='transparent' />
            <Text style={styles.qrcodeInstruction}>Aponte a câmera de outro aparelho ou tire print.</Text>
            <View style={styles.bottomButtonsView}>
            <TouchableOpacity style={styles.roundButton}>
                <Ionicons style={styles.iconBottom} name='heart-outline' size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton} onPress={openMaps}>
                <Ionicons style={styles.iconBottom} name='share-outline' size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.qrButton}  onPress={() => navigation.navigate('Home')} >
                <Ionicons style={styles.iconBottomQr} name='arrow-back' size={20} color="white" />
                <Text style={styles.qrText}>Voltar a página</Text>
            </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

export default Qrcode;
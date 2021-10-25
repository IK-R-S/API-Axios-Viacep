import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1E1E1',
        alignItems: 'center',
        paddingTop: 10, // PARA APP NATIVO: StatusBar.currentHeight,
        paddingHorizontal: 6,

    },
    qrcode: {
        width: 40,
        height: 40,
    },
    scrollView: {
        backgroundColor: 'pink',
        flex: 1,

      },
    image:{
        width: 250,
        height: 250,
    },
    help:{
        fontFamily: 'Quicksand_300Light',
        fontSize: 16,
        color: '#184043',
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 40,
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
    iconSearch:{
        marginLeft: 10,
        marginRight: 12,
    },
    iconBottom:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBottomQr:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -5,
        marginRight: 10,
    },
    searchInput:{
        fontFamily: 'Quicksand_400Regular',
        height: 44,
        fontSize: 18,
        width:'80%',
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
        fontFamily: 'Quicksand_500Medium',
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    cepTitle:{
        fontFamily: 'Quicksand_700Bold',
        fontSize: 36,
        color: '#184043',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    resultsBox:{
        backgroundColor: 'white',
        width: '90%',
        height: 56,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: 22,
        paddingHorizontal: 10,
    },
    results:{
        fontFamily: 'Quicksand_400Regular',
        fontSize: 20,
        textAlign: 'center',
    },
    bottomButtonsView:{
        flexDirection: 'row',
        marginTop: 10,
    },
    roundButton:{
        backgroundColor: '#184043',
        borderRadius: 40,
        width: 47,
        height: 47,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        
        elevation: 14,
    },
    qrButton:{
        flexDirection: 'row',
        backgroundColor: '#184043',
        borderRadius: 40,
        width: 160,
        height: 47,
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        
        elevation: 14,
    },
    
    qrText: {
        fontFamily: 'Quicksand_400Regular',
        color: 'white',
        textAlignVertical: 'center',
        justifyContent: 'center',
    }
    
})
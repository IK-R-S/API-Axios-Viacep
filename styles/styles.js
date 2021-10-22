import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    iconSearch:{
        marginLeft: 10,
        marginRight: 12
    },
    iconBottom:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBottomQr:{
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 3,
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
    },
    bottomButtonsView:{
        flexDirection: 'row',
    },
    roundButton:{
        backgroundColor: '#184043',
        borderRadius: 40,
        width: 40,
        height: 40,
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
        width: 150,
        height: 40,
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
        color: 'white',
        textAlignVertical: 'center',
        justifyContent: 'center',
    }
    
})

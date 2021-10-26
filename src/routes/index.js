// ROTAS
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import Qrcode from '../screens/Qrcode'

const Stack = createNativeStackNavigator();

function Route(){
    return(
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Qrcode" component={Qrcode} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Route;

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home'
import Qrcode from '../pages/Qrcode'

const Stack = createNativeStackNavigator();

function Route(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Qrcode" component={Qrcode} />
        </Stack.Navigator>
    )
}

export default Route;

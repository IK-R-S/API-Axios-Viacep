// © EASYCEP - 2021
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Route from "./components/routes";

export default function App() {
    // Retorno da função no Front End
    return (
        <NavigationContainer>
            <Route />
        </NavigationContainer>
    );
}

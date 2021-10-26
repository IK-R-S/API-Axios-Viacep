// © EASYCEP - 2021
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Route from "./src/routes";

export default function App() {
    // Retorno da função no Front End
    return (
        <NavigationContainer>
            <Route />
        </NavigationContainer>
    );
}

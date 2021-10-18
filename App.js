import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import api from './services/api';

// Precisa-se fazer a Busca com o CEP digitado no TextInput assim que o user clicar no TouchableOpacity

export default function App() {
  const [cep, setCep] = useState();
  const [dados, setdados] = useState();

  function Buscar(){
    useEffect(() => {
      api
        .get(`/ws/${cep}/json/`)
        .then((response) => setdados(response.data))
  
    }, []);  
  

  };

  return (
    <View style={styles.container}>
      <TextInput value={cep} onChange={(cep) => setCep(cep)} placeholder="Insira o cep" style={styles.input}/>
      <Text style={styles.data}>CEP: {dados?.cep}</Text>
      <TouchableOpacity onPress={Buscar} style={styles.bt}>
        <Text style={styles.text}>Buscar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
/*
<Text style={styles.data}>LOGRADOURO: {dados?.logradouro}</Text>
<Text style={styles.data}>BAIRRO: {dados?.bairro}</Text>
<Text style={styles.data}>COMPLEMENTO: {dados?.complemento}</Text>
<Text style={styles.data}>LOCALIDADE: {dados?.localidade}</Text>
<Text style={styles.data}>ESTADO: {dados?.uf}</Text>
<Text style={styles.data}>IBGE: {dados?.ibge}</Text>
<Text style={styles.data}>GIA: {dados?.gia}</Text>
<Text style={styles.data}>DDD DE ÁREA: {dados?.ddd}</Text>
<Text style={styles.data}>SIAFI: {dados?.siafi}</Text>
**/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 6,
    textAlign: 'center',
    width: 200,
    height: 30,
    marginBottom: 40,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,    

  },

  data: {
    fontSize: 20
  },

  bt: {
    width: 200,
    height: 40,
    marginTop: 40,
    backgroundColor: '#00179e',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,    
  

  },

  text: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  }
});

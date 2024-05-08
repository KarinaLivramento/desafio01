import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Resultado from './Resultado';

export default function App() {
  const [alcoolPrice, setAlcoolPrice] = useState('');
  const [gasolinaPrice, setGasolinaPrice] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function sairModal(){
    setModalVisible(false);
    setGasolinaPrice('');
    setAlcoolPrice('');
  }

  const Escolha = function(alcoolPrice, gasolinaPrice){
    const divisao = parseFloat(alcoolPrice) / parseFloat(gasolinaPrice);
    console.log(divisao);

    if (divisao > 0.7){
      return 'Gasolina'
    } else {
      return 'Álcool'
    } 
  };
  
  return (
    
    <View style={styles.container}>

      <Image
        source={require('./src/img/logo.png')}
        style={styles.img}
      />
      <Text style={styles.text}>Qual melhor opção?</Text>
      <Text style={styles.textModal}>Álcool (preço por litro):</Text>
      <TextInput
        style={styles.textInput}
        placeholder='R$ 3,50'
        onChangeText={(value) => setAlcoolPrice(value)}
        value={alcoolPrice}
        keyboardType="numeric"
      />
      <Text style={styles.textModal}>Gasolina (preço por litro):</Text>
      <TextInput
        style={styles.textInput}
        placeholder='R$ 5,20'
        onChangeText={(value) => setGasolinaPrice(value)}
        keyboardType="numeric"
        value={gasolinaPrice}
      />

      <TouchableOpacity
        style={styles.button} 
        onPress={() => setModalVisible(true)} >
      <Text style={styles.textBtn}> Calcular</Text>
      </TouchableOpacity>

      <View>
        <Resultado 
        modalVisible={modalVisible} 
        fechar={sairModal}
        Escolha={Escolha(alcoolPrice, gasolinaPrice)}
        alcoolPrice={alcoolPrice}
        gasolinaPrice={gasolinaPrice}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#121212',
    justifyContent: 'center'
  },
  img:{
    width:150,
    height: 150,
    alignSelf: 'center',
  },
  text:{
    color: '#fff',
    fontSize: 25,
    alignSelf: 'center',
    margin: 25,
  },
  textInput:{
    backgroundColor:'#A9A9A9',
    margin: 11,
    width: '90%',
    alignSelf:'center',
    borderRadius: 8,
    height: 40
  },
  textModal:{
    color: '#fff',
    fontSize: 15,
    marginLeft: 25, 
  },
  button:{
    width: '90%',
    height: 40,
    backgroundColor: 'red',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 10
  },
  textBtn:{
    color: '#fff',
    alignSelf: 'center',
    fontSize: 19,
    padding: 8,
    fontWeight: 'bold',
  
  }
});
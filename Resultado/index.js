import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';

export default function Resultado(props){
    
return (
    <Modal visible={props.modalVisible} animationType='slide' >

        <View style={styles.area}>
            
            <Image
            source={require('../src/img/gas.png')}
            style={styles.imgArea}
            />

            <Text style={styles.textArea} >Compensa usar {props.Escolha} </Text>
            <Text style={styles.textPrecos}>Com os preços: </Text>
            <Text style={styles.texto}>Álcool: R$ {props.alcoolPrice} </Text>
            <Text style={styles.texto}>Gasolina: R$ {props.gasolinaPrice} </Text>

            <View>
                <TouchableOpacity 
                style={styles.btnVoltar} 
                onPress={
                     props.fechar }
               
                >
                <Text style={styles.textVoltar}>Calcular novamente</Text>
                </TouchableOpacity>
            </View>

        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    area:{
        flex:1,
        backgroundColor: '#121212',
        justifyContent: 'center'
    },
    imgArea:{
        width:150,
        height: 150,
        alignSelf: 'center',
    },
    textArea:{
        color: '#32CD32',
        fontSize: 25,
        alignSelf: 'center',
        margin: 15,
    },
    btnVoltar:{
        borderWidth:1,
        borderColor:'red',
        height:50,
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:8,
        width:'90%',
        marginTop: 30
    },
    textVoltar:{
        color: 'red',
        alignSelf: 'center',
        fontSize: 19,
        fontWeight: 'bold',
    },
    textPrecos:{
        color: '#fff',
        alignSelf: 'center',
        fontSize: 19,
        margin: 15,
    },
    texto:{
        color: '#fff',
        alignSelf: 'center',
        fontSize: 13,
        margin: 5,
    }
});
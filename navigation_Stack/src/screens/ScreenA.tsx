import React from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ScreenA() {

  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('screenB')
  }
  function openScreenC() {
    navigation.navigate('screenC')
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Clear Tooth</Text>
      <Text style={styles.title2}>Entrar para cadastrar</Text>


      <TouchableOpacity style={styles.btn} onPress={openScreen}>
        <Text style={styles.btnTxt}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={openScreenC}>
        <Text style={styles.btnTxt}>Consulta de Pacientes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1E25',

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',

    paddingBottom: 10,
  },
  title2: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',

    paddingBottom: 10,
  },
  input: {
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 5,
    fontWeight: "200",

    width: '60%',
    margin: 10,
    padding: 8

  },

  btn: {
    backgroundColor: 'red',
    fontSize: 14,
    width: '60%',

    margin: 10,
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
    alignItems: 'center'
  },

  btnTxt: {
    color: '#fff',
    fontFamily: "Arial",
    fontWeight: "600",

  },
})

export default ScreenA;
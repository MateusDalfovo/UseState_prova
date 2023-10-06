import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ScreenB() {

  const navigation = useNavigation();

  function openScreen() {
    navigation.navigate('screenA')
  }

  // useState
  const [Nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [CPF, setCPF] = useState('')
  const [Endereco, setEndereco] = useState('');
  const [Email, setEmail] = useState('');
  const [Senha, setSenha] = useState('');



  function handleUserAdd() {
    console.log(
      "Nome Completo:" + Nome
      + "\nEmail: " + Email
      + "\nData Nascimento:" + data
      + "\nCPF: " + CPF
      + "\nEndereco" + Endereco
      + "\nSenha: " + Senha

    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preencha os Dados</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"

        value={Nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"

        value={Email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Data Nascimento"

        value={data}
        onChangeText={setData}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"

        value={CPF}
        onChangeText={setCPF}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"

        value={Senha}
        onChangeText={setSenha}
      />

      <TextInput
        style={styles.input}
        placeholder="Endereco"

        value={Endereco}
        onChangeText={setEndereco}
      />


      <TouchableOpacity style={styles.btn} onPress={handleUserAdd}>
        <Text style={styles.btnTxt}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  )
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
});

export default ScreenB;
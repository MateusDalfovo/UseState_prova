import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Alert, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function ScreenC() {

    const navigation = useNavigation()
    const data = [
        {
            Nome: "Mateus Dalfovo",
            CPF: "123.456.789.90",
            DataNascimento: "14/04/2006",
            Endereco: "Rua Moraes da Silva, 234",
            Telefone: "(47) 99945-7892",
            Valor: "1200",
            Assunto: "Olhos",
        },
        {
            Nome: "Alissa Michels",
            CPF: "890.892.899.01",
            DataNascimento: "20/01/2000",
            Endereco: "Av. XV de Novembro, 345",
            Telefone: "(47) 97665-1355",
            Valor: "1000",
            Assunto: "Olhos",
        },
        {
            Nome: "Matheus Bigode",
            CPF: "999.888.333-12",
            DataNascimento: "20/02/2002",
            Endereco: "Rua Jacinto, 90",
            Telefone: "(48) 99999-4444",
            Valor: "1000",
            Assunto: "Consulta Geral",
        },
        {
            Nome: "Raquel lllll",
            CPF: "44-988-1111-22",
            DataNascimento: "30/12/2005",
            Endereco: "Rua Moraes da Silva, 555",
            Telefone: "(48) 98834-8781",
            Valor: "900",
            Assunto: "Consulta Geral",
        },
    ]

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.titulo}>Agenda de Consultas:</Text>
                <FlatList
                    style={styles.fundo}
                    data={data}
                    renderItem={(
                        ({ item }) => (
                            <View style={styles.consulta}>
                                <Text>Nome: {item.Nome}</Text>
                                <Text>CPF: {item.CPF}</Text>
                                <Text>Data de nascimento: {item.DataNascimento}</Text>
                                <Text>Endereço: {item.Endereco}</Text>
                                <Text>Telefone: {item.Telefone}</Text>
                                <Text>Valor: {item.Valor}</Text>
                                <Text>Assunto: {item.Assunto}</Text>
                                <TouchableOpacity style={styles.btn}>
                                    <Text style={styles.btnTxt}>Editar</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    )} />
            </View >
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 30,
        textAlign: 'center',
        color: 'red',

    },

    input: {
        marginTop: '15%',
        padding: '4%',
        width: 350,
        backgroundColor: '#ebebeb',
        color: '#7d7d7d',
        fontSize: 16,
        borderRadius: 10,
    },

    botao: {
        marginTop: 50,
        marginBottom: 175,
        width: 210,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00589F',
        borderRadius: 150,
    },

    textBotao: {
        fontSize: 15,
        color: 'white',
    },
    consulta: {
        margin: 10,
        width: 300,
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 10
    },
    fundo: {
        backgroundColor: '#ff7b5a',
        borderRadius: 10,
    },
    btn: {
        backgroundColor: 'red',
        fontSize: 14,
        width: '30%',
        margin: 10,
        padding: 15,
        marginBottom: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginLeft: '35%',
        
      },
    
      btnTxt: {
        color: '#fff',
        fontFamily: "Arial",
        fontWeight: "600",
    
      },
});


export default ScreenC;

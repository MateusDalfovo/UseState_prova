import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Alert, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ScreenC() {
    // useState
    const [Nome, setNome] = useState(["mateus"]);
    const [data, setData] = useState(["14/04/2006"]);
    const [CPF, setCPF] = useState(['01929012921'])
    const [Endereco, setEndereco] = useState(['Rua Amazonas']);
    const [Email, setEmail] = useState(['mateus_dalfovo!@estudanteblabla']);
    const [Senha, setSenha] = useState(['12345']);


    return (
        <ScrollView>
            <Text style={styles.titulo}>Cadastro de Usuário</Text>

            <View style={styles.container}>


                <TextInput
                    style={styles.input}
                    onChangeText={Nome}
                    value={Nome}
                />

                <TextInput
                    style={styles.input}
                    placeholder="data"

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
                    placeholder="Endereco"

                    value={Endereco}
                    onChangeText={setEndereco}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={false}

                    value={Senha}
                    onChangeText={setSenha}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    secureTextEntry={false}

                    value={Email}
                    onChangeText={setEmail}
                />



                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textBotao}>Cadastrar</Text>
                </TouchableOpacity>



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
        marginTop: 60,
        textAlign: 'center',
        color: '#00589F',

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
});


export default ScreenC;
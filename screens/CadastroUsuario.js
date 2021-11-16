import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput } from 'react-native';
import { initializeApp } from "firebase/app";
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";

export default function CadastroUsuario({ navigation }) {
  
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

    const firebaseLocalConfig = {
      apiKey: "AIzaSyAl6ofchoX5qRwtc9W1R_fObmEYB-i6d84",
      authDomain: "projetoreact-d4cab.firebaseapp.com",
      projectId: "projetoreact-d4cab",
      storageBucket: "projetoreact-d4cab.appspot.com",
      messagingSenderId: "50471244965",
      appId: "1:50471244965:web:59da4426ad5e87f20f294c",
      measurementId: "G-2MWSNDB2G6"
    };
    
  
    const app = initializeApp(firebaseLocalConfig);
  
    function cadastrarFirebase(){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          const user = userCredential.user;
          navigation.navigate('Login');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  
    return (
      <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>email</Text>
        <TextInput style={styles.input} value={email} onChangeText={email => setEmail(email)} />
        <Text style={styles.title}>senha</Text>
        <TextInput style={styles.input} secureTextEntry={true} value={senha} onChangeText={senha => setSenha(senha)} />
        <br />
        <Button
          title="Salvar"
          onPress={() => {cadastrarFirebase()}}
        />
      </View>
    </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      fontSize: 30,
      margin: 12,
      textAlign: 'left',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';

function LoginScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login</Text>
        <Input placeholder='Login' />
        <Input placeholder="Password" secureTextEntry={true} />
        <Button title="Login" onPress={() => navigation.navigate("ListaDeContatos")}/>
        <Button title="Cadastre-se" onPress={() => navigation.navigate("CadastroDeUsuario")}/>
      </View>
    );
  }

  

export default LoginScreen;
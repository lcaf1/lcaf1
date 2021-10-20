import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login</Text>
        <Button
                title="Cadastro de usuario"
                onPress={() => navigation.navigate("CadastroDeUsuario")}
            />
            <Button
                title="Lista de Contatos"
                onPress={() => navigation.navigate("ContatosScreen")}
            />
      </View>
    );
  }

  

export default HomeScreen;
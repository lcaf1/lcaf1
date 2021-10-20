import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen  from  './screens/LoginScreen';
import UsuarioScreen from './screens/CadastroDeUsuarios';
import ListaDeContatosScreen from './screens/ListaDeContatos';
import ContatoScreen from './screens/Contato';
import CadUsuarioScreen from './screens/CadastroDeUsuarios'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CadastroDeUsuario" component={UsuarioScreen} />
        <Stack.Screen name="ListaDeContatos" component={ListaDeContatosScreen} />
        <Stack.Screen name="Contato" component={ContatoScreen} />
        <Stack.Screen name="CadUsuario" component={CadUsuarioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
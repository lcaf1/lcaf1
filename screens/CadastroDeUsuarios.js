import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

function CadUsuarioScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text h4>nome</Text>
        <Input  placeholder='nome'/>
        <Text h4>cpf</Text>
        <Input  placeholder='cpf'/>
        <Text h4>e-mail</Text>
        <Input  placeholder='email'/>
        <Text h4>senha</Text>
        <Input  placeholder='senha'/>
        <Button title="salvar" />
      </View>
    );
  }


export default CadUsuarioScreen;
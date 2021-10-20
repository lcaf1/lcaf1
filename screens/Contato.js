import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

function ContatoScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text h4>nome</Text>
        <Input  placeholder='nome'/>
        <Text h4>e-mail</Text>
        <Input  placeholder='email'/>
        <Text h4>telefone</Text>
        <Input  placeholder='telefone'/>
        <Button title="salvar" />
      </View>
    );
  }


export default ContatoScreen;
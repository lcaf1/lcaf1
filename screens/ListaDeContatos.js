import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem, Avatar } from 'react-native-elements'


const list = [
  {
    name: 'Amy Farha',
    //avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    //avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

function ContatosScreen({ navigation }) {
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          icon={
            <Icon
              name="arrow-left"
              size={15}
              color="white"
            />
          }
          iconRight
          title="Button with right icon"
          onPress={() => navigation.navigate("CadUsuario")}
          />
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{uri: l.avatar_url}} />
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                  <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
          ))
        }
      </View>
    );
  }

  

export default ContatosScreen;
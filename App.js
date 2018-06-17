

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import { Button, Icon, Container, Content, Card, CardItem, Input, Item, Header } from 'native-base';
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#62B1F6' }} >
          <Text style={styles.heade}>KUSUR-AT</Text>
        </Header>
        <Content contentContainerStyle={styles.contain}>
          <Card style={styles.container}>
            <CardItem style={{ backgroundColor: 'rgb(244, 244, 244)' }}>

              <Text>İSİM</Text>

            </CardItem>
            <CardItem style={{ backgroundColor: 'rgb(244, 244, 244)' }} >

              <Icon style={styles.containe} name='person' />
            </CardItem>
          </Card>

        </Content>
        <Content>
          <Item rounded style={styles.welcome}>
            <Icon active name='person' />
            <Input placeholder='Kullanıcı Adı' />
          </Item>


          <Button style={{ marginTop: 10 }} info block rounded onPress={this.sk}>
            <Text style={{ color: 'white', fontSize: 20 }}>CONFİRM</Text>
            <Icon name='wine' style={{ color: 'red' }} />
          </Button>
        </Content>

      </Container >
    );
  }
  sk = () => {
    Alert.alert('button click');
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 250,
    width: 250,
    alignItems: 'center',
    backgroundColor: 'rgb(244, 244, 244)'

  },
  contain: {
    justifyContent: 'center',
    alignItems: 'center'

  },
  containe: {
    width: null,
    fontSize: 150,
    color: 'blue',
    textAlign: 'center',


  },
  welcome: {
    backgroundColor: 'rgb(244, 244, 244)',
    marginTop: 25

  },
  heade: {
    textAlign: "center",
    color: 'white',
    fontSize: 30
  }
});

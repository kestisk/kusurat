

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, Image } from 'react-native';
import { Button, Icon, Container, Content, Card, CardItem, Input, Item, Header, Body, Title, Left } from 'native-base';
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { text1: "KULLANICI ADI" };
  }
  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>
        <Header style={{ backgroundColor: '#62B1F6' }} >
          <Left></Left>
          <Body><Title style={styles.heade}>KÜSUR-AT</Title></Body>
        </Header>
        <Content>
          <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: 10, marginBottom: 10 }}>{this.state.text1}</Text>
          <Card style={{ height: 240, width: 240, backgroundColor: 'grey', alignSelf: 'center', alignItems: 'center' }}>
            <Image style={{ height: 200, width: 200, alignSelf: 'center', marginTop:10 }} source={require('./image/kedicik.jpeg')} />
          </Card>


          <Item rounded style={styles.welcome}>
            <Icon active name='person' />
            <Input maxLength={12} onChangeText={(text1) => this.setState({ text1 })} placeholder='Kullanıcı Adı' />
          </Item>


          <Button style={{ marginTop: 10, alignSelf: 'center' }} info rounded onPress={this.sk}>
            <Icon name='arrow-forward' style={{ color: 'white' }} />
          </Button>



        </Content>

      </Container >
    );
  }
  sk = () => {
    this.props.navigation.navigate('Classes');
  }
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: 220,
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black'
  },
  contain: {
    alignItems: 'center'


  },
  containe: {
    backgroundColor: 'rgb(244, 244, 244)',


  },
  welcome: {
    backgroundColor: 'rgb(244, 244, 244)',
    marginTop: 25

  },
  heade: {
    textAlign: "center",
    color: 'white',
    fontSize: 30,
    padding: 5
  }
});

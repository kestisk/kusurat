

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView, ImageBackground } from 'react-native';
import { BackHandler } from 'react-native';


export default class Ebob_ekokPage extends Component {
  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    this.props.navigation.navigate('Main_eight');
    return true;
  }


  render() {
    return (
      <ImageBackground source={require("../image/galaxy.jpg")} style={{ width: '100%', height: '100%' }}>
        <Header style={{ backgroundColor: "rgb(56,65,104)" }}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={this.back}>
              <Icon style={{ color: "rgb(142,163,226)", fontSize: 40 }} type="FontAwesome" name="angle-left" />
            </Button>
          </Left>
          <Body style={{ flex: 5 }}>
            <Title style={styles.heade}>KÜSUR-AT</Title>
          </Body>
        </Header>

        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Button style={{ marginTop: 15 }} block rounded onPress={this.EBOB}><Text style={styles.buttontext}>EBOB</Text></Button>
          <Button style={{ marginTop: 15 }} block rounded onPress={this.EKOK}><Text style={styles.buttontext}>EKOK</Text></Button>
          <Button style={{ marginTop: 15 }} block rounded onPress={this.prime}><Text style={styles.buttontext}>ARALARINDA ASAL</Text></Button>

        </View>


      </ImageBackground >
    );
  }
  back = () => {
    this.props.navigation.navigate("Main_eight");
  };
  EBOB = () => {
    this.props.navigation.navigate("EbobPages");
  };

  EKOK = () => {
    this.props.navigation.navigate("EkokPages");
  };
  prime = () => {
    this.props.navigation.navigate("Ebob_Ekok_PrimeTabPages");
  };

}

const styles = StyleSheet.create({
  heade: {
    textAlign: "center",
    color: "rgb(142,163,226)",
    fontSize: 30,
    padding: 5
  },
  footerbtn: {
    marginLeft: 5,
    backgroundColor: "rgb(56,65,104)"
  },
  footerbtnmain: {

    backgroundColor: "rgb(56,65,104)"
  },
  footertxt: {
    color: "rgb(142,163,226)",
    fontSize: 30
  },
  buttontext: {
    textAlign: "center",
    color: 'white',
    padding: 5,
    fontSize: 20,
  }
});
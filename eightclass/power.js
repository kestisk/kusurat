

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
import { BackHandler } from 'react-native';


export default class Power extends Component {
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
      <Container>
        <Header style={{ backgroundColor: "#62B1F6" }}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={this.back}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 5 }}>
            <Title style={styles.heade}>KÜSUR-AT</Title>
          </Body>
        </Header>
        <Content style={{ padding: 10, }}>
          <Button style={{ marginTop: 15 }} info block rounded onPress={this.basic}><Text style={styles.buttontext}>TEMEL KURALLAR</Text></Button>
          <Button style={{ marginTop: 15 }} info block rounded onPress={this.getpow}><Text style={styles.buttontext}>KUVVET ALMA</Text></Button>
          <Button style={{ marginTop: 15 }} info block rounded onPress={this.findpow}><Text style={styles.buttontext}>KUVVET BULMA</Text></Button>
          <Button style={{ marginTop: 15 }} info block rounded onPress={this.showdecimal}><Text style={styles.buttontext}>ONDALIK GÖSTERİM ÇÖZÜMLEME</Text></Button>
          <Button style={{ marginTop: 15 }} info block rounded onPress={this.showscience}><Text style={styles.buttontext}>BİLİMSEL GÖSETERİM</Text></Button>
        </Content>

      </Container>
    );
  }
  back = () => {
    this.props.navigation.navigate("Main_eight");
  };

  basic = () => {
    this.props.navigation.navigate("Pow_BasictabPages");
  };

  findpow = () => {
    this.props.navigation.navigate("Pow_findpowtabPages");
  };
  getpow = () => {
    this.props.navigation.navigate("Pow_getpowtabPages");
  };

  showdecimal = () => {
    this.props.navigation.navigate("Pow_showdecimaltabPages");
  };

  showscience = () => {
    this.props.navigation.navigate("Pow_showsciencetabPages");
  };


}

const styles = StyleSheet.create({
  heade: {
    textAlign: "center",
    color: "white",
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

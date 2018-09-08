

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
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
      <Container>
        <Header style={{ backgroundColor: "#62B1F6" }}>
          <Left>
            <Button transparent onPress={this.back}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.heade}>KÜSUR-AT</Title>
          </Body>
        </Header>
        <Content style={{ padding: 10, }}>
          <Button style={{ marginTop: 15 }} info block rounded onPress={this.EBOB}><Text style={styles.buttontext}>EBOB</Text></Button>
          <Button style={{ marginTop: 15 }} info block rounded onPress={this.EKOK}><Text style={styles.buttontext}>EKOK</Text></Button>
          <Button style={{ marginTop: 15 }} info block rounded onPress={this.prime}><Text style={styles.buttontext}>ARALARINDA ASAL</Text></Button>
        </Content>

      </Container>
    );
  }
  back = () => {
    this.props.navigation.navigate("Main_eight");
  };
  EBOB = () => {
    this.props.navigation.navigate("EbobTabPages");
  };

  EKOK = () => {
    this.props.navigation.navigate("EkokTabPages");
  };
  prime = () => {
    this.props.navigation.navigate("Ebob_Ekok_PrimeTabPages");
  };

}

const styles = StyleSheet.create({
  heade: {
    textAlign: "center",
    color: 'white',
    fontSize: 30,
    padding: 5
  },
  buttontext: {
    textAlign: "center",
    color: 'white',
    padding: 5,
    fontSize: 20,
  }
});

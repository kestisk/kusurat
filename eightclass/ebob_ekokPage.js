

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title, Fab } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView, ImageBackground, BackHandler, TouchableWithoutFeedback } from 'react-native';
import Choose from "./choose";

export default class Ebob_ekokPage extends Choose {
  constructor(props) {
    super(props)
    this.state = { active: "none", opa: 1 };
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.destroy = this.destroy.bind(this);
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

  destroy = () => {
    this.setState({ active: "none", opa: 1 })


  }
  choosing = (subject) => {
    this.setState({ active: "flex", opa: 0.4 })
    this.choosefonk(subject);

  }


  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.destroy()}>
        <Container>
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
            alignItems: 'center', flexDirection: "column", opacity: this.state.opa

          }}>










            <Button block rounded style={{ marginTop: 18, height: 60, backgroundColor: "rgb(60,207,207)" }} onPress={() => this.choosing("EbobPages")}>
              <Text style={styles.buttontext}>EBOB</Text></Button>

            <Button block rounded style={{ marginTop: 18, height: 60, backgroundColor: "rgb(60,207,207)" }} onPress={() => this.choosing("EkokPages")}>
              <Text style={styles.buttontext}>EKOK</Text></Button>



            <Button block rounded style={{ marginTop: 18, height: 60, backgroundColor: "rgb(60,207,207)" }} onPress={() => this.choosing("Ebob_Ekok_PrimeTabPages")}>
              <Text style={styles.buttontext}>ARALARINDA ASAL</Text></Button>






          </View>




          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: "absolute",
            marginTop: '50%',
            marginLeft: '20%'
          }}>

            <View style={{ display: this.state.active }}>
              {this.hiddenbutton()}
            </View>

          </View>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
  back = () => {
    this.props.navigation.navigate("Main_eight");
  };
  EBOB = () => {
    this.props.navigation.navigate("EbobPages");
  };

  EKOK = () => {
    this.props.navigation.navigate("chosess");
  };
  prime = () => {
    this.props.navigation.navigate("Ebob_Ekok_PrimeTabPages");
  };

}

const styles = StyleSheet.create({
  heade: {
    textAlign: "center",
    color: "rgb(142,163,226)",
    fontSize: 25,
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
    color: "white",
    padding: 5,
    fontSize: 20
  }
});
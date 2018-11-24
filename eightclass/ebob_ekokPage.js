

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title, Fab } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView, ImageBackground, BackHandler, TouchableWithoutFeedback } from 'react-native';


export default class Ebob_ekokPage extends Component {
  constructor(props) {
    super(props)
    this.state = { active: "none", active2: "none", opa: 1 };
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
  at = () => {
    if (this.state.active == "none") {
      this.setState({ active: "flex", opa: 0.4 })
    }
    else {
      this.setState({ active: "none", opa: 1 })
    }
  }
  at2 = () => {
    if (this.state.active2 == "none") {
      this.setState({ active2: "flex", opa: 0.4 })
    }
    else {
      this.setState({ active2: "none", opa: 1 })
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.at2}>
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









            <View style={{ marginLeft: 20, flexDirection: "row" }}  >
              <Button bordered rounded style={{ borderColor: "black" }} onPress={this.at2}><Icon style={{ fontSize: 40, color: "green" }} name="star" /></Button>
              <Text style={{ fontSize: 30, color: "black", marginLeft: 50 }}>EBOB</Text>
            </View>




          </View>




          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: "absolute",
            marginTop: '50%',
            marginLeft: '20%'
          }}>

            <View style={{
              display: this.state.active2
            }}>




              <Button rounded style={{ backgroundColor: 'red', marginBottom: 10 }}>
                <Icon type="EvilIcons" name="pencil" /><Text style={{ color: "white", width: 150 }}>Asistan</Text>
              </Button>
              <Button rounded style={{ backgroundColor: 'red', marginBottom: 10 }}>
                <Icon type="EvilIcons" name="chart" /><Text style={{ color: "white", width: 150 }}>Kendini Dene</Text>
              </Button>
              <Button rounded disabled style={{ backgroundColor: 'red', marginBottom: 10 }}>
                <Icon type="EvilIcons" name="sc-youtube" /><Text style={{ color: "white", width: 150 }}>Videoya Git</Text>
              </Button>


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
    marginLeft: 50,
    textAlign: "center",
    color: 'white',
    padding: 5,
    fontSize: 20,
  }
});
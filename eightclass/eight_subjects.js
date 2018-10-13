import React, { Component } from "react";
import {
  Container,
  Button,
  Text,
  Header,
  Left,
  Body,
  Title,
  Icon,
  View
} from "native-base";
import { BackHandler, ImageBackground, View } from "react-native";
import { StyleSheet } from "react-native";

export default class Eight extends Component {
  constructor(props) {
    super(props);
    this.state = { truee: true }
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  handleBackButtonClick() {
    this.props.navigation.navigate("Classes");
    return true;
  }
  render() {
    return (
<<<<<<< HEAD
      <Container >
        <Header style={{ backgroundColor: "#62B1F6" }}>
          <Left>
=======
      <ImageBackground source={require("../image/galaxy.jpg")} style={{ width: '100%', height: '100%' }}>
        <Header style={{ backgroundColor: "rgb(56,65,104)", height: 50 }}>
          <Left style={{ flex: 1 }}>
>>>>>>> refs/remotes/origin/kusurat
            <Button transparent onPress={this.back}>
              <Icon style={{ color: "rgb(142,163,226)", fontSize: 40 }} type="FontAwesome" name="angle-left" />
            </Button>

          </Left>

          <Body style={{ flex: 5 }}>
            <Title style={styles.heade}>KÜSUR-AT</Title>
          </Body>

        </Header>
<<<<<<< HEAD

        <View>
          <Button
            style={{ marginTop: 15 }}
            info
=======
        <View style={{ flex: 1, justifyContent: "center", flexDirection: "column", padding: 10 }}>
          <Button
            style={{ marginTop: 15, height: 60 }}

>>>>>>> refs/remotes/origin/kusurat
            block
            rounded
            onPress={this.rollingNumber}
          >
            <Text style={styles.buttontext}>Sayı Yuvarlama</Text>
          </Button>
          <Button
<<<<<<< HEAD
            style={{ marginTop: 15 }}
            info
=======
            style={{ marginTop: 15, height: 60 }}

>>>>>>> refs/remotes/origin/kusurat
            rounded
            block
            onPress={this.multips}>
            <Text style={styles.buttontext}>ÇARPANLAR & KATLAR</Text>
          </Button>
          <Button
<<<<<<< HEAD
            style={{ marginTop: 15 }}
            info
=======
            style={{ marginTop: 15, height: 60 }}

>>>>>>> refs/remotes/origin/kusurat
            rounded
            block
            onPress={this.ebob_ekok}>
            <Text style={styles.buttontext}>EBOB & EKOK</Text>
          </Button>
          <Button
<<<<<<< HEAD
            style={{ marginTop: 15 }}
            info
            block
            rounded
            onPress={this.pow}
            disabled={this.state.truee}
          >
            <Text style={styles.buttontext}>ÜSLÜ SAYILAR</Text>
          </Button>
        </View>
      </Container>
=======
            style={{ marginTop: 15, height: 60 }}

            block
            rounded
            onPress={this.pow}>
            <Text style={styles.buttontext}>ÜSLÜ SAYILAR</Text>
          </Button>
        </View>
      </ImageBackground >
>>>>>>> refs/remotes/origin/kusurat
    );
  }
  back = () => {
    this.props.navigation.navigate("Classes");
  };
  pow = () => {
    this.props.navigation.navigate("powers");
  };
  ebob_ekok = () => {
    this.props.navigation.navigate("ebob_ekokPages");
  };
  multips = () => {
    this.props.navigation.navigate("MultipPages");
  };
  rollingNumber = () => {
    this.props.navigation.navigate("rollingNumberPages");
  };
}
const styles = StyleSheet.create({
  heade: {
    textAlign: "center",
    color: "rgb(142,163,226)",
    fontSize: 30,
    padding: 5
  },
  buttontext: {
    textAlign: "center",
    color: "white",
    padding: 5,
    fontSize: 20
  }
});

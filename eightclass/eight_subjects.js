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
import { BackHandler } from "react-native";
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
      <Container >
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

        <View>
          <Button
            style={{ marginTop: 15 }}
            info
            block
            rounded
            onPress={this.rollingNumber}
          >
            <Text style={styles.buttontext}>Sayı Yuvarlama</Text>
          </Button>
          <Button
            style={{ marginTop: 15 }}
            info
            rounded
            block
            onPress={this.multips}>
            <Text style={styles.buttontext}>ÇARPANLAR & KATLAR</Text>
          </Button>
          <Button
            style={{ marginTop: 15 }}
            info
            rounded
            block
            onPress={this.ebob_ekok}>
            <Text style={styles.buttontext}>EBOB & EKOK</Text>
          </Button>
          <Button
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
    color: "white",
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

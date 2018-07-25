import React, { Component } from "react";
import {
  Container,
  Button,
  Text,
  Header,
  Left,
  Body,
  Title
} from "native-base";
import { BackHandler } from "react-native";
import { StyleSheet } from "react-native";

export default class Eight extends Component {
  constructor(props) {
    super(props);
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
      <Container>
        <Header style={{ backgroundColor: "#62B1F6" }}>
          <Left />
          <Body>
            <Title style={styles.heade}>KÜSUR-AT</Title>
          </Body>
        </Header>
        <Button style={{ marginTop: 15 }} info block rounded onPress={this.pow}>
          <Text style={styles.buttontext}>ÜSLÜ SAYILAR</Text>
        </Button>
        <Button
          style={{ marginTop: 15 }}
          info
          rounded
          block
          onPress={this.root}
        >
          <Text style={styles.buttontext}>KÖKLÜ SAYILAR</Text>
        </Button>
      </Container>
    );
  }
  pow = () => {
    this.props.navigation.navigate("powers");
  };
  root = () => {
    this.props.navigation.navigate("roots");
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

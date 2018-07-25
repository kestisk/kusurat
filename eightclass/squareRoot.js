import React, { Component } from "react";
import { Container, Text } from "native-base";
import { Platform } from "react-native";
import { BackHandler } from "react-native";

export default class Squreroots extends Component {
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
    this.props.navigation.navigate("Main_eight");
    return true;
  }

  render() {
    return (
      <Container>
        <Text>sk</Text>
      </Container>
    );
  }
}

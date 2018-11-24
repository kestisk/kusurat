import React, { Component } from "react";
import { Text, StyleSheet, Image, Animated, ImageBackground } from "react-native";
import {
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Toast,
  Body,
  Title,
  CardItem,
  Card,
  Item,
  Grid,
  Col,
  View
} from "native-base";
import Anime from "./Ani";

export default class Classes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disablebtnflag: true
    }
  }
  render() {
    return (
      <ImageBackground source={require("./image/galaxy.jpg")} style={{ width: '100%', height: '100%' }}>
        <Header style={{ backgroundColor: "rgb(56,65,104)", height: 50 }}>


          <Body style={{ alignItems: "center", alignSelf: "center" }}>
            <Title style={styles.header}>KÜSUR-AT</Title>
          </Body>

        </Header>
        <View style={{ flex: 1, justifyContent: "center", flexDirection: "column", padding: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <Anime></Anime>
          </View>
          <Button
            style={{ marginTop: 10, height: 60 }}

            block
            rounded
            onPress={this.git4}
            disabled={this.state.disablebtnflag}
          >
            <Icon style={{ color: "white", fontSize: 40 }} type="EvilIcons" name="star" />
            <Text style={styles.heade}>4.SINIF</Text>
          </Button>
          <Button
            style={{ marginTop: 10, height: 60 }}

            block
            rounded
            onPress={this.git5}
            disabled={this.state.disablebtnflag}
          >
            <Icon style={{ color: "white", fontSize: 40 }} type="EvilIcons" name="paperclip" />
            <Text style={styles.heade}>5.SINIF</Text>
          </Button>
          <Button
            style={{ marginTop: 10, height: 60 }}

            block
            rounded
            onPress={this.git6}
            disabled={this.state.disablebtnflag}
          >
            <Icon style={{ color: "white", fontSize: 40 }} type="EvilIcons" name="bell" />
            <Text style={styles.heade}>6.SINIF</Text>
          </Button>
          <Button
            style={{ marginTop: 10, height: 60 }}

            block
            rounded
            onPress={this.git7}
            disabled={this.state.disablebtnflag}
          >
            <Icon style={{ color: "white", fontSize: 40 }} type="EvilIcons" name="minus" />
            <Text style={styles.heade}>7.SINIF</Text>
          </Button>
          <Button
            style={{ marginTop: 10, height: 60 }}

            block
            rounded
            onPress={this.git8}
          >
            <Icon style={{ color: "white", fontSize: 40 }} type="EvilIcons" name="trophy" />
            <Text style={styles.heade}>8.SINIF</Text>
          </Button>

        </View>
      </ImageBackground >
    );
  }

  git4 = () => {
    this.props.navigation.navigate("Dort");
  };
  git5 = () => {
    this.props.navigation.navigate("Five");
  };
  git6 = () => {
    this.props.navigation.navigate("Six");
  };
  git7 = () => {
    this.props.navigation.navigate("Seven");
  };
  git8 = () => {
    this.props.navigation.navigate("Sekiz");
  };
}
const styles = StyleSheet.create({
  heade: {
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontSize: 30,
    padding: 5
  },
  header: {
    textAlign: "center",
    color: "rgb(142,163,226)",
    fontSize: 30,
    padding: 5
  }
});

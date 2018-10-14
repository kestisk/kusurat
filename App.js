import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert, Image } from "react-native";
import {
  Button,
  Icon,
  Container,
  Content,
  Card,
  CardItem,
  Input,
  Item,
  Header,
  Body,
  Title,
  Left
} from "native-base";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { text1: "" };
  }
  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
        <Header style={{ backgroundColor: "rgb(56,65,104)", height: 50 }}>


          <Body style={{ alignItems: "center", alignSelf: "center" }}>
            <Title style={styles.heade}>KÜSUR-AT</Title>
          </Body>

        </Header>
        <Content>
          <Text
            style={{
              fontSize: 20,
              alignSelf: "center",
              marginTop: 10,
              marginBottom: 10
            }}
          >
            {this.state.text1}
          </Text>
          <Card
            style={{
              height: 300,
              width: 240,

              alignSelf: "center",

              alignItems: "center"
            }}
          >
            <Image
              style={{
                height: 300,
                width: 240,


              }}
              source={require("./image/astro.jpg")}
            />
          </Card>

          <Item rounded style={styles.welcome}>

            <Input
              maxLength={15}
              onChangeText={text1 => this.setState({ text1 })}
              placeholder="Kullanıcı Adı"
            />
            <Icon onPress={this.sk} style={{ fontSize: 60, alignSelf: "center", color: "rgb(56,65,104)" }} name="key" />
          </Item>


        </Content>
      </Container>
    );
  }
  sk = () => {
    this.props.navigation.navigate("Classes");
  };
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    width: 220,
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "black"
  },
  contain: {
    alignItems: "center"
  },
  containe: {
    backgroundColor: "rgb(244, 244, 244)"
  },
  welcome: {
    backgroundColor: "rgb(244, 244, 244)",
    marginTop: 25,
    paddingLeft: 20,
    height: 60
  },
  heade: {
    textAlign: "center",
    color: "rgb(142,163,226)",
    fontSize: 30,
    padding: 5
  }
});

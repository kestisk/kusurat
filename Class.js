import React, { Component } from "react";
import { Text, StyleSheet, Image, Animated } from "react-native";
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
  }
  render() {
    return (
      <Container style={{ backgroundColor: "white", flex: 5 }}>
        <Header style={{ backgroundColor: "#62B1F6" }}>
          <Left>
            <Button transparent onPress={this.at}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.heade}>KÜSUR-AT</Title>
          </Body>
        </Header>
        <Content style={{ padding: 20 }}>
          <Button
            style={{ marginTop: 10 }}
            info
            block
            rounded
            onPress={this.git4}
          >
            <Text style={styles.heade}>4.SINIF</Text>
          </Button>
          <Button
            style={{ marginTop: 10 }}
            info
            block
            rounded
            onPress={this.git5}
          >
            <Text style={styles.heade}>5.SINIF</Text>
          </Button>
          <Button
            style={{ marginTop: 10 }}
            info
            block
            rounded
            onPress={this.git6}
          >
            <Text style={styles.heade}>6.SINIF</Text>
          </Button>
          <Button
            style={{ marginTop: 10 }}
            info
            block
            rounded
            onPress={this.git7}
          >
            <Text style={styles.heade}>7.SINIF</Text>
          </Button>
          <Button
            style={{ marginTop: 10 }}
            info
            block
            rounded
            onPress={this.git8}
          >
            <Text style={styles.heade}>8.SINIF</Text>
          </Button>

            </Container >
        );
    }
    git4 = () => {
          this.props.navigation.navigate('Dort');
        };
    git5 = () => {
          this.props.navigation.navigate('Five');
        };
    git6 = () => {
          this.props.navigation.navigate('Main');
        };
    git7 = () => {
          this.props.navigation.navigate('Main');
        };
     git8 = () => {
          this.props.navigation.navigate("Sekiz");
        };
      
    toas = () => {
          Toast.show({
            text: "Wrong password!",
            buttonText: "Okay",
            position: "bottom"
          });
        }
    }
const styles = StyleSheet.create({
          heade: {
          textAlign: "center",
        color: "white",
        fontSize: 30,
        padding: 5
      }
    });

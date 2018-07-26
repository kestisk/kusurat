import React, { Component } from "react";
import {
  Container,
  Content,
  Button,
  Header,
  Left,
  Icon,
  Body,
  Title,
  Item,
  Input,
  Label,
  Footer,
  Badge,
  FooterTab,
  Row
} from "native-base";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  ScrollView
} from "react-native";
import { BackHandler } from "react-native";

export default class rollingNumberPage extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  componentDidMount() { }
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
    this.props.navigation.navigate("MainFour_Orientation");
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
        <Content style={{ padding: 10 }}>
          <Item>
            <Label>Username</Label>
          </Item>
          <View style={{ flexDirection: "row" }}>
            <Button
              style={{ marginTop: 15 }}
              info
              rounded
              onPress={this.closeTen}
            >
              <Text style={styles.buttontext}>En Yakın Onluğa</Text>
            </Button>
            <Button
              style={{ marginTop: 15 }}
              info
              rounded
              onPress={this.closeHund}
            >
              <Text style={styles.buttontext}>En Yakın Yüzlüğe</Text>
            </Button>
          </View>
        </Content>
        <Footer>
          <Button info rounded>
            <Icon name="person" />
          </Button>
          <Button info rounded>
            <Icon name="camera" />
          </Button>
          <Button info rounded>
            <Icon active name="navigate" />
          </Button>
          <Button info rounded>
            <Icon name="person" />
          </Button>
          <Button info rounded>
            <Icon name="person" />
          </Button>

          <Button info rounded>
            <Icon name="person" />
          </Button>
        </Footer>
        <Footer>
          <Button info rounded>
            <Icon name="person" />
          </Button>
          <Button info rounded>
            <Icon name="camera" />
          </Button>
          <Button info rounded>
            <Icon active name="navigate" />
          </Button>
          <Button info rounded>
            <Icon name="person" />
          </Button>
          <Button info rounded>
            <Icon name="person" />
          </Button>

          <Button info rounded>
            <Icon name="person" />
          </Button>
        </Footer>
      </Container>
    );
  }
  back = () => {
    this.props.navigation.navigate("MainFour_Orientation");
  };
  closeTen = () => { };
  closeHund = () => { };
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

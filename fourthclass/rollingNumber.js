import React, { Component } from "react";
import {
  Container,
  Content,
  Button,
  Header,
  Left,
  Body,
  Title,
  Item,
  Input,
  Label,
  Footer,
  Badge,
  FooterTab,
  Row,
  Icon
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
//import Icon from "react-native-vector-icons/dist/MaterialIcons";

export default class rollingNumberPage extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = { message: "", number: "2345", one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", zero: "0" }
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
  delete() {
    this.setState({ message: "sie" });
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
            <Text>{this.state.number[2]}</Text>
          </Item>
          <Item>
            <Text>{this.state.message}</Text>
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
          <Button info rounded onPress={(number) =>
            (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.one) }) : this.delete()} >
            <Icon type="MaterialIcons" name="filter-1" />
          </Button>
          <Button info rounded onPress={(number) => this.setState({ number: (this.state.number + this.state.two) })} >
            <Icon type="MaterialIcons" name="filter-2" />
          </Button>
          <Button info rounded onPress={(number) => this.setState({ number: (this.state.number + this.state.three) })} >
            <Icon type="MaterialIcons" name="filter-3" />
          </Button>
          <Button info rounded onPress={(number) => this.setState({ number: (this.state.number + this.state.four) })} >
            <Icon type="MaterialIcons" name="filter-4" />
          </Button>
          <Button info rounded onPress={(number) => this.setState({ number: (this.state.number + this.state.five) })} >
            <Icon type="MaterialIcons" name="filter-5" />
          </Button>
        </Footer>
        <Footer>
          <Button info rounded onPress={(number) => this.setState({ number: (this.state.number + this.state.six) })} >
            <Icon type="MaterialIcons" name="filter-6" />
          </Button>
          <Button info rounded onPress={(number) => this.setState({ number: (this.state.number + this.state.seven) })} >
            <Icon type="MaterialIcons" name="filter-7" />
          </Button>
          <Button info rounded onPress={(number) => this.setState({ number: (this.state.number + this.state.eight) })} >
            <Icon type="MaterialIcons" name="filter-8" />
          </Button>
          <Button info rounded onPress={(number) => this.setState({ number: (this.state.number + this.state.nine) })} >
            <Icon type="MaterialIcons" name="filter-9" />
          </Button>
          <Button info rounded onPress={(number) => this.setState({ number: (this.state.number + this.state.zero) })} >
            <Icon type="MaterialIcons" name="exposure-zero" />
          </Button>
          <Button info rounded onPress={(number) => this.setState({ number: this.state.number.slice(0, -1) })} >

            <Icon type="MaterialIcons" name="keyboard-arrow-left" />
          </Button>
        </Footer>
      </Container >
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

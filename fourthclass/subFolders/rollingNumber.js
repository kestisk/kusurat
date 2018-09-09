import React, { Component } from 'react';
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
import Aniforrol from "../../Aniforroll";
import rollingNumberTYS from "./rollingNumberTYS"

//import Icon from "react-native-vector-icons/dist/MaterialIcons";

export default class RollingNumberPage extends Component {
  constructor(props) {

    super(props);
    this.state = { message: "", number: "2345", one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", zero: "0" }
  }
  warn() {
    this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
  }
  render() {
    return (
      <Container>
        <Content style={{ padding: 10 }}>
          <Item>
            <Text style={{ fontSize: 30 }}>{this.state.number}</Text>
          </Item>
          <Item>
            <Text>{this.state.message}</Text>
          </Item>
          <View style={{ flexDirection: "row", zIndex: 2 }}>
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
          <View style={{ marginTop: 0, height: 1500 }}>
            <Aniforrol ref="Aniforrol"></Aniforrol>
          </View>
        </Content>


        <Footer>
          <Button info rounded onPress={(number) =>
            (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.one) }) : this.warn()} >
            <Icon type="MaterialIcons" name="filter-1" />
          </Button>
          <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.two) }) : this.warn()} >
            <Icon type="MaterialIcons" name="filter-2" />
          </Button>
          <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.three) }) : this.warn()} >
            <Icon type="MaterialIcons" name="filter-3" />
          </Button>
          <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.four) }) : this.warn()} >
            <Icon type="MaterialIcons" name="filter-4" />
          </Button>
          <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.five) }) : this.warn()} >
            <Icon type="MaterialIcons" name="filter-5" />
          </Button>
        </Footer>
        <Footer>
          <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.six) }) : this.warn()} >
            <Icon type="MaterialIcons" name="filter-6" />
          </Button>
          <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.seven) }) : this.warn()} >
            <Icon type="MaterialIcons" name="filter-7" />
          </Button>
          <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.eight) }) : this.warn()} >
            <Icon type="MaterialIcons" name="filter-8" />
          </Button>
          <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.nine) }) : this.warn()} >
            <Icon type="MaterialIcons" name="filter-9" />
          </Button>
          <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.zero) }) : this.warn()} >
            <Icon type="MaterialIcons" name="exposure-zero" />
          </Button>
          <Button info rounded onPress={(number) => this.setState({ number: this.state.number.slice(0, -1), message: "" })} >

            <Icon type="MaterialIcons" name="keyboard-arrow-left" />
          </Button>
        </Footer>
      </Container >
    )
  }



  back = () => {
    this.props.navigation.navigate("MainFour_Orientation");
  };
  closeTen = () => {
    this.refs.Aniforrol.bigornot(this.state.number);
  };
  closeHund = () => {

    this.setState({ number: this.state.number.length })
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

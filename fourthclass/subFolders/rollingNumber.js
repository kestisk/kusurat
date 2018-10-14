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
  Icon,
  Text
} from "native-base";
import {
  Platform,
  StyleSheet,

  View,
  Alert,
  Image,
  ScrollView,
  ImageBackground
} from "react-native";
import Aniforrol from "../../Aniforroll";
import rollingNumberTYS from "./rollingNumberTYS"

//import Icon from "react-native-vector-icons/dist/MaterialIcons";

export default class RollingNumberPage extends Component {
  constructor(props) {

    super(props);
    this.state = {
      message: "", number: "2355", one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", zero: "0",
      footdsp: "flex"
    }

  }
  warn() {
    this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
  }
  keybort(variable) {
    if (this.state.flagg == true) {
      this.setState({ number: variable.toString(), disable: false, flagg: false, numberarray: [""], numberarrayshow: [""], });




    }

    else {
      if (this.state.number.length < 4) {
        this.setState({
          number: (this.state.number + variable.toString())
        });
      }
      else {
        this.warn();
      }

    }
  }
  render() {
    return (
      <ImageBackground source={require("../../image/galaxy.jpg")} style={{ width: '100%', height: '100%' }}>
        <Container>
          <Content style={{ padding: 10 }}>
            <Item>
              <Text style={{ fontSize: 30, color: "white" }}>{this.state.number}</Text>
            </Item>
            <Item>
              <Text>{this.state.message}</Text>
            </Item>
            <View style={{ flexDirection: "row", zIndex: 2 }}>
              <Button
                style={styles.footerbtnmain}

                rounded
                onPress={this.closeTen}
              >

                <Text style={styles.footertxt}>10'luk</Text>
              </Button>


            </View>
            <View style={{ marginTop: 0, height: 1500 }}>
              <Aniforrol ref="Aniforrol"></Aniforrol>
            </View>
          </Content>


          <Footer style={{ backgroundColor: null, display: this.state.footdsp }}>

            <Button style={styles.footerbtnmain} rounded onPress={() => { this.keybort(1) }} >
              <Text style={styles.footertxt}>1</Text>
            </Button>
            <Button style={styles.footerbtn} rounded onPress={() => { this.keybort(2) }} >
              <Text style={styles.footertxt}>2</Text>
            </Button>
            <Button style={styles.footerbtn} rounded onPress={() => { this.keybort(3) }} >
              <Text style={styles.footertxt}>3</Text>
            </Button>
            <Button style={styles.footerbtn} rounded onPress={() => { this.keybort(4) }} >
              <Text style={styles.footertxt}>4</Text>
            </Button>
            <Button style={styles.footerbtn} rounded onPress={() => { this.keybort(5) }} >
              <Text style={styles.footertxt}>5</Text>
            </Button>

          </Footer>
          <Footer style={{ backgroundColor: null, display: this.state.footdsp }}>
            <Button style={styles.footerbtnmain} rounded onPress={() => { this.keybort(6) }} >
              <Text style={styles.footertxt}>6</Text>
            </Button>
            <Button style={styles.footerbtn} rounded onPress={() => { this.keybort(7) }} >
              <Text style={styles.footertxt}>7</Text>
            </Button>
            <Button style={styles.footerbtn} rounded onPress={() => { this.keybort(8) }} >
              <Text style={styles.footertxt}>8</Text>
            </Button>
            <Button style={styles.footerbtn} rounded onPress={() => { this.keybort(9) }} >
              <Text style={styles.footertxt}>9</Text>
            </Button>
            <Button style={styles.footerbtn} rounded onPress={() => { this.keybort(0) }} >
              <Text style={styles.footertxt}>0</Text>
            </Button>
            <Button style={styles.footerbtn} rounded onPress={this.clean} >

              <Icon style={styles.footertxt} name='trash' />
            </Button>

          </Footer>

        </Container >
      </ImageBackground >

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
  footerbtn: {
    marginLeft: 5,
    backgroundColor: "rgb(56,65,104)"
  },
  footerbtnmain: {

    backgroundColor: "rgb(56,65,104)"
  },
  footertxt: {
    color: "rgb(142,163,226)",
    fontSize: 30
  },
  buttontext: {
    textAlign: "center",
    color: "white",
    padding: 5,
    fontSize: 20
  }
});

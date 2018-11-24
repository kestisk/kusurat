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
  Text,
  Right
} from "native-base";
import {
  Platform,
  StyleSheet,
  BackHandler,
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
      footdsp: "flex",
      footdsp2: "none"
    }

  }
  clean = () => {
    this.setState({
      message: "", number: "", one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", zero: "0",
      footdsp: "flex",
      footdsp2: "none"
    })
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
          <Header style={{ backgroundColor: "rgb(56,65,104)", height: 50 }}>
            <Left style={{ flex: 1 }}>
              <Button transparent onPress={this.back}>
                <Icon style={{ color: "rgb(142,163,226)", fontSize: 40 }} type="FontAwesome" name="angle-left" />
              </Button>
            </Left>

            <Body style={{ flex: 4 }}>
              <Title style={styles.heade}>SAYI YUVARLAMA</Title>
            </Body>
            <Right style={{ flex: 1 }}>
              <Button transparent onPress={this.tys}>
                <Icon style={{ color: "rgb(142,163,226)", fontSize: 30 }} type="FontAwesome" name="edit" />
              </Button>
            </Right>
          </Header>
          <Content style={{ padding: 10 }}>
            <Item>
              <Text style={{ fontSize: 30, color: "white" }}>{this.state.number}</Text>
            </Item>
            <Item>
              <Text style={{ color: "white" }}>{this.state.message}</Text>
            </Item>
            <View style={{ flexDirection: "row", zIndex: 2 }}>
              <Button
                style={styles.footerbtnmain}

                rounded
                onPress={() => { this.closeTen() }}
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

              <Icon style={styles.footertxt} name='backspace' />
            </Button>

          </Footer>
          <Footer style={{ backgroundColor: null, display: this.state.footdsp2 }}>
            <Button style={styles.footerbtn} rounded onPress={this.open} >
              <Text style={styles.footertxt} >KLAVYE</Text>

            </Button>
          </Footer>
        </Container >
      </ImageBackground >

    )
  }
  open = () => {
    this.setState({ footdsp: "flex", footdsp2: "none" });
  }
  tys = () => {
    this.props.navigation.navigate("four_roll_closeTenPages");

  }
  componentWillUnmount() {

    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }
  componentWillMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }
  handleBackButtonClick = () => {
    this.props.navigation.navigate("Main_eight");
    return true;
  }
  back = () => {
    this.props.navigation.navigate("Main_eight");
  };
  closeTen() {
    if (this.state.number == "" || this.state.number == 0) {
      this.setState({ message: "Lütfen Sayı Giriniz" })
    }
    else {
      this.setState({ footdsp: "none", footdsp2: "flex" });

      this.refs.Aniforrol.bigornot(this.state.number);
    }



  };

  closeHund = () => {

    this.setState({ number: this.state.number.length })
  };

}
const styles = StyleSheet.create({
  heade: {
    textAlign: "center",
    color: "rgb(142,163,226)",
    fontSize: 25,
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

import React, { Component } from "react";
import {
  Container,
  Content,
  Button,
  Header,
  Left,
  Icon,
  Body,
  Title
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

export default class Four extends Component {
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
      <ScrollView>
        <Header style={{ backgroundColor: "rgb(98,177,246)" }}>
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
          <Button
            style={{ marginTop: 15 }}
            info
            block
            rounded
            onPress={this.stepAnalysis}
          >
            <Text style={styles.buttontext}>Basamak Çözümleme</Text>
          </Button>
          <Button
            style={{ marginTop: 15 }}
            info
            block
            rounded
            onPress={this.rollingNumber}
          >
            <Text style={styles.buttontext}>Sayı Yuvarlama</Text>
          </Button>
          <Button
            style={{ marginTop: 15 }}
            info
            block
            rounded
            onPress={this.pattern}
          >
            <Text style={styles.buttontext}>Örüntü</Text>
          </Button>
          <Button
            style={{ marginTop: 15 }}
            info
            block
            rounded
            onPress={this.ranking}
          >
            <Text style={styles.buttontext}>Doğal Sayılarda Sıralama</Text>
          </Button>
          <Button
            style={{ marginTop: 15 }}
            info
            block
            rounded
            onPress={this.naturalNumPRoc}
          >
            <Text style={styles.buttontext}>Doğal Sayılarda Dört İşlem</Text>
          </Button>
          <Button
            style={{ marginTop: 15 }}
            info
            block
            rounded
            onPress={this.measure}
          >
            <Text style={styles.buttontext}>Ölçme ve Tartma</Text>
          </Button>
          <Button
            style={{ marginTop: 15 }}
            info
            block
            rounded
            onPress={this.fraction}
          >
            <Text style={styles.buttontext}>Kesirler</Text>
          </Button>
          <Button
            style={{ marginTop: 15 }}
            info
            block
            rounded
            onPress={this.decimalFrac}
          >
            <Text style={styles.buttontext}>Ondalık Kesirler</Text>
          </Button>
          <Button
            style={{ marginTop: 15 }}
            info
            block
            rounded
            onPress={this.logical}
          >
            <Text style={styles.buttontext}>Tahmin ve Zihinden İşlemler</Text>
          </Button>
          <Button
            style={{ marginTop: 15 }}
            info
            block
            rounded
            onPress={this.probability}
          >
            <Text style={styles.buttontext}>Olasılık</Text>
          </Button>
        </Content>
      </ScrollView>
    );
  }
  back = () => {
    this.props.navigation.navigate("Classes");
  };
  probability = () => {
    this.props.navigation.navigate("probPage");
  };
  measure = () => {
    this.props.navigation.navigate("measurePages");
  };
  fraction = () => {
    this.props.navigation.navigate("fractionPages");
  };
  decimalFrac = () => {
    this.props.navigation.navigate("decimalFracPages");
  };
  logical = () => {
    this.props.navigation.navigate("logicalPages");
  };
  stepAnalysis = () => {
    this.props.navigation.navigate("stepAnalysisPages");
  };
  naturalNumPRoc = () => {
    this.props.navigation.navigate("naturalNumPages");
  };
  rollingNumber = () => {
    this.props.navigation.navigate("rollingNumberPages");
  };
  pattern = () => {
    this.props.navigation.navigate("Pattern_TabPages");
  };
  ranking = () => {
    this.props.navigation.navigate("Ranking_TabPages");
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

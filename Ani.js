import React, { Component } from "react";
import Classes from "./Class";
import { AppRegistry, StyleSheet, Text, View, Animated } from "react-native";

const dizi1 = ["L", "Ü", "T", "F", "E", "N", "", "", "", ""];
const dizi2 = ["S", "I", "N", "I", "F", "I", "N", "I", "Z", "I"];
const dizi3 = ["S", "E", "Ç", "İ", "N", "İ", "Z", "", "", ""];

class Anime extends Component {
  constructor() {
    super();
    this.animasyonDegeri = [];

    dizi1.map((item, x) => {
      this.animasyonDegeri[x] = new Animated.Value(0);
    });
    dizi2.map((item, x) => {
      this.animasyonDegeri[x] = new Animated.Value(0);
    });
    dizi3.map((item, x) => {
      this.animasyonDegeri[x] = new Animated.Value(0);
    });
  }

  componentDidMount() {
    this.animate(dizi1);
    this.animate(dizi2);
    this.animate(dizi3);
  }

  animate(dizi) {
    const animasyonlar = dizi.map((item, x) => {
      return Animated.timing(this.animasyonDegeri[x], {
        toValue: 1,
        duration: 100
      });
    });
    Animated.sequence(animasyonlar).start();
  }

  render() {
    const animasyonla1 = dizi1.map((a, i) => {
      return (
        <Animated.Text
          key={i}
          style={{
            opacity: this.animasyonDegeri[i],
            height: 30,
            fontSize: 25,
            marginLeft: 3,
            color: "red",
            marginTop: 3
          }}
        >
          <Text>{a}</Text>
        </Animated.Text>
      );
    });
    const animasyonla2 = dizi2.map((a, i) => {
      return (
        <Animated.Text
          key={i}
          style={{
            opacity: this.animasyonDegeri[i],
            height: 30,
            fontSize: 25,
            marginLeft: 3,
            color: "red",
            marginTop: 3
          }}
        >
          <Text>{a}</Text>
        </Animated.Text>
      );
    });
    const animasyonla3 = dizi3.map((a, i) => {
      return (
        <Animated.Text
          key={i}
          style={{
            opacity: this.animasyonDegeri[i],
            height: 30,
            fontSize: 25,
            marginLeft: 3,
            color: "red",
            marginTop: 3
          }}
        >
          <Text>{a}</Text>
        </Animated.Text>
      );
    });

    return (
      <View style={{ flexDirection: "column" }}>
        <View style={styles.container}>{animasyonla1}</View>
        <View style={styles.container}>{animasyonla2}</View>
        <View style={styles.container}>{animasyonla3}</View>
      </View>
    );
  }
}
export default class Yol extends Component {
  render() {
    return (
      <View>
        <Anime />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  }
});

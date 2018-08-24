import React, { Component } from "react";
import {
  AppRegistry,
  Animated,
  Easing,
  View,
  TouchableHighlight
} from "react-native";
import { Button, Text, TabHeading } from "native-base";

export default class aniforrol extends Component {
  constructor(props) {
    super(props);
    this.state = { number: "", at: "3456", one: "1", five: "5", eigth: "8" };

    this.animasyonDegeri1 = new Animated.Value(0);
    this.animasyonDegeri2 = new Animated.Value(0);
    this.animasyonDegeri3 = new Animated.Value(0);
  }

  play() {
    this.animasyonDegeri1.setValue(0);
    this.animasyonDegeri2.setValue(0);
    this.animasyonDegeri3.setValue(0);
    const doanimate = function (value, duration, easing, delay = 0) {
      return Animated.timing(value, {
        toValue: 1,
        duration,
        easing,
        delay
      });
    };

    doanimate(this.animasyonDegeri3, 500, Easing.ease).start(this.dos);
    Animated.sequence([
      doanimate(this.animasyonDegeri1, 2000, Easing.ease, 1500),
      doanimate(this.animasyonDegeri2, 1000, Easing.ease, 1000)
    ]).start(this.doinne);
  }
  dos = () => {
    this.at = this.setState({ at: (this.state.five + this.state.eigth) });
    // this.setState({ at: this.at });
  };
  doinne = () => {
    if (this.state.eigth > 5) {
      this.setState({ eigth: "9" });
    } else {
      this.setState({ eigth: "7" });
    }
  };
  sil = () => {

    this.setState({ at: this.state.at.slice(0, -1) });
  };
  render() {
    const scaleText = this.animasyonDegeri1.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 4]
    });
    const spinText = this.animasyonDegeri2.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "720deg"]
    });
    const introButton = this.animasyonDegeri3.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 200]
    });
    return (
      <View style={{ marginTop: 100, alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <Animated.View
            style={{
              top: introButton,
              transform: [{ scale: scaleText }, { rotate: spinText }]
            }}
          >
            <Text
              onPress={this.doinne}
              style={{ position: "relative", fontSize: 30 }}
            >
              {this.state.at}
            </Text>
          </Animated.View>
          <Animated.View
            style={{
              top: introButton,
              transform: [{ scale: scaleText }]
            }}
          >
            <Text style={{ fontSize: 30 }} />
          </Animated.View>
          <Animated.View
            style={{
              transform: [{ rotate: spinText }]
            }}
          >
            <Text style={{ fontSize: 50 }} />
          </Animated.View>
        </View>
        <View>
          <Button onPress={this.play.bind(this)}>
            <Text>basss</Text>
          </Button>
          <Button onPress={(at) => this.setState({ at: (this.state.at + this.state.five) })}>
            <Text>val</Text>
          </Button>
          <Button onPress={(at) => this.setState({ at: (this.state.at + this.state.eigth) })}>
            <Text>val2</Text>
          </Button>
          <Button onPress={this.sil}>
            <Text>sil</Text>
          </Button>
        </View>
      </View>
    );
  }
}

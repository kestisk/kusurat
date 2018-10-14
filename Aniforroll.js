import React, { Component } from "react";
import {
  AppRegistry,
  Animated,
  Easing,
  View,
  TouchableHighlight
} from "react-native";
import { Button, Text, TabHeading } from "native-base";

class Aniforrol extends Component {
  constructor(props) {
    super(props);
    this.state = { num: "", at: "", one: "", five: "5", ss: "0", len: "", bors: "", inf: "" };
    this.animationbigger = new Animated.Value(0);
    this.animasyonDegeri1 = new Animated.Value(0);
    this.animasyonDegeri2 = new Animated.Value(0);
    this.animasyonDegeri3 = new Animated.Value(0);
    this.fade = new Animated.Value(0);
  }
  bigornot(number) {
    this.setState({ num: "", at: "", one: "", five: "5", ss: "0", len: "", bors: "", inf: "" });
    this.animationbigger.setValue(0);
    this.fade.setValue(0);
    this.animasyonDegeri1.setValue(0);
    const doanimate2 = function (value, duration, easing, delay = 0) {
      return Animated.timing(value, {
        toValue: 1,
        duration,
        easing,
        delay
      });
    };

    leng = number.length;

    this.setState({ one: number[leng - 1] });
    if (parseInt(number[leng - 1]) >= 5) {
      this.setState({ inf: "sayı bir sonraki onluğa yuvarlansın" });
      this.setState({ bors: ">=5" });
    }

    else {
      this.setState({ bors: "<5" });
      this.setState({ inf: "sayı bir önceki onluğa yuvarlansın" });
    }

    // this.setState({ ss: this.len })
    //   this.setState({ ss: this.state.five });
    Animated.sequence([
      doanimate2(this.animationbigger, 1000, Easing.ease),
      doanimate2(this.animasyonDegeri1, 3000, Easing.ease)

    ])
      .start(this.sil);
    setTimeout(function () {
      this.play(number);
    }.bind(this), 4000);
  }

  play(number) {
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

    doanimate(this.animasyonDegeri3, 500, Easing.ease, 1000).start(this.dos(number));
    Animated.sequence([
      doanimate(this.fade, 3000, Easing.ease),
      doanimate(this.animasyonDegeri1, 2000, Easing.ease, 1500),
      doanimate(this.animasyonDegeri2, 1000, Easing.ease, 1000)

    ]).start(this.doinne);
  }
  dene() {
    this.at = this.setState({ at: "123" })
  }
  dos(number) {
    this.setState({ at: number });
    // this.setState({ at: this.at });
  };
  doinne = () => {
    len = this.state.at.length;

    let sezer = [... this.state.at]
    if (this.state.at[len - 1] >= 5) {

      sezer[len - 2] = parseInt(sezer[len - 2]) + parseInt(1);
      sezer[len - 1] = "0";
      this.setState(sezer);

      this.setState({ at: sezer });

    } else {
      sezer[len - 1] = "0";
      this.setState(sezer);

      this.setState({ at: sezer });
    }
  };
  sil = () => {

    this.setState({ one: "", bors: "" });
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
      outputRange: [0, 150]
    });
    const intro = this.animationbigger.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 50]
    });
    return (
      <View style={{ marginTop: 1, alignItems: "center" }}>
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

              style={{ position: "relative", color: "white", fontSize: 30 }}
            >
              {this.state.at}
            </Text>
          </Animated.View>
          <Animated.View
            style={{
              transform: [{ rotate: spinText }]
            }}
          >
            <Text style={{ fontSize: 50 }} />
          </Animated.View>
          <Animated.View
            style={{
              top: intro,
              transform: [{ scale: scaleText }]
            }}
          >
            <Text style={{ color: "white" }}>{this.state.one}{this.state.bors}</Text>
          </Animated.View>

        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', width: 250, height: 50 }}>
          <Animated.View                 // Special animatable View
            style={{
              ...this.props.style,
              opacity: this.fade,         // Bind opacity to animated value
            }}
          >
            <Text style={{ fontSize: 28, textAlign: 'center', margin: 20, color: "red" }}>{this.state.inf}</Text>
          </Animated.View>

        </View>
      </View>
    );
  }
}
export default Aniforrol;


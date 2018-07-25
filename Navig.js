import react, { Component } from "react";
import { createSwitchNavigator } from "react-navigation";
import App from "./App";
import Classes from "./Class";
import Anime from "./Ani";
import four_Orientation from "./fourthclass/four_Orientation";
import power from "./eightclass/power";
import eight_Ori from "./eightclass/eight_Orientation";

const Navi = createSwitchNavigator({
  Main: {
    screen: App
  },
  Classes: {
    screen: Classes
  },
  Animation: {
    screen: Anime
  },
  Dort: {
    screen: four_Orientation
  },
  Sekiz: {
    screen: eight_Ori
  }
});
export default Navi;

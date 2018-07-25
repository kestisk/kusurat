import react, { Component } from "react";
import { createSwitchNavigator } from "react-navigation";
import Eight from "./eight_subjects";
import power from "./power";
import Squreroots from "./squareRoot";

const eight_Ori = createSwitchNavigator({
  Main_eight: {
    screen: Eight
  },
  powers: {
    screen: power
  },
  roots: {
    screen: Squreroots
  }
});
export default eight_Ori;

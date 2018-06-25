import react, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';
import App from './App';
import Classes from './Class';
import Anime from './Ani';

const Navi = createSwitchNavigator({
    Main: {
        screen: App,


    },
    Classes: {
        screen: Classes,
    },
    Animation: {
        screen: Anime,
    }
})
export default Navi;


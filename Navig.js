import react, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';
import App from './App';
import Classes from './Class';

const Navi = createSwitchNavigator({
    Main: {
        screen: App,


    },
    Classes: {
        screen: Classes,
    }
})
export default Navi;


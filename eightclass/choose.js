import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title, Fab } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView, ImageBackground, BackHandler, TouchableWithoutFeedback } from 'react-native';
import Ebob_ekokPage from './ebob_ekokPage';


export default class Choose extends Component {
    constructor(props) {
        super(props)
        this.state = { active: "none", navig: "" };
        //  this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    hiddenorvisible = (num) => {
        this.setState({ active: num, opa: 1 })
    }
    choosefonk = (way) => {

        this.setState({ navig: way })

        debugger;
    }
    asistant = () => {
        this.props.navigation.navigate(this.state.navig);
    };

    hiddenbutton() {

        return (
            <View>
                <Button onPress={this.asistant} rounded style={{ backgroundColor: 'rgb(255,114,91)', marginBottom: 10 }}>
                    <Icon type="EvilIcons" name="pencil" /><Text style={{ color: "white", width: 150, fontSize: 18, fontWeight: "bold" }}>Asistan</Text>
                </Button>
                <Button onPress={() => this.choose(2)} rounded style={{ backgroundColor: 'rgb(255,114,91)', marginBottom: 10 }}>
                    <Icon type="EvilIcons" name="chart" /><Text style={{ color: "white", width: 150, fontSize: 18, fontWeight: "bold" }}>Kendini Dene</Text>
                </Button>
                <Button onPress={() => this.choose(3)} rounded disabled style={{ backgroundColor: 'rgb(255,114,91)', marginBottom: 10 }}>
                    <Icon type="EvilIcons" name="sc-youtube" /><Text style={{ color: "white", width: 150, fontSize: 18, fontWeight: "bold" }}>Videoya Git</Text>
                </Button>
            </View>
        )
    };
    render() {

    }
}
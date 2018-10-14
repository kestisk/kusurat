

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title, Text, Right } from 'native-base';
import { Platform, StyleSheet, View, Alert, Image, ScrollView, ImageBackground, BackHandler } from 'react-native';


export default class MultipPage extends Component {
    constructor(props) {
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.props.navigation.navigate('Main_eight');
        return true;
    }


    render() {
        return (
            <ImageBackground source={require("../image/galaxy.jpg")} style={{ width: '100%', height: '100%' }}>

                <Header style={{ backgroundColor: "rgb(56,65,104)", height: 50 }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={this.back}>
                            <Icon style={{ color: "rgb(142,163,226)", fontSize: 40 }} type="FontAwesome" name="angle-left" />
                        </Button>

                    </Left>
                    <Body style={{ flex: 5 }}>
                        <Title style={styles.heade}>KÜSUR-AT</Title>
                    </Body>

                </Header>


                <View style={{ flex: 1, justifyContent: "center", flexDirection: "column", padding: 10 }}>
                    <Button style={{ marginTop: 15, height: 80, }} block rounded onPress={this.primeFac}><Text style={styles.buttontext}>ASAL ÇARPANALRA AYIRMA</Text></Button>
                    <Button style={{ marginTop: 15, height: 80 }} block rounded onPress={this.primeFacTree}><Text style={styles.buttontext}>ÇARPAN AĞACI</Text></Button>
                </View>




            </ImageBackground >
        );
    }
    back = () => {
        this.props.navigation.navigate("Main_eight");
    };

    primeFac = () => {
        this.props.navigation.navigate("primeFacPages");
    };

    primeFacTree = () => {
        this.props.navigation.navigate("primeFacTreePages");
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
        color: 'white',
        padding: 5,
        fontSize: 22,
    }
});



import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
import { BackHandler } from 'react-native';


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
            <Container>
                <Header style={{ backgroundColor: "#62B1F6" }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={this.back}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body style={{ flex: 5 }}>
                        <Title style={styles.heade}>KÜSUR-AT</Title>
                    </Body>
                </Header>
                <Content style={{ padding: 10, }}>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.primeFac}><Text style={styles.buttontext}>ASAL ÇARPANALRA AYIRMA</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.primeFacTree}><Text style={styles.buttontext}>ÇARPAN AĞACI</Text></Button>
                </Content>

            </Container>
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
        color: "white",
        fontSize: 30,
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
        fontSize: 20,
    }
});

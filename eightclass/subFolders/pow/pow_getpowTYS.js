

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView, BackHandler, ImageBackground } from 'react-native';
import { TYS } from './pow_basic3';


export default class Pow_getpowTYS extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <ImageBackground source={require("../../../image/galaxy.jpg")} style={{ width: '100%', height: '100%' }} >
                <Container>
                    <Header style={{ backgroundColor: "rgb(56,65,104)", height: 50 }}>
                        <Left style={{ flex: 1 }}>
                            <Button transparent onPress={this.back}>
                                <Icon style={{ color: "rgb(142,163,226)", fontSize: 40 }} type="FontAwesome" name="angle-left" />
                            </Button>
                        </Left>
                        <Body style={{ flex: 4 }}>
                            <Title style={styles.heade}>KENDİNİ DENE</Title>
                        </Body>

                    </Header>
                    <Content >
                        <View style={{ minHeight: 350, width: '100%', backgroundColor: "white", flexDirection: "column" }}>
                            <TYS></TYS>
                        </View>
                    </Content>

                </Container>
            </ImageBackground>
        );
    }
    componentWillMount() {
        BackHandler.addEventListener(
            "hardwareBackPress",
            this.handleBackButtonClick
        );
    }
    handleBackButtonClick = () => {
        this.props.navigation.navigate("powers");
        return true;
    }
    back = () => {
        this.props.navigation.navigate("Pow_getpowPages");
    };
}

const styles = StyleSheet.create({
    heade: {
        textAlign: "center",
        color: "rgb(142,163,226)",
        fontSize: 25,
        padding: 5
    },
    buttontext: {
        textAlign: "center",
        color: 'white',
        padding: 5,
        fontSize: 20,
    }
});

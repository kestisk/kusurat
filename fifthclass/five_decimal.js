

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
import { BackHandler } from 'react-native';


export default class Five_Decimal extends Component {
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
        this.props.navigation.navigate('Mainfive');
        return true;
    }


    render() {
        return (
            <Container syle={{ backgroundColor: 'white', flex: 5 }}>
                <Header style={{ backgroundColor: "rgb(98,177,246)" }}>
                    <Left>
                        <Button transparent onPress={this.back}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.heade}>KÜSUR-AT</Title>
                    </Body>
                </Header>
                <Content style={{ padding: 10, }} >
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.decFragComa}><Text style={styles.buttontext}>Virgül ile Yazma</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.addsub}><Text style={styles.buttontext}>Toplama/Çıkarma</Text></Button>
                </Content>

            </Container>
        );
    }
    decFragComa = () => {
        this.props.navigation.navigate('Five_decfrac_decFragComaPages');
    }
    addsub = () => {
        this.props.navigation.navigate('Five_dec_addsubs');
    }
    back = () => {
        this.props.navigation.navigate("Mainfive");
    };
}

const styles = StyleSheet.create({
    heade: {
        textAlign: "center",
        color: 'white',
        fontSize: 30,
        padding: 5
    },
    buttontext: {
        textAlign: "center",
        color: 'white',
        padding: 5,
        fontSize: 20,
    }
});

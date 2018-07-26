

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
import { BackHandler } from 'react-native';



export default class six_OrientationPage extends Component {
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
        this.props.navigation.navigate('Classes');
        return true;
    }
    render() {
        return (
            <ScrollView syle={{ backgroundColor: 'white', flex: 5 }}>
                <Header style={{ backgroundColor: '#62B1F6' }}><Left></Left>
                    <Body><Title style={styles.heade}>KÜSUR-AT</Title></Body>

                </Header>
                <Content style={{ padding: 10, }} >
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.multiliers}><Text style={styles.buttontext}>Çarpanlar ve Katlar</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.six_frac}><Text style={styles.buttontext}>Kesirler</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.rate}><Text style={styles.buttontext}>Oran Orantı</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.algebra}><Text style={styles.buttontext}>Cebir</Text></Button>
                </Content>

            </ScrollView>
        );
    }
    multiliers = () => {
        this.props.navigation.navigate('multipliers');
    }
    six_frac = () => {
        this.props.navigation.navigate('six_fractions');
    }
    rate = () => {
        this.props.navigation.navigate('rates');
    }
    algebra = () => {
        this.props.navigation.navigate('algebras');
    }
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

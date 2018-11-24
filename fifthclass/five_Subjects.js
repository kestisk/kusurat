

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
import { BackHandler } from 'react-native';



export default class Five extends Component {
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
                <Header style={{ backgroundColor: "#62B1F6" }}>
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
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.fraction}><Text style={styles.buttontext}>Kesirler</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.decimal}><Text style={styles.buttontext}>Ondalık Sayılar</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.area}><Text style={styles.buttontext}>Çevre ve Alan</Text></Button>
                </Content>

            </ScrollView>
        );
    }
    back = () => {
        this.props.navigation.navigate("Classes");
    };
    fraction = () => {
        this.props.navigation.navigate('Five_fractionPages');
    }
    area = () => {
        this.props.navigation.navigate('Five_Areas');
    }
    decimal = () => {
        this.props.navigation.navigate('Five_Decimals');
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

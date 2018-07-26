

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
import { BackHandler } from 'react-native';


export default class naturelNumPage extends Component {
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
        this.props.navigation.navigate('MainFour_Orientation');
        return true;
    }


    render() {
        return (
            <Container>
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
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.add}><Text style={styles.buttontext}>Toplama</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.sub}><Text style={styles.buttontext}>Çıkarma</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.mul}><Text style={styles.buttontext}>Çarpma</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.div}><Text style={styles.buttontext}>Bölme</Text></Button>
                </Content>

            </Container>
        );
    }
    back = () => {
        this.props.navigation.navigate("MainFour_Orientation");
    };
    add = () => {
        this.props.navigation.navigate('four_natural_add');
    }
    sub = () => {
        this.props.navigation.navigate('four_natural_sub');
    }
    mul = () => {
        this.props.navigation.navigate('four_natural_mul');
    }
    div = () => {
        this.props.navigation.navigate('four_natural_div');
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

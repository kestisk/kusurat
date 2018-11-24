

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
import { BackHandler } from 'react-native';


export default class seven_circlePage extends Component {
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
        this.props.navigation.navigate('seventh_ori');
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
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.seven_circle_rad}><Text style={styles.buttontext}>Çemberin Çevresi</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.seven_round_rad}><Text style={styles.buttontext}>Dairenin Çevresi</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.seven_round_area}><Text style={styles.buttontext}>Dairenin Alanı</Text></Button>
                </Content>

            </Container>
        );
    }
    back = () => {
        this.props.navigation.navigate("seventh_ori");
    };
    seven_circle_rad = () => {
        this.props.navigation.navigate('seven_circle_radPages');
    }
    seven_round_rad = () => {
        this.props.navigation.navigate('seven_round_radPages');
    }
    seven_round_area = () => {
        this.props.navigation.navigate('seven_round_areaPages');
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

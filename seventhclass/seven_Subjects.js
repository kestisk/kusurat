

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
import { BackHandler } from 'react-native';



export default class seventh_OrientationPage extends Component {
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
            <ScrollView>
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
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.intnum}><Text style={styles.buttontext}>Tam Sayılar</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.reasnum}><Text style={styles.buttontext}>Rasyonel Sayılar</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.percent}><Text style={styles.buttontext}>Yüzdeler</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.sevent_rate}><Text style={styles.buttontext}>Oran Orantı</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.seven_circle}><Text style={styles.buttontext}>Çember ve Daire</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.seven_equation}><Text style={styles.buttontext}>Denklem</Text></Button>
                </Content>

            </ScrollView>
        );
    }
    back = () => {
        this.props.navigation.navigate("Classes");
    };
    intnum = () => {
        this.props.navigation.navigate('seven_intnumPages');
    }
    reasnum = () => {
        this.props.navigation.navigate('seven_reasnumPages');
    }
    percent = () => {
        this.props.navigation.navigate('seven_percentPages');
    }
    sevent_rate = () => {
        this.props.navigation.navigate('seven_ratePages');
    }
    seven_circle = () => {
        this.props.navigation.navigate('seven_circlePages');
    }
    seven_equation = () => {
        this.props.navigation.navigate('seven_equationPages');
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

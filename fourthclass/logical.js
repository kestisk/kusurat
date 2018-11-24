

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
import { BackHandler } from 'react-native';


export default class logicalPage extends Component {
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
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.addlogic}><Text style={styles.buttontext}>Toplamı İşlemini Tahmin Et</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.addOpin}><Text style={styles.buttontext}>Zihinden Toplama</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.sublogic}><Text style={styles.buttontext}>Çıkarma İşlemini Tahmin Et</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.subOpin}><Text style={styles.buttontext}>Zihinden Çıkarma</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.mullogic}><Text style={styles.buttontext}>Çarpma İşlemini Tahmin Et</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.mulOpin}><Text style={styles.buttontext}>Zihinden Çarpma</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.divlogic}><Text style={styles.buttontext}>Bölme İşlemini Tahmin Et</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.divOpin}><Text style={styles.buttontext}>Zihinden Bölme</Text></Button>
                </Content>

            </Container>
        );
    }
    back = () => {
        this.props.navigation.navigate("MainFour_Orientation");
    };
    addlogic = () => {
        this.props.navigation.navigate('Addlogic_TabPages');
    }
    addOpin = () => {
        this.props.navigation.navigate('AddOpin_TabPages');
    }
    sublogic = () => {
        this.props.navigation.navigate('Sublogic_TabPages');
    }
    subOpin = () => {
        this.props.navigation.navigate('Subopin_TabPages');
    }
    mullogic = () => {
        this.props.navigation.navigate('Mullogic_TabPages');
    }
    mulOpin = () => {
        this.props.navigation.navigate('Mullopin_TabPages');
    }
    divlogic = () => {
        this.props.navigation.navigate('Divlogic_TabPages');
    }
    divOpin = () => {
        this.props.navigation.navigate('Divopin_TabPages');
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



import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
import { BackHandler } from 'react-native';


export default class measurePage extends Component {
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
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.MKAnews}><Text style={styles.buttontext}>Atatürkün Ölçme Birimindeki Yenilikleri</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.metre}><Text style={styles.buttontext}>Milimetre Santimetre Metre Kilometre</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.time}><Text style={styles.buttontext}>Zaman Birimleri</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.day}><Text style={styles.buttontext}>Yil Ay Hafta Gün</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.gram}><Text style={styles.buttontext}>Ton Kilogram Gram Miligram</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.long}><Text style={styles.buttontext}>Litre Mililitre</Text></Button>
                </Content>

            </Container>
        );
    }
    back = () => {
        this.props.navigation.navigate("MainFour_Orientation");
    };
    MKAnews = () => {
        this.props.navigation.navigate('Measure_MKAnews_TabPages');
    }
    metre = () => {
        this.props.navigation.navigate('Measure_metre_TabPages');
    }
    time = () => {
        this.props.navigation.navigate('Measure_time_TabPages');
    }
    day = () => {
        this.props.navigation.navigate('Measure_day_TabPages');
    }
    gram = () => {
        this.props.navigation.navigate('Measure_gram_TabPages');
    }
    long = () => {
        this.props.navigation.navigate('Measure_long_TabPages');
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

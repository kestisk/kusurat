

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
            <ScrollView syle={{ backgroundColor: 'white', flex: 5 }}>
                <Header style={{ backgroundColor: '#62B1F6' }}><Left></Left>
                    <Body><Title style={styles.heade}>KÜSUR-AT</Title></Body>

                </Header>
                <Content style={{ padding: 10, }} >
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.MKAnews}><Text style={styles.buttontext}>Atatürkün Ölçme Birimindeki Yenilikleri</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.metre}><Text style={styles.buttontext}>Milimetre Santimetre Metre Kilometre</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.time}><Text style={styles.buttontext}>Zaman Birimleri</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.day}><Text style={styles.buttontext}>Yil Ay Hafta Gün</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.gram}><Text style={styles.buttontext}>Ton Kilogram Gram Miligram</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.long}><Text style={styles.buttontext}>Litre Mililitre</Text></Button>
                </Content>

            </ScrollView>
        );
    }
    MKAnews = () => {
        this.props.navigation.navigate('four_measure_MKAnewsPages');
    }
    metre = () => {
        this.props.navigation.navigate('four_measure_metrePages');
    }
    time = () => {
        this.props.navigation.navigate('four_measure_timePages');
    }
    day = () => {
        this.props.navigation.navigate('four_measure_dayPages');
    }
    gram = () => {
        this.props.navigation.navigate('four_measure_gramPages');
    }
    long = () => {
        this.props.navigation.navigate('four_measure_longPages');
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

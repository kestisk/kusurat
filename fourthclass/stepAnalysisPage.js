

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
import { BackHandler } from 'react-native';


export default class stepAnalysisPage extends Component {
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
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.readNumber}><Text style={styles.buttontext}>Sayıların Okunuşu Ve Yazılışı</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.sValue}><Text style={styles.buttontext}>Basamak Değerleri</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.analys}><Text style={styles.buttontext}>Çözümleme     </Text></Button>

                </Content>

            </ScrollView>
        );
    }
    readNumber = () => {
        this.props.navigation.navigate('four_step_readNumberPages');
    }
    sValue = () => {
        this.props.navigation.navigate('four_step_stepValuePages');
    }
    analys = () => {
        this.props.navigation.navigate('four_step_analysisPages');
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

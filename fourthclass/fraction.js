

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
import { BackHandler } from 'react-native';


export default class fractionPage extends Component {
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
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.namedFrac}><Text style={styles.buttontext}>Kesirlerde İsimlendirme</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.showInQue}><Text style={styles.buttontext}>Kesirleri Sayı Doğrusunda Gösterme</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.rankingFrac}><Text style={styles.buttontext}>Kesirlerde Sıralama</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.subFrac}><Text style={styles.buttontext}>Kesirlerde Çıkarma</Text></Button>
                </Content>

            </Container>
        );
    }
    back = () => {
        this.props.navigation.navigate("MainFour_Orientation");
    };
    namedFrac = () => {
        this.props.navigation.navigate('Frac_named_TabPages');
    }
    showInQue = () => {
        this.props.navigation.navigate('Frac_showInQue_TabPages');
    }
    rankingFrac = () => {
        this.props.navigation.navigate('Frac_rankingFrac_TabPages');
    }
    subFrac = () => {
        this.props.navigation.navigate('Frac_subFrac_TabPages');
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

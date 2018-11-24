

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
import { BackHandler } from 'react-native';


export default class decimalFracPage extends Component {
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
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.decFragComa}><Text style={styles.buttontext}>Ondalık Kesirleri Virgül İle Yazma</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.decFragComeandComp}><Text style={styles.buttontext}>Ondalık Kesirlerin Virgül Kısmı Tam Kısmı</Text></Button>
                    <Button style={{ marginTop: 15 }} info block rounded onPress={this.decFargRanking}><Text style={styles.buttontext}>Ondalık Kesirlerde Sıralama</Text></Button>
                </Content>

            </Container>
        );
    }
    back = () => {
        this.props.navigation.navigate("MainFour_Orientation");
    };
    decFragComa = () => {
        this.props.navigation.navigate('Decfrac_decFragComa_TabPages');
    }
    decFragComeandComp = () => {
        this.props.navigation.navigate('Decfrac_decFragComeandComp_TabPages');
    }
    decFargRanking = () => {
        this.props.navigation.navigate('Decfrac_decFargRanking_TabPages');
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

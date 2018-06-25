
import React, { Component } from 'react';
import { Text, StyleSheet, Image, Animated } from 'react-native';
import {
    Button, Container, Content, Header, Icon, Left, Toast, Body, Title, CardItem, Card, Item, Grid, Col, View
} from 'native-base';
import Anime from './Ani';

export default class Classes extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Container style={{ backgroundColor: 'white', flex: 5 }}>
                <Header style={{ backgroundColor: '#62B1F6' }}><Left><Button transparent onPress={this.at}><Icon name='arrow-back' /></Button></Left>
                    <Body><Title style={styles.heade}>KÜSUR-AT</Title></Body>

                </Header>
                <Content style={{ padding: 20, }}>
                    <Button style={{ marginTop: 10 }} info block rounded onPress={() =>
                        Toast.show({
                            text: "Wrong password!",
                            buttonText: "Okay",
                            duration: 3000
                        })} ><Text style={styles.heade}>4.SINIF</Text></Button>
                    <Button style={{ marginTop: 10 }} info block rounded onPress={this.at}><Text style={styles.heade}>5.SINIF</Text></Button>
                    <Button style={{ marginTop: 10 }} info block rounded onPress={this.at}><Text style={styles.heade}>6.SINIF</Text></Button>
                    <Button style={{ marginTop: 10 }} info block rounded onPress={this.at}><Text style={styles.heade}>7.SINIF</Text></Button>
                    <Button style={{ marginTop: 10 }} info block rounded onPress={this.at}><Text style={styles.heade}>8.SINIF</Text></Button>

                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 150, width: 150, alignSelf: 'flex-start', marginTop: 20 }} source={require('./image/kedicik.jpeg')} />
                        <View style={{ flexDirection: 'column', marginTop: 20 }}>
                            <Anime> </Anime>


                        </View>

                    </View>





                </Content>

            </Container >
        );
    }
    at = () => {
        this.props.navigation.navigate('Main');
    };
    toas = () => {
        Toast.show({
            text: "Wrong password!",
            buttonText: "Okay",
            position: "bottom"
        });
    }
}
const styles = StyleSheet.create({
    heade: {
        textAlign: "center",
        color: 'white',
        fontSize: 30,
        padding: 5
    }
});

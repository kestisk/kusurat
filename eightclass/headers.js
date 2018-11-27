import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, Title, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Right, Button, Footer, Content } from 'native-base';
import { FlatList, StyleSheet, BackHandler, Navigator } from 'react-native';
export class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            at: "onur"
        }
    }
    back = () => {
        // this.props.navigation.navigate("Pow_findpowPages");
    };
    tys = () => {
        this.props.navigate.navigation("Pow_findpowPageTYS");
        // this.setState({ at:  });
    }
    render() {
        //const { navigate } = this.props.navigation;
        return (
            <Header style={{ backgroundColor: "rgb(56,65,104)", height: 50 }}>
                <Left style={{ flex: 1 }}>
                    <Button transparent onPress={this.back}>
                        <Icon style={{ color: "rgb(142,163,226)", fontSize: 40 }} type="FontAwesome" name="angle-left" />
                    </Button>
                </Left>
                <Body style={{ flex: 4 }}>
                    <Title style={styles.heade}>KUVVET BULMA{this.state.at}</Title>

                </Body>
                <Right style={{ flex: 1 }}>
                    <Button transparent onPress={() => this.props.navigate.navigation('Pow_findpowPages')}>
                        <Icon style={{ color: "rgb(142,163,226)", fontSize: 30 }} type="FontAwesome" name="edit" />
                    </Button>
                </Right>
            </Header >
        );
    }
}
const styles = StyleSheet.create({
    heade: {
        textAlign: "center",
        color: "rgb(142,163,226)",
        fontSize: 25,
        padding: 5
    },
    buttontext: {
        textAlign: "center",
        color: 'white',
        padding: 5,
        fontSize: 20,
    }
});
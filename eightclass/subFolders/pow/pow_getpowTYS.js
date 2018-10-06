

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
import At from './pow_basic3';


export default class Pow_getpowTYS extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <Container>
                <Content style={{ padding: 10, }}>
                    <At></At>
                </Content>

            </Container>
        );
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

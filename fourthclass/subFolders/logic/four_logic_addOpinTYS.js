

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
export default class Four_logic_addOpinPageTYS extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container>

                <Content style={{ padding: 10, }}>
                    <Button style={{ marginTop: 15 }} info block rounded ><Text style={styles.buttontext}>sayfa yapısı eksik</Text></Button>
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



import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView, BackHandler } from 'react-native';

export default class RollingNumberPageTYS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorboxs: [

                "black",
                "black",
                "black",
                "black",

            ],
            aa: "0", b: "1", c: "2", d: "3",
            aChoise: "A", leng: "10", bChoise: "B", cChoise: "C", dChoise: "D", rand: "125", ind: "0"
        };

    };

    change = () => {
        this.state.colorboxs[0] = "black";
        this.state.colorboxs[1] = "black";
        this.state.colorboxs[2] = "black";
        this.state.colorboxs[3] = "black";
        this.setState(this.state.colorboxs);
        let randnum = (Math.floor(Math.random() * 10000)).toString();
        index = (Math.ceil(Math.random() * 4));
        this.setState(() => ({ ind: index }));

        this.setState(() => ({ rand: randnum }));

        len = randnum.length;
        this.setState({ leng: len })

        let sezer = [...randnum]
        if (sezer[len - 1] >= 5) {

            sezer[len - 2] = parseInt(sezer[len - 2]) + parseInt(1);
            sezer[len - 1] = "0";
            sezer = sezer.reduce(function (accumulator, currentValue, currentIndex, array) {
                return accumulator + currentValue;
            });

            this.at(index, sezer);

        } else {
            sezer[len - 1] = "0";
            sezer = sezer.reduce(function (accumulator, currentValue, currentIndex, array) {
                return accumulator + currentValue;
            });

            this.at(index, sezer);
        }
    }

    at(index, sezer) {

        if (index == 1) {
            this.setState(() => ({ aChoise: sezer }));
            this.setState(() => ({ bChoise: parseInt(sezer) + 10 }));
            this.setState(() => ({ cChoise: parseInt(sezer) - 10 }));
            this.setState(() => ({ dChoise: parseInt(sezer) - 100 }));
        }
        else if (index == 2) {
            this.setState(() => ({ bChoise: sezer }));
            this.setState(() => ({ aChoise: parseInt(sezer) + 10 }));
            this.setState(() => ({ cChoise: parseInt(sezer) - 10 }));
            this.setState(() => ({ dChoise: parseInt(sezer) + 100 }));

        }
        else if (index == 3) {
            this.setState(() => ({ cChoise: sezer }));
            this.setState(() => ({ aChoise: parseInt(sezer) + 10 }));
            this.setState(() => ({ bChoise: parseInt(sezer) - 10 }));
            this.setState(() => ({ dChoise: parseInt(sezer) - 100 }));
        }
        else {
            this.setState(() => ({ dChoise: sezer }));
            this.setState(() => ({ aChoise: parseInt(sezer) + 10 }));
            this.setState(() => ({ bChoise: parseInt(sezer) - 10 }));
            this.setState(() => ({ cChoise: parseInt(sezer) + 100 }));
        }
    }
    control = (t) => {
        if (this.state.ind == t) {

            this.state.colorboxs[t - 1] = "rgb(34, 139, 34)";
            this.setState(this.state.colorboxs);
        }
        else {
            this.state.colorboxs[t - 1] = "red";
            this.setState(this.state.colorboxs);
        }
    }
    back = () => {
        this.props.navigation.navigate("rollingNumberPages");
    };
    render() {

        return (

            <Container>
                <Header style={{ backgroundColor: "rgb(56,65,104)", height: 50 }}>
                    <Left>
                        <Button transparent onPress={this.back}>
                            <Icon style={{ color: "rgb(142,163,226)", fontSize: 40 }} type="FontAwesome" name="angle-left" />
                        </Button>

                    </Left>

                    <Body>
                        <Title style={styles.heade}>KÜSUR-AT</Title>
                    </Body>

                </Header>
                <Content >
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flexDirection: "column", marginLeft: 40 }}>
                            <Button onPress={this.change} style={styles.buttonsty} dark >
                                <Text style={styles.buttontext}>TEKRAR</Text></Button>
                            <Text style={{ fontSize: 30, marginTop: 30 }}>{this.state.rand}</Text>

                            <Text style={{ fontSize: 30, marginTop: 30 }}>{this.state.leng}</Text>

                        </View>
                        <View style={{ flexDirection: "column", marginLeft: 80 }}>

                            <Button onPress={() => this.control(1)} style={[styles.buttonsty, { backgroundColor: this.state.colorboxs[this.state.aa] }]} dark >
                                <Text style={styles.buttontext}>{this.state.aChoise}</Text></Button>
                            <Button onPress={() => this.control(2)} style={[styles.buttonsty, { backgroundColor: this.state.colorboxs[this.state.b] }]} dark >
                                <Text style={styles.buttontext}>{this.state.bChoise}</Text></Button>
                            <Button onPress={() => this.control(3)} style={[styles.buttonsty, { backgroundColor: this.state.colorboxs[this.state.c] }]} dark >
                                <Text style={styles.buttontext}>{this.state.cChoise}</Text></Button>
                            <Button onPress={() => this.control(4)} style={[styles.buttonsty, { backgroundColor: this.state.colorboxs[this.state.d] }]} dark>
                                <Text style={styles.buttontext} >{this.state.dChoise}</Text></Button>
                        </View>
                    </View>
                </Content>

            </Container >

        );
    }
    componentWillUnmount() {

        BackHandler.removeEventListener(
            "hardwareBackPress",
            this.handleBackButtonClick
        );
    }
    componentWillMount() {
        BackHandler.addEventListener(
            "hardwareBackPress",
            this.handleBackButtonClick
        );
    }
    handleBackButtonClick = () => {
        this.props.navigation.navigate("Main_eight");
        return true;
    }
}

const styles = StyleSheet.create({
    heade: {
        textAlign: "center",
        color: "rgb(142,163,226)",
        fontSize: 30,
        padding: 5
    },
    buttonsty: {
        height: 100,
        width: 100,
        marginTop: 15,
        justifyContent: "center",


    },
    buttontext: {
        textAlign: "center",
        fontSize: 50,
        color: "white",

    }
});




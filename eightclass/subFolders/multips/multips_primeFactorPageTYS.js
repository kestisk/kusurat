

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView, Animated, FlatList, AsyncStorage } from 'react-native';
import { At, Multips_primeFactorPage } from './multips_primeFactorPage';
import EbobPage from "../ebob_ekok/ebobPage"




export default class Multips_primeFactorPageTYS extends At {
    constructor(props) {
        super(props)
        this.state = {
            numberTYS: "",
            numbershow: "",
            numberarrayTYS: [""],
            randnumberTYS: "10",
            Achoise: [{ storenumber: "", x: "", key: "" }],
            Bchoise: [{ storenumber: "", x: "", key: "" }],
            Cchoise: [{ storenumber: "", x: "", key: "" }],
            Dchoise: [{ storenumber: "", x: "", key: "" }],
            ind: "",
            colorboxs: [

                "black",
                "black",
                "black",
                "black",

            ],
            storePow: [{ storenumber: "", x: "", key: "" }],
            answer: [{ storenumber: "", x: "", keyA: "", keyB: "", keyC: "", keyD: "" }],
            storePow2: [],

            PowLastA: [],
            PowLastB: [],
            PowLastC: [],
            PowLastD: [],

        }


    }



    randomnum = () => {
        this.state.colorboxs[0] = "black";
        this.state.colorboxs[1] = "black";
        this.state.colorboxs[2] = "black";
        this.state.colorboxs[3] = "black";
        this.setState(this.state.colorboxs);

        randnum = 13;
        while (randnum % 2 != 0 && randnum % 3 != 0 && randnum % 5 != 0 && randnum % 7 != 0 && randnum % 11 != 0) {
            randnum = Math.floor(Math.random() * 1001) + 10;

        }
        this.setState({ randnumberTYS: randnum });
        index = (Math.ceil(Math.random() * 4));
        this.setState(() => ({ ind: index }));
        this.fill(1, randnum);

    }
    back = () => {
        this.props.navigation.navigate("primeFacPages");
    }
    async  fill(index, num) {
        await this.setState({

            PowLastA: [],
            PowLastB: [],
            PowLastC: [],
            PowLastD: [],
            answer: [{ storenumber: "", x: "", keyA: "", keyB: "", keyC: "", keyD: "" }],
            storePow2: [],
        })


        var retval = await this.justdivede(num);
        debugger;

        // const retval = this.justdivede(num);

        this.setState({ answer: retval });






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
        this.setState({
            Achoise: [{ storenumber: "", x: "", key: "" }],
            Bchoise: [{ storenumber: "", x: "", key: "" }],
            Cchoise: [{ storenumber: "", x: "", key: "" }],
            Dchoise: [{ storenumber: "", x: "", key: "" }],

        })
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "rgb(56,65,104)" }}>
                    <Left>
                        <Button transparent onPress={this.back}>
                            <Icon style={{ color: "rgb(142,163,226)", fontSize: 30 }} name="arrow-back" />
                        </Button>

                    </Left>

                    <Body>
                        <Title style={styles.heade}>KÜSUR-AT</Title>
                    </Body>

                </Header>
                <Content>
                    <View style={{ flexDirection: "column" }}>

                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 30 }}>{this.state.randnumberTYS}</Text>
                            <Button style={{ marginTop: 20 }} info onPress={this.randomnum}><Text>GETİR</Text></Button>
                        </View>
                        <View style={{ flexDirection: "column", marginLeft: 20, marginTop: 20 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Button style={{ height: 80, width: 120, backgroundColor: this.state.colorboxs[0] }} info onPress={() => this.control(1)}>
                                    <FlatList horizontal={true}
                                        data={this.state.answer}
                                        renderItem={({ item }) => {

                                            return (

                                                <View style={{ flexDirection: "row" }}>

                                                    <Text style={{ fontSize: 30, color: "red" }}>{item.storenumber}</Text>
                                                    <Text style={{ fontSize: 20, marginBottom: 20, color: "red" }}>{item.keyA}</Text>
                                                    <Text style={{ fontSize: 30, color: "red" }}>{item.x}</Text>
                                                </View>
                                            );

                                        }}
                                        keyExtractor={item => item.keyA}
                                        atA={this.state.PowLastA}
                                    />
                                </Button>
                                <Button style={{ height: 80, width: 120, marginLeft: 20, backgroundColor: this.state.colorboxs[1] }} info onPress={() => this.control(2)}
                                >
                                    <FlatList horizontal={true}
                                        data={this.state.answer}
                                        renderItem={({ item }) => {

                                            return (

                                                <View style={{ flexDirection: "row" }}>

                                                    <Text style={{ fontSize: 30, color: "red" }}>{item.storenumber}</Text>
                                                    <Text style={{ fontSize: 20, marginBottom: 20, color: "red" }}>{item.keyB}</Text>
                                                    <Text style={{ fontSize: 30, color: "red" }}>{item.x}</Text>
                                                </View>
                                            );

                                        }}
                                        keyExtractor={item => item.keyB}
                                        atB={this.state.PowLastB}
                                    />
                                </Button>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 20 }}>
                                <Button style={{ height: 80, width: 120, backgroundColor: this.state.colorboxs[2] }} info onPress={() => this.control(3)}>
                                    <FlatList horizontal={true}
                                        data={this.state.answer}
                                        renderItem={({ item }) => {

                                            return (

                                                <View style={{ flexDirection: "row" }}>

                                                    <Text style={{ fontSize: 30, color: "red" }}>{item.storenumber}</Text>
                                                    <Text style={{ fontSize: 20, marginBottom: 20, color: "red" }}>{item.keyC}</Text>
                                                    <Text style={{ fontSize: 30, color: "red" }}>{item.x}</Text>
                                                </View>
                                            );

                                        }}
                                        keyExtractor={item => item.keyC}
                                        atC={this.state.PowLastC}
                                    />
                                </Button>
                                <Button style={{ height: 80, width: 120, marginLeft: 20, backgroundColor: this.state.colorboxs[3] }} info onPress={() => this.control(4)}>
                                    <FlatList horizontal={true}
                                        data={this.state.answer}
                                        renderItem={({ item }) => {

                                            return (

                                                <View style={{ flexDirection: "row" }}>

                                                    <Text style={{ fontSize: 30, color: "red" }}>{item.storenumber}</Text>
                                                    <Text style={{ fontSize: 20, marginBottom: 20, color: "red" }}>{item.keyD}</Text>
                                                    <Text style={{ fontSize: 30, color: "red" }}>{item.x}</Text>
                                                </View>
                                            );

                                        }}
                                        keyExtractor={item => item.keyD}
                                        atD={this.state.PowLastD}
                                    />
                                </Button>
                            </View>
                        </View>

                    </View>


                </Content>

            </Container >
        );
    }

}

const styles = StyleSheet.create({
    heade: {
        textAlign: "center",
        color: "rgb(142,163,226)",
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

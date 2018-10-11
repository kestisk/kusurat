

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title, List, ListItem, Footer, Text, Card, CardItem } from 'native-base';
import {
    Platform, StyleSheet, View, Alert, Image, ScrollView, ListView, Animated,
    Easing, ImageBackground
} from 'react-native';
import { BackHandler } from 'react-native';


export default class PrimeFacTreePage extends Component {
    constructor(props) {
        super(props)

        this.animasyonDegeri = new Animated.Value(0);

        this.state = {
            numberarray: [
                { key: null, id: null, key2: null, id2: null, colorr: null },





            ],
            numberarrayshow: [
                { key: null, id: null, key2: null, id2: null, colorr: null },





            ],
            number: "100",
            one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", zero: "0",

        }
    }



    componentWillUnmount() {
        clearInterval(this.delayed);

    }
    keybort(variable) {
        if (this.state.flagg == true) {
            this.setState({ number: variable.toString(), numberarr: [""], array: [""], numberarrshow: [""], arrayshow: [""], flagg: false, storePow: [{ storenumber: "", x: "", key: "" }], storePow2: [""] });




        }

        else {
            if (this.state.number.length < 4) {
                this.setState({
                    number: (this.state.number + variable.toString())
                });
            }
            else {
                this.warn();
            }

        }
    }

    clean = () => {
        this.setState(() => ({ number: "", numberarray: [""], numberarrayshow: [""] }));
        this.animasyonDegeri.setValue(0);

    }
    tree = () => {
        clearInterval(this.delayed);
        this.animasyonDegeri.setValue(0);
        const doanimate = function (value, duration, easing, delay = 0) {
            return Animated.timing(value, {
                toValue: 1,
                duration,
                easing,
                delay
            });
        };
        doanimate(this.animasyonDegeri, 300, Easing.ease, 0).start();
        num = this.state.number;
        i = 2
        distance = 0;
        count = 0

        while (num > i) {
            if (num % i == 0) {
                num = num / i;

                count++;
                if (count % 2 == 0) {
                    mycolorr = "blue"
                }
                else {
                    mycolorr = "red"
                }



                if (this.state.numberarray.length < 5) {
                    distance += 50;

                    this.state.numberarray.push({ key2: num, key: i, id: 50, id2: distance, colorr: mycolorr });


                    this.setState(this.state.numberarray);

                }




                else if (this.state.numberarray.length == 5) {
                    distance += 50;
                    this.state.numberarray.push({ key2: i, key: num, id: 50, id2: distance, colorr: mycolorr });


                    this.setState(this.state.numberarray);
                }
                else if (this.state.numberarray.length >= 6 && this.state.numberarray.length < 10) {

                    distance -= 50;

                    this.state.numberarray.push({ key2: i, key: num, id: 50, id2: distance, colorr: mycolorr });


                    this.setState(this.state.numberarray);

                }
                else if (this.state.numberarray.length == 10) {

                    distance -= 50;

                    this.state.numberarray.push({ key2: num, key: i, id: 50, id2: distance, colorr: mycolorr });


                    this.setState(this.state.numberarray);

                }
                else {
                    distance += 50;
                    this.state.numberarray.push({ key2: num, key: i, id: 50, id2: distance, colorr: mycolorr });


                    this.setState(this.state.numberarray);

                }



            }
            else {
                i++;
            }

        }
        /*  for (i = 0; i < 4; i++) {
              this.state.numberarrayshow[i].key = this.state.numberarray[i].key;
              this.state.numberarrayshow[i].id = this.state.numberarray[i].id;
              this.state.numberarrayshow[i].key2 = this.state.numberarray[i].key2;
              this.state.numberarrayshow[i].colorr = this.state.numberarray[i].colorr;
              this.state.numberarrayshow[i].id2 = this.state.numberarray[i].id2;
              this.setState(this.state.numberarrayshow);
          } */
        this.settimem();
    }

    settimem() {

        i = 1;
        this.delayed = setInterval(function () {

            if (i < this.state.numberarray.length) {
                debugger;
                this.state.numberarrayshow.push({ key: this.state.numberarray[i].key, id: this.state.numberarray[i].id, key2: this.state.numberarray[i].key2, colorr: this.state.numberarray[i].colorr, id2: this.state.numberarray[i].id2 });
                this.setState(this.state.numberarrayshow);




            }
            i++;

        }.bind(this), 600);
    }
    render() {
        const intro = this.animasyonDegeri.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 70],

        });
        return (
            <ImageBackground source={require("../../../image/galaxy.jpg")} style={{ width: '100%', height: '100%' }}>
                <Container>

                    <Content>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Animated.View
                                    style={{
                                        top: intro

                                    }}
                                >
                                    <Text

                                        style={{ position: "relative", fontSize: 30, marginLeft: 100, color: "gray" }}
                                    >
                                        {this.state.number}
                                    </Text>
                                </Animated.View>

                                <Button style={{ display: "flex" }} onPress={this.tree}><Text style={{ fontSize: 50, color: "white" }}>=</Text></Button>
                            </View>
                            <View>
                                <Card style={{ marginLeft: 10, marginRight: 10, minHeight: 500 }}>
                                    <CardItem>
                                        <List dataArray={this.state.numberarrayshow}

                                            renderRow={(item) =>
                                                <ListItem >


                                                    <Text style={{
                                                        textAlign: "center",
                                                        fontSize: 20,
                                                        backgroundColor: item.colorr,
                                                        height: 35,
                                                        width: 45,
                                                        borderRadius: 50,
                                                        color: "white",
                                                        marginLeft: item.id2
                                                    }}>{item.key}</Text>
                                                    <Text style={{
                                                        textAlign: "center",
                                                        fontSize: 20,
                                                        backgroundColor: item.colorr,
                                                        height: 35,
                                                        width: 45,
                                                        borderRadius: 50,
                                                        color: "white",
                                                        marginLeft: item.id
                                                    }}>{item.key2}</Text>

                                                </ListItem>

                                            }>


                                        </List>
                                    </CardItem>
                                </Card>
                            </View>
                        </View>
                    </Content>
                    <Footer style={{ backgroundColor: null }}>

                        <Button style={styles.footerbtnmain} rounded onPress={() => { this.keybort(1) }} >
                            <Text style={styles.footertxt}>1</Text>
                        </Button>
                        <Button style={styles.footerbtn} rounded onPress={() => { this.keybort(2) }} >
                            <Text style={styles.footertxt}>2</Text>
                        </Button>
                        <Button style={styles.footerbtn} rounded onPress={() => { this.keybort(3) }} >
                            <Text style={styles.footertxt}>3</Text>
                        </Button>
                        <Button style={styles.footerbtn} rounded onPress={() => { this.keybort(4) }} >
                            <Text style={styles.footertxt}>4</Text>
                        </Button>
                        <Button style={styles.footerbtn} rounded onPress={() => { this.keybort(5) }} >
                            <Text style={styles.footertxt}>5</Text>
                        </Button>

                    </Footer>
                    <Footer style={{ backgroundColor: null }}>
                        <Button style={styles.footerbtnmain} rounded onPress={() => { this.keybort(6) }} >
                            <Text style={styles.footertxt}>6</Text>
                        </Button>
                        <Button style={styles.footerbtn} rounded onPress={() => { this.keybort(7) }} >
                            <Text style={styles.footertxt}>7</Text>
                        </Button>
                        <Button style={styles.footerbtn} rounded onPress={() => { this.keybort(8) }} >
                            <Text style={styles.footertxt}>8</Text>
                        </Button>
                        <Button style={styles.footerbtn} rounded onPress={() => { this.keybort(9) }} >
                            <Text style={styles.footertxt}>9</Text>
                        </Button>
                        <Button style={styles.footerbtn} rounded onPress={() => { this.keybort(0) }} >
                            <Text style={styles.footertxt}>0</Text>
                        </Button>
                        <Button style={styles.footerbtn} rounded onPress={this.clean} >

                            <Text style={styles.footertxt}>SİL</Text>
                        </Button>

                    </Footer>

                </Container >
            </ImageBackground>
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
    footerbtn: {
        marginLeft: 5,
        backgroundColor: "rgb(56,65,104)"
    },
    footerbtnmain: {

        backgroundColor: "rgb(56,65,104)"
    },
    footertxt: {
        color: "rgb(142,163,226)",
        fontSize: 30
    },
    buttontext: {
        marginTop: 20,

        backgroundColor: '#00BCD4',
        height: 50,

        borderRadius: 150 / 2,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",





    },


});




import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title, List, ListItem, Footer } from 'native-base';
import {
    Platform, StyleSheet, Text, View, Alert, Image, ScrollView, ListView, Animated,
    Easing
} from 'react-native';
import { BackHandler } from 'react-native';


export default class PrimeFacTreePage extends Component {
    constructor(props) {
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
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

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.props.navigation.navigate('Main_eight');
        return true;
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
            outputRange: [0, 70]
        });
        return (
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

                                    style={{ position: "relative", fontSize: 30, marginLeft: 100, color: "black" }}
                                >
                                    {this.state.number}
                                </Text>
                            </Animated.View>

                            <Button style={{ display: "flex" }} onPress={this.tree}><Text style={{ fontSize: 30, color: "white" }}>AYIR</Text></Button>
                        </View>
                        <View>

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

                        </View>
                    </View>
                </Content>
                <Footer>
                    <Button info rounded onPress={(number) =>
                        (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.one) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-1" />
                    </Button>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.two) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-2" />
                    </Button>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.three) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-3" />
                    </Button>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.four) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-4" />
                    </Button>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.five) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-5" />
                    </Button>
                </Footer>
                <Footer>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.six) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-6" />
                    </Button>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.seven) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-7" />
                    </Button>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.eight) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-8" />
                    </Button>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.nine) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-9" />
                    </Button>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.zero) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="exposure-zero" />
                    </Button>
                    <Button info rounded onPress={this.clean} >

                        <Icon type="MaterialIcons" name="keyboard-arrow-left" />
                    </Button>
                </Footer>
            </Container >
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
        marginTop: 20,

        backgroundColor: '#00BCD4',
        height: 50,

        borderRadius: 150 / 2,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",





    },


});


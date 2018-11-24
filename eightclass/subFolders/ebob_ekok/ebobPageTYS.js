

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title, Footer } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView, BackHandler, } from 'react-native';

export default class EbobPageTYS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorboxs: [

                "blue",
                "blue",
                "blue",
                "blue",

            ],
            aa: "0", b: "1", c: "2", d: "3",
            number1TYS: "", number2TYS: "", number3TYS: "",
            aChoise: "A", leng: "10", bChoise: "B", cChoise: "C", dChoise: "D", rand: "125", ind: "0",
            doorTYS: "2",
            truecount: 0, wholefalsecount: 0, falsecount: 0, questioncount: 0,
            falseflag: false,
            iconname1: "check", iconname2: null,
            twonumBColor: "red", threenumBColor: "gray"

        };
        this.generateNum = this.generateNum.bind(this);
    }
    generateNum() {
        this.state.colorboxs[0] = "blue";
        this.state.colorboxs[1] = "blue";
        this.state.colorboxs[2] = "blue";
        this.state.colorboxs[3] = "blue";
        this.setState(this.state.colorboxs);

        var doorctrl = this.state.doorTYS;
        var index = (Math.ceil(Math.random() * 4));
        this.setState({ ind: index });
        var tempebob = 1;
        if (doorctrl == "2") {
            while (tempebob < 10) {
                var tempebob = 1;
                var num1 = (Math.floor(Math.random() * 600));
                var num2 = (Math.floor(Math.random() * 600));
                var num3 = (Math.floor(Math.random() * 600));
                this.setState({ number2TYS: num2, number1TYS: num1 });
                if (num1 > 2 && num2 > 2) {
                    var max = (num1 > num2) ? (max = num1) : (max = num2);
                    var ctrl1 = null;
                    var ctrl2 = null;

                    for (i = 2; i < max; i++) {
                        ctrl1 = num1 % i;
                        ctrl2 = num2 % i;
                        if (ctrl2 == 0 && ctrl1 == 0) {
                            tempebob *= i;
                            num2 /= i;
                            num1 /= i;
                            i--;
                        }
                    }
                    this.setState({ rand: tempebob });
                    this.createChoice(index, tempebob);
                }
            }
        }
        if (doorctrl == "3") {
            while (tempebob < 10) {
                var tempebob = 1;
                var num1 = (Math.floor(Math.random() * 600));
                var num2 = (Math.floor(Math.random() * 600));
                var num3 = (Math.floor(Math.random() * 600));
                this.setState({ number2TYS: num2, number1TYS: num1, number3TYS: num3 });
                if (num1 > 2 && num2 > 2 && num3 > 2) {
                    var max = 0;
                    if (num1 > num2 && num1 > num3)
                        max = num1;
                    else if (num2 > num1 && num2 > num3)
                        max = num2;
                    else (num3 > num2 && num3 > num2)
                    max = num3;
                    var ctrl1 = null;
                    var ctrl2 = null;
                    var ctrl3 = null;
                    var tempebob = 1;
                    for (i = 2; i < max; i++) {
                        ctrl1 = num1 % i;
                        ctrl2 = num2 % i;
                        ctrl3 = num3 % i;
                        if (ctrl2 == 0 && ctrl1 == 0 && ctrl3 == 0) {
                            tempebob *= i;
                            num3 /= i;
                            num2 /= i;
                            num1 /= i;
                            i--;
                        }
                    }
                    this.setState({ rand: tempebob });
                    this.createChoice(index, tempebob);
                }
            }
        }
        var qcount = parseInt(this.state.questioncount, 10);
        qcount++;
        this.setState({ questioncount: qcount });

    }
    createChoice(index, answer) {
        if (index == 1) {
            this.setState(() => ({ aChoise: answer }));
            this.setState(() => ({ bChoise: parseInt(answer) + 10 }));
            this.setState(() => ({ cChoise: parseInt(answer) - 10 }));
            this.setState(() => ({ dChoise: parseInt(answer) + 5 }));
        }
        else if (index == 2) {
            this.setState(() => ({ bChoise: answer }));
            this.setState(() => ({ aChoise: parseInt(answer) + 10 }));
            this.setState(() => ({ cChoise: parseInt(answer) - 10 }));
            this.setState(() => ({ dChoise: parseInt(answer) + 100 }));

        }
        else if (index == 3) {
            this.setState(() => ({ cChoise: answer }));
            this.setState(() => ({ aChoise: parseInt(answer) + 10 }));
            this.setState(() => ({ bChoise: parseInt(answer) - 10 }));
            this.setState(() => ({ dChoise: parseInt(answer) - 5 }));
        }
        else {
            this.setState(() => ({ dChoise: answer }));
            this.setState(() => ({ aChoise: parseInt(answer) + 10 }));
            this.setState(() => ({ bChoise: parseInt(answer) - 10 }));
            this.setState(() => ({ cChoise: parseInt(answer) + 100 }));
        }
    }
    control = (t) => {
        var tcount = parseInt(this.state.truecount, 10);
        var fcount = parseInt(this.state.falsecount, 10);
        var wfcount = parseInt(this.state.wholefalsecount, 10);
        if (this.state.ind == t) {
            tcount++;
            this.setState({ truecount: tcount, falseflag: false });
            this.state.colorboxs[t - 1] = "rgb(34, 139, 34)";
            this.setState(this.state.colorboxs);

        }
        else {
            wfcount++;
            if (!this.state.falseflag)
                this.setState({ falsecount: (fcount + 1), falseflag: true });
            this.setState({ wholefalsecount: wfcount });
            this.state.colorboxs[t - 1] = "red";
            this.setState(this.state.colorboxs);
        }

    }
    twoNum = () => {
        this.setState({
            doorTYS: "2",
            colorboxs: ["blue", "blue", "blue", "blue",],
            twonumBColor: "red", threenumBColor: "gray",
            aa: "0", b: "1", c: "2", d: "3",
            aChoise: "A", leng: "10", bChoise: "B", cChoise: "C", dChoise: "D", rand: "125", ind: "0",
            number1TYS: "", number2TYS: "", number3TYS: "",
            iconname1: "check", iconname2: null,
        });
    }
    threeNum = () => {
        this.setState({
            doorTYS: "3",
            colorboxs: ["blue", "blue", "blue", "blue",],
            twonumBColor: "gray", threenumBColor: "red",
            aa: "0", b: "1", c: "2", d: "3",
            aChoise: "A", leng: "10", bChoise: "B", cChoise: "C", dChoise: "D", rand: "125", ind: "0",
            number1TYS: "", number2TYS: "", number3TYS: "",
            iconname2: "check", iconname1: null,
        });
    }
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "rgb(56,65,104)", height: 50 }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={this.back}>
                            <Icon style={{ color: "rgb(142,163,226)", fontSize: 40 }} type="FontAwesome" name="angle-left" />
                        </Button>
                    </Left>
                    <Body style={{ flex: 5 }}>
                        <Title style={styles.heade}>KENDİNİ DENE</Title>
                    </Body>
                </Header>
                <Content >
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row", marginLeft: 8 }}>
                            <Text style={{ color: "red", fontSize: 20, fontFamily: "bold", textAlign: "center" }}>Ekrana Gelen Sayıların Ebobunu Bulunuz</Text>
                        </View>
                        <View style={{ flexDirection: "column", marginLeft: 10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Button onPress={this.twoNum} style={{ marginTop: 5, backgroundColor: this.state.twonumBColor }} prime >
                                    <Icon type="FontAwesome" name={this.state.iconname1} />
                                    <Text style={{ color: "white", fontSize: 15 }}> İki Sayının Ebobu </Text>
                                </Button>
                                <Button onPress={this.threeNum} style={{ marginTop: 5, backgroundColor: this.state.threenumBColor }} prime >
                                    <Icon type="FontAwesome" name={this.state.iconname2} />
                                    <Text style={{ color: "white", fontSize: 15 }}> Üç Sayının Ebobu </Text>
                                </Button>
                            </View>
                            <Button onPress={this.generateNum} style={styles.buttonstyle} prime ><Text style={{ color: "white", fontSize: 17 }}> Sayı Üret </Text></Button>

                            <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 50 }}>
                                <Text style={{ color: "red", fontSize: 40, fontFamily: "bold", textAlign: "center", marginLeft: 35, color: "blue" }}>{this.state.number1TYS}</Text>
                                <Text style={{ color: "red", fontSize: 40, fontFamily: "bold", textAlign: "center", marginLeft: 35, color: "green" }}>{this.state.number2TYS}</Text>
                                <Text style={{ color: "red", fontSize: 40, fontFamily: "bold", textAlign: "center", marginLeft: 35, color: "blue" }}>{this.state.number3TYS}</Text>
                            </View>
                        </View>
                    </View>
                    <Footer style={{ backgroundColor: 'white', marginTop: 120 }}>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Button onPress={() => this.control(1)} style={[styles.buttonstyle2, { width: 100, backgroundColor: this.state.colorboxs[this.state.aa] }]}  >
                                    <Text style={styles.buttontext2}> {this.state.aChoise} </Text></Button>
                                <Button onPress={() => this.control(2)} style={[styles.buttonstyle2, { width: 100, backgroundColor: this.state.colorboxs[this.state.b] }]}  >
                                    <Text style={styles.buttontext2}> {this.state.bChoise} </Text></Button>
                            </View>
                        </View>
                    </Footer>
                    <Footer style={{ backgroundColor: 'white' }}>
                        <View style={{ flexDirection: "row" }}>
                            <Button onPress={() => this.control(3)} style={[styles.buttonstyle2, { width: 100, backgroundColor: this.state.colorboxs[this.state.c] }]}  >
                                <Text style={styles.buttontext2}> {this.state.cChoise} </Text>
                            </Button>
                            <Button onPress={() => this.control(4)} style={[styles.buttonstyle2, { width: 100, backgroundColor: this.state.colorboxs[this.state.d] }]} >
                                <Text style={styles.buttontext2} > {this.state.dChoise} </Text>
                            </Button>
                        </View>

                    </Footer>
                    <Footer style={{ backgroundColor: 'gray', height: 90, marginTop: 30 }}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 20, color: "orange", marginLeft: 20 }}>Toplam Soru Sayısı={this.state.questioncount}</Text>
                            <Text style={{ fontSize: 20, color: "purple", marginLeft: 20 }}>Toplam Doğru Sayısı={this.state.truecount}</Text>
                            <Text style={{ fontSize: 20, color: "brown", marginLeft: 20 }}>Toplam Yanlış Sayısı={this.state.falsecount}</Text>
                        </View>
                    </Footer>
                </Content>

            </Container >
        );
    }
    componentWillMount() {
        BackHandler.addEventListener(
            "hardwareBackPress",
            this.handleBackButtonClick
        );
    }
    componentWillUnmount() {
        BackHandler.removeEventListener(
            "hardwareBackPress",
            this.handleBackButtonClick
        );
    }

    handleBackButtonClick = () => {
        this.props.navigation.navigate("ebob_ekokPages");
        return true;
    }
    back = () => {
        this.props.navigation.navigate("EbobPages");
    };
}

const styles = StyleSheet.create({
    heade: {
        textAlign: "center",
        color: "rgb(142,163,226)",
        fontSize: 25,
        padding: 5
    },
    buttontext2: {
        textAlign: "center",
        color: "gray",
        fontSize: 40,
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
        textAlign: "center",
        color: 'white',
        padding: 5,
        fontSize: 20,
    }
});


import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title, Footer } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';

export default class Ebob_ekok_primePageTYS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorboxs: [
                "blue",
                "blue",
            ],
            aa: "0", c: "1",
            number1TYS: "", number2TYS: "", number3TYS: "",
            aChoise: "A", cChoise: "C", ind: "0",
            doorTYS: "2",
            truecount: 0, wholefalsecount: 0, falsecount: 0, questioncount: 0,
            falseflag: false,
            iconname1: "check", iconname2: null,
            twonumBColor: "red", threenumBColor: "gray",

        };

        this.generateNum = this.generateNum.bind(this);
    }
    generateNum() {
        this.state.colorboxs[0] = "blue";
        this.state.colorboxs[1] = "blue";
        this.setState(this.state.colorboxs);
        var doorctrl = this.state.doorTYS;
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

                }
            }
            if (tempebob > 1) {
                this.setState({ ind: "2" });
            }
            else {
                this.setState({ ind: "1" });
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
                }
            }
            if (tempebob > 1) {
                this.setState({ ind: "2" });
            }
            else {
                this.setState({ ind: "1" });
            }
        }
        var qcount = parseInt(this.state.questioncount, 10);
        qcount++;
        this.setState({ questioncount: qcount });

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
            aa: "0", b: "1", c: "2", d: "3",
            twonumBColor: "red", threenumBColor: "gray",
            aChoise: "A", leng: "10", bChoise: "B", cChoise: "C", dChoise: "D", rand: "125", ind: "0",
            number1TYS: "", number2TYS: "", number3TYS: "",
            iconname1: "check", iconname2: null
        });
    }
    threeNum = () => {
        this.setState({
            doorTYS: "3",
            colorboxs: ["blue", "blue", "blue", "blue",],
            aa: "0", b: "1", c: "2", d: "3",
            twonumBColor: "gray", threenumBColor: "red",
            aChoise: "A", leng: "10", bChoise: "B", cChoise: "C", dChoise: "D", rand: "125", ind: "0",
            number1TYS: "", number2TYS: "", number3TYS: "",
            iconname2: "check", iconname1: null
        });
    }
    render() {
        return (
            <Container>

                <Content >
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row", marginLeft: 8 }}>
                            <Text style={{ color: "red", fontSize: 20, fontFamily: "bold", textAlign: "center" }}>Ekrana Gelen Sayılar Aralarında Asal Mı?</Text>
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
                                <Button onPress={() => this.control(1)} style={[styles.buttonstyle2, { backgroundColor: this.state.colorboxs[this.state.aa] }]}  >
                                    <Text style={styles.buttontext2}> ARALARINDA ASAL </Text></Button>
                            </View>
                        </View>
                    </Footer>
                    <Footer style={{ backgroundColor: 'white' }}>
                        <View style={{ flexDirection: "row" }}>
                            <Button onPress={() => this.control(2)} style={[styles.buttonstyle2, { backgroundColor: this.state.colorboxs[this.state.c] }]}  >
                                <Text style={styles.buttontext2}>ARALARINDA ASAL DEĞİL </Text>
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
        color: "blue",
        fontSize: 20,
    },
    buttontext2: {
        textAlign: "center",
        color: "gray",
        fontSize: 20,
    },
    buttonstyle: {
        marginLeft: 5
    },
    buttonstyle2: {

        marginLeft: 10
    }
});


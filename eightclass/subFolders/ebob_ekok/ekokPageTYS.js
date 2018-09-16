

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title, Footer } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';

export default class EkokPageTYS extends Component {
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
            aChoise: "A", leng: "10", bChoise: "B", cChoise: "C", dChoise: "D", rand: "125", ind: "0",
            doorTYS: "2",
            number1TYS: "", number2TYS: "", number3TYS: "",
            truecount: 0, falsecount: 0, questioncount: 0

        };
        this.generateNum = this.generateNum.bind(this);
    }
    generateNum() {
        this.setState({ rand: "" });
        this.state.colorboxs[0] = "blue";
        this.state.colorboxs[1] = "blue";
        this.state.colorboxs[2] = "blue";
        this.state.colorboxs[3] = "blue";
        this.setState(this.state.colorboxs);
        var num1 = (Math.floor(Math.random() * 200));
        var num2 = (Math.floor(Math.random() * 200));
        var num3 = (Math.floor(Math.random() * 200));
        var doorctrl = this.state.doorTYS;
        var index = (Math.ceil(Math.random() * 4));
        this.setState({ ind: index });
        var tempekok = 1;
        var ebobinc = 1;

        while (ebobinc < 4 || tempekok > 1000) {
            var tempekok = 1;
            this.setState({ rand: "" });
            num1 = (Math.floor(Math.random() * 200));
            num2 = (Math.floor(Math.random() * 200));
            num3 = (Math.floor(Math.random() * 200));
            if (doorctrl == "2" && num1 > 2 && num2 > 2) {
                var max = (num1 > num2) ? (max = num1) : (max = num2);
                this.setState({ number1TYS: num1, number2TYS: num2 });
                var ctrl1 = null;
                var ctrl2 = null;
                for (i = 2; i < max; i++) {
                    ctrl1 = num1 % i;
                    ctrl2 = num2 % i;
                    if (ctrl1 == 0 && ctrl2 != 0) {
                        tempekok *= i;
                        num1 /= i;
                        i--;
                    }
                    else if (ctrl2 == 0 && ctrl1 != 0) {
                        tempekok *= i;
                        num2 /= i;
                        i--;
                    }
                    else if (ctrl2 == 0 && ctrl1 == 0) {
                        tempekok *= i;
                        num2 /= i;
                        num1 /= i;
                        ebobinc++;
                        i--;
                    }
                }
                this.setState({ rand: tempekok });
                this.createChoice(index, tempekok);
            }
            else if (doorctrl == "3" && num1 > 2 && num2 > 2 && num3 > 2) {
                var ctrl1 = null;
                var ctrl2 = null;
                var ctrl3 = null;
                this.setState({ number1TYS: num1, number2TYS: num2, number3TYS: num3 });
                var max = 0;
                if (num1 > num2 && num1 > num3)
                    max = num1;
                else if (num2 > num1 && num2 > num3)
                    max = num2;
                else (num3 > num2 && num3 > num2)
                max = num3;
                for (i = 2; i < max; i++) {
                    ctrl1 = num1 % i;
                    ctrl2 = num2 % i;
                    ctrl3 = num3 % i;
                    if (ctrl1 == 0 && ctrl2 != 0) {
                        tempekok *= i;
                        num1 /= i;
                        if (ctrl3 == 0) {
                            num3 /= i;
                        }
                        i--;
                    }
                    else if (ctrl2 == 0 && ctrl1 != 0) {
                        tempekok *= i;
                        num2 /= i;
                        if (ctrl3 == 0) {
                            num3 /= i;
                        }
                        i--;
                    }
                    else if (ctrl3 == 0 && ctrl1 != 0 && ctrl2 != 0) {
                        tempekok *= i;
                        num3 /= i;
                        i--;
                    }
                    else if (ctrl2 == 0 && ctrl1 == 0) {
                        tempekok *= i;
                        num2 /= i;
                        num1 /= i;
                        if (ctrl3 == 0) {
                            num3 /= i;
                            ebobinc++;
                        }
                        i--;
                    }
                }
                this.setState({ rand: tempekok });
                this.createChoice(index, tempekok);
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
            this.setState(() => ({ dChoise: parseInt(answer) - 100 }));
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
            this.setState(() => ({ dChoise: parseInt(answer) - 100 }));
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

        if (this.state.ind == t) {
            tcount++;
            this.setState({ truecount: tcount });
            this.state.colorboxs[t - 1] = "green";
            this.setState(this.state.colorboxs);
            this.generateNum();
        }
        else {
            fcount++;
            this.setState({ falsecount: fcount });
            this.state.colorboxs[t - 1] = "red";
            this.setState(this.state.colorboxs);
        }
    }
    twoNum = () => {
        this.setState({
            doorTYS: "2",
            colorboxs: ["blue", "blue", "blue", "blue",],
            aa: "0", b: "1", c: "2", d: "3",
            aChoise: "A", leng: "10", bChoise: "B", cChoise: "C", dChoise: "D", rand: "", ind: "0", number1TYS: "", number2TYS: "", number3TYS: ""
        });
    }
    threeNum = () => {
        this.setState({
            doorTYS: "3",
            colorboxs: ["blue", "blue", "blue", "blue",],
            aa: "0", b: "1", c: "2", d: "3",
            aChoise: "A", leng: "10", bChoise: "B", cChoise: "C", dChoise: "D", rand: "", ind: "0", number1TYS: "", number2TYS: "", number3TYS: ""
        });
    }
    render() {
        return (
            <Container>
                <Content >
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row", marginLeft: 8 }}>
                            <Text style={{ color: "red", fontSize: 20, fontFamily: "bold", textAlign: "center" }}>Ekrana Gelen Sayıların Ekokunu Bulunuz</Text>
                        </View>

                        <View style={{ flexDirection: "column", marginLeft: 10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Button onPress={this.twoNum} style={styles.buttonstyle} prime ><Text style={{ color: "white", fontSize: 15 }}> İki Sayının Ekoku </Text></Button>
                                <Button onPress={this.threeNum} style={styles.buttonstyle} prime ><Text style={{ color: "white", fontSize: 15 }}> Üç Sayının Ekoku </Text></Button>
                                <Button onPress={this.generateNum} style={styles.buttonstyle} prime ><Text style={{ color: "white", fontSize: 17 }}> Sayı Üret </Text></Button>

                            </View>

                            <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 50 }}>
                                <Text style={{ color: "red", fontSize: 40, fontFamily: "bold", textAlign: "center", marginLeft: 35, color: "blue" }}>{this.state.number1TYS}</Text>
                                <Text style={{ color: "red", fontSize: 40, fontFamily: "bold", textAlign: "center", marginLeft: 35, color: "green" }}>{this.state.number2TYS}</Text>
                                <Text style={{ color: "red", fontSize: 40, fontFamily: "bold", textAlign: "center", marginLeft: 35, color: "blue" }}>{this.state.number3TYS}</Text>
                            </View>

                        </View>

                    </View>
                    <Footer style={{ backgroundColor: "white", marginTop: 120 }}>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Button onPress={() => this.control(1)} style={[styles.buttonstyle2, { width: 100, backgroundColor: this.state.colorboxs[this.state.aa] }]}  >
                                    <Text style={styles.buttontext2}> {this.state.aChoise} </Text></Button>
                                <Button onPress={() => this.control(2)} style={[styles.buttonstyle2, { width: 100, backgroundColor: this.state.colorboxs[this.state.b] }]}  >
                                    <Text style={styles.buttontext2}> {this.state.bChoise} </Text></Button>
                            </View>
                        </View>
                    </Footer>
                    <Footer style={{ backgroundColor: "white" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Button onPress={() => this.control(3)} style={[styles.buttonstyle2, { width: 100, backgroundColor: this.state.colorboxs[this.state.c] }]}  >
                                <Text style={styles.buttontext2}> {this.state.cChoise} </Text>
                            </Button>
                            <Button onPress={() => this.control(4)} style={[styles.buttonstyle2, { width: 100, backgroundColor: this.state.colorboxs[this.state.d] }]} >
                                <Text style={styles.buttontext2} > {this.state.dChoise} </Text>
                            </Button>
                        </View>

                    </Footer>
                    <Footer style={{ backgroundColor: "gray", height: 90, marginTop: 30 }}>
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
        backgroundColor: "gray",
        fontSize: 20,
    },
    buttontext2: {
        textAlign: "center",
        color: "gray",
        fontSize: 40,
    },
    buttonstyle: {
        marginLeft: 5
    },
    buttonstyle2: {

        marginLeft: 10
    }
});

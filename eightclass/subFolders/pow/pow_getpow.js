import React, { Component } from 'react';
import { Container, Content, Button, Header, Text, Left, Icon, Body, Title, Footer, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, View, Alert, Image, ScrollView, ImageBackground } from 'react-native';
export default class Pow_getpow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shownumber: "Sayıyı Girin", pow: "Kuvveti Girin", answer: "=?",
            paranthesisLeft: "", paranthesisRight: "", fracanswwer: "",
            signNumberFlag: false, signPowFlag: false, paranthesisFlag: false, csFlag: false, nextProcFlag: false, btnflag: true,
            numberSignFlag: false, powSignFlag: false,
            currentstate: "Kuvveti Girin",
            signnumber: "", signanswer: "", addparantehesis: "Parantez Ekle", signpow: "",
            message: "",
            numberBackColor: "green", powBackColor: "white",
            iconNameParanthesis: null, ParanthesisBackColor: "gray",
            iconNameNegatif: null, NegatifBackColor: "gray", footerdisplay: "flex"
        }
    }
    warn = () => {
        this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
    }
    warn2 = () => {
        this.setState({ message: "Üsse En Fazla 2 Rakam Girilebilir" });
    }
    clean = () => {
        this.setState({
            shownumber: "Sayıyı Girin", pow: "Kuvveti Girin", answer: "=?",
            paranthesisLeft: "", paranthesisRight: "", fracanswwer: "",
            signNumberFlag: false, signPowFlag: false, paranthesisFlag: false, csFlag: false, nextProcFlag: false, btnflag: true,
            numberSignFlag: false, powSignFlag: false,
            signpow: "",
            currentstate: "Kuvveti Girin",
            signnumber: "", signanswer: "", addparantehesis: "Parantez Ekle",
            message: "",
            numberBackColor: "green", powBackColor: "white",
            iconNameParanthesis: null, ParanthesisBackColor: "gray",
            iconNameNegatif: null, NegatifBackColor: "gray", footerdisplay: "flex"
        });
    }
    cleanOnePart = () => {
        if (this.state.csFlag)
            this.setState({ pow: "Kuvveti Girin", message: "", btnflag: true, nextProcFlag: false, answer: "?", signanswer: "", fracanswwer: "", paranthesisLeft: "", paranthesisRight: "" });
        else
            this.setState({ shownumber: "Sayıyı Girin", message: "", btnflag: true, nextProcFlag: false, answer: "?", signanswer: "", fracanswwer: "", paranthesisLeft: "", paranthesisRight: "" });
    }
    keybort = (param) => {
        if (this.state.nextProcFlag) {
            this.clean();
            var num1 = "";
            num1 = num1 + param;
            this.setState({ shownumber: num1, message: "", nextProcFlag: false, btnflag: false });

        }
        else {
            if (this.state.csFlag) {

                if (this.state.pow.length > 6)
                    var num1 = "";
                else
                    var num1 = this.state.pow;

                if (num1.length < 2) {
                    num1 = num1 + param;
                    this.setState({ pow: num1, message: "" });
                    if (this.state.shownumber.length < 6 && this.state.shownumber.length > 0)
                        this.setState({ btnflag: false });
                }
                else {
                    this.setState({ btnflag: false })
                    this.warn2();
                }

            }
            else {

                if (this.state.shownumber.length > 6)
                    var num1 = "";

                else
                    var num1 = this.state.shownumber;

                if (num1.length < 4) {
                    num1 = num1 + param;
                    this.setState({ shownumber: num1, message: "" });
                    if (this.state.pow.length < 6 && this.state.pow.length > 0)
                        this.setState({ btnflag: false });
                }
                else {
                    this.setState({ btnflag: false });
                    this.warn();
                }
            }
        }
    }
    changeSign = () => {
        if (this.state.csFlag) {
            if (!this.state.signPowFlag) {
                if (this.state.nextProcFlag)
                    this.setState({ powSignFlag: true, iconNameNegatif: "check", NegatifBackColor: "red", signPowFlag: true, signpow: "-", signanswer: "", fracanswwer: "", answer: "=?" });
                else
                    this.setState({ powSignFlag: true, iconNameNegatif: "check", NegatifBackColor: "red", signPowFlag: true, signpow: "-" });
            }
            else {
                if (this.state.nextProcFlag)
                    this.setState({ powSignFlag: false, iconNameNegatif: null, NegatifBackColor: "gray", signPowFlag: false, signpow: "", signanswer: "", fracanswwer: "", answer: "=?" });
                else
                    this.setState({ powSignFlag: false, iconNameNegatif: null, NegatifBackColor: "gray", signPowFlag: false, signpow: "" });
            }
        }
        else {
            if (!this.state.signNumberFlag) {
                if (this.state.nextProcFlag)
                    this.setState({ numberSignFlag: true, iconNameNegatif: "check", NegatifBackColor: "red", signNumberFlag: true, signnumber: "-", signanswer: "", fracanswwer: "", answer: "=?" });
                else
                    this.setState({ numberSignFlag: true, iconNameNegatif: "check", NegatifBackColor: "red", signNumberFlag: true, signnumber: "-" });
            }

            else {
                if (this.state.nextProcFlag)
                    this.setState({ numberSignFlag: false, iconNameNegatif: null, NegatifBackColor: "gray", signNumberFlag: false, signnumber: "", signanswer: "", fracanswwer: "", answer: "=?" });
                else
                    this.setState({ numberSignFlag: false, iconNameNegatif: null, NegatifBackColor: "gray", signNumberFlag: false, signnumber: "" });
            }

        }

    }
    addPrnthesis = () => {
        if (!this.state.paranthesisFlag) {
            if (this.state.nextProcFlag)
                this.setState({ iconNameParanthesis: "check", ParanthesisBackColor: "red", paranthesisFlag: true, addparantehesis: "Parantez Sil", paranthesisLeft: "(", paranthesisRight: ")", signanswer: "", fracanswwer: "", answer: "=?" });
            else
                this.setState({ iconNameParanthesis: "check", ParanthesisBackColor: "red", paranthesisFlag: true, addparantehesis: "Parantez Sil", paranthesisLeft: "(", paranthesisRight: ")" });
        }
        else {
            if (this.state.nextProcFlag)
                this.setState({ iconNameParanthesis: null, ParanthesisBackColor: "gray", paranthesisFlag: false, addparantehesis: "Parantez Ekle", paranthesisLeft: "", paranthesisRight: "", signanswer: "", fracanswwer: "", answer: "=?" });
            else
                this.setState({ iconNameParanthesis: null, ParanthesisBackColor: "gray", paranthesisFlag: false, addparantehesis: "Parantez Ekle", paranthesisLeft: "", paranthesisRight: "" });
        }
    }
    changeCState = () => {
        if (!this.state.csFlag) {
            if (this.state.powSignFlag)
                this.setState({ iconNameNegatif: "check", NegatifBackColor: "red", csFlag: true, currentstate: "Sayıyı Girin", powBackColor: "green", numberBackColor: "white" });
            else
                this.setState({ iconNameNegatif: null, NegatifBackColor: "gray", csFlag: true, currentstate: "Sayıyı Girin", powBackColor: "green", numberBackColor: "white" });
        }
        else {
            if (this.state.numberSignFlag)
                this.setState({ iconNameNegatif: "check", NegatifBackColor: "red", csFlag: false, currentstate: "Kuvveti Girin", powBackColor: "white", numberBackColor: "green" });
            else
                this.setState({ iconNameNegatif: null, NegatifBackColor: "gray", csFlag: false, currentstate: "Kuvveti Girin", powBackColor: "white", numberBackColor: "green" });
        }
    }
    solution = () => {
        if (this.state.shownumber.length > 6 || this.state.pow.length > 6 || this.state.shownumber == "" || this.state.pow == "")
            this.setState({ message: "Sayı Gir" });

        else {
            this.setState({ footerdisplay: "none" });
            var number = this.state.shownumber;
            var power = this.state.pow;
            number = parseInt(number);
            power = parseInt(power);
            var total = 1;
            for (i = 0; i < power; i++)
                total *= number;
            if (this.state.paranthesisFlag) {
                if (this.state.signNumberFlag) {
                    if (this.state.signPowFlag) {
                        if (power == 0)
                            this.setState({ message: "negatif sıfır olamaz" });
                        else {
                            if (power % 2 == 0)
                                this.setState({ fracanswwer: "1/", answer: total, signanswer: "=" });
                            else
                                this.setState({ fracanswwer: "1/", answer: total, signanswer: "=-" });
                        }

                    }
                    else {
                        if (power == 0)
                            this.setState({ message: "negatif sıfır olamaz" });
                        else {
                            if (power % 2 == 0)
                                this.setState({ answer: total, signanswer: "=" });
                            else
                                this.setState({ answer: total, signanswer: "=-" });
                        }
                    }
                }
                else {
                    if (this.state.signPowFlag)
                        this.setState({ fracanswwer: "1/", answer: total, signanswer: "=" });

                    else
                        this.setState({ answer: total, signanswer: "=" });
                }
            }
            else {
                if (this.state.signNumberFlag) {
                    if (power == 0)
                        this.setState({ message: "negatif sıfır olamaz" });
                    else {
                        if (this.state.signPowFlag)
                            this.setState({ fracanswwer: "1/", answer: total, signanswer: "=-" });
                        else
                            this.setState({ answer: total, signanswer: "=-" });
                    }
                }
                else {
                    if (power == 0)
                        this.setState({ message: "negatif sıfır olamaz" });
                    else {
                        if (this.state.signPowFlag)
                            this.setState({ fracanswwer: "1/", answer: total, signanswer: "=" });
                        else
                            this.setState({ answer: total, signanswer: "=" });
                    }
                }
            }
            this.setState({ nextProcFlag: true, footerdisplay: "flex" });
        }


    }
    render() {
        return (
            <Container>
                <ImageBackground source={require("../../../image/galaxy.jpg")} style={{ width: '100%', height: '100%' }}>
                    <Content style={{ padding: 10, }}>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "column" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Button onPress={this.solution} disabled={this.state.btnflag} style={{ marginLeft: 10 }}><Text style={{ color: "white" }}>Cevapla</Text></Button>
                                        <Button onPress={this.changeCState} style={{ marginLeft: 10 }}><Text style={{ color: "white" }}>{this.state.currentstate}</Text></Button>
                                        <Button onPress={this.clean} transparent bordered>
                                            <Icon style={{ fontSize: 30 }} name='trash' />

                                        </Button>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Button onPress={this.changeSign} style={{ marginTop: 10, backgroundColor: this.state.NegatifBackColor }}>
                                        <Icon type="FontAwesome" name={this.state.iconNameNegatif} />
                                        <Text style={{ color: "white" }}>Negatif Sayı</Text>
                                    </Button>
                                    <Button onPress={this.addPrnthesis} style={{ marginLeft: 10, marginTop: 10, backgroundColor: this.state.ParanthesisBackColor }}>
                                        <Icon type="FontAwesome" name={this.state.iconNameParanthesis} />
                                        <Text style={{ color: "white" }}>{this.state.addparantehesis}</Text>
                                    </Button>

                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text>AÇIKLAMA BURAYA2</Text>
                                <Text>{this.state.message}</Text>
                            </View>
                            <Card style={{ marginLeft: 10, marginRight: 10, height: 200 }}>
                                <CardItem>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ fontSize: 30, backgroundColor: this.state.numberBackColor }}>
                                            {this.state.paranthesisLeft}{this.state.signnumber}{this.state.shownumber}{this.state.paranthesisRight}
                                        </Text>
                                        <Text style={{ fontSize: 20, marginBottom: 20, backgroundColor: this.state.powBackColor }}>
                                            {this.state.signpow}{this.state.pow}
                                        </Text>
                                        <Text style={{ fontSize: 30 }}>
                                            {this.state.signanswer}{this.state.fracanswwer}{this.state.answer}
                                        </Text>
                                    </View>

                                </CardItem>
                            </Card>
                        </View>

                    </Content>
                    <Footer style={{ backgroundColor: null, display: this.state.footerdisplay }}>

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
                    <Footer style={{ backgroundColor: null, display: this.state.footerdisplay }}>
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
                        <Button style={styles.footerbtn} rounded onPress={this.cleanOnePart} >

                            <Text style={styles.footertxt}>SİL</Text>
                        </Button>

                    </Footer>
                </ImageBackground>
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


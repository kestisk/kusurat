import React, { Component } from 'react';
import { Container, Content, Button, Header, Text, Left, Icon, Body, Title, Footer, Card, CardItem, Right } from 'native-base';
import { Platform, StyleSheet, View, Alert, Image, ScrollView, ImageBackground, BackHandler } from 'react-native';
export default class Pow_getpow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shownumber: "Sayıyı Girin", pow: "Kuvveti Girin", answer: " = ? ",
            paranthesisLeft: "", paranthesisRight: "", fracanswwer: "",
            signNumberFlag: false, signPowFlag: false, paranthesisFlag: false, csFlag: false, nextProcFlag: false, btnflag: true,

            currentstate: "arrow-up",
            signnumber: "", signanswer: "", addparantehesis: "(X)", addNegative: "-", signpow: "",
            message: "",
            numberBackColor: "rgb(142,163,226)", powBackColor: "white",
            ParanthesisBackColor: "rgb(56,65,104)",
            NegatifBackColor: "rgb(56,65,104)", footerdisplay: "flex",
            displaynegative: false,
            mycolor: "rgb(211,211,211)",
            mycolordis: "white",
        }
    }
    warn = () => {
        this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
    }
    warn2 = (a) => {
        this.setState({ message: a });
    }
    clean = () => {
        this.setState({
            shownumber: "Sayıyı Girin", pow: "Kuvveti Girin", answer: " = ? ",
            paranthesisLeft: "", paranthesisRight: "", fracanswwer: "",
            signNumberFlag: false, signPowFlag: false, paranthesisFlag: false, csFlag: false, nextProcFlag: false, btnflag: true,

            signpow: "",
            currentstate: "arrow-up",
            signnumber: "", signanswer: "", addparantehesis: "(X)", addNegative: "-",
            message: "",
            numberBackColor: "rgb(142,163,226)", powBackColor: "white",
            ParanthesisBackColor: "rgb(56,65,104)",
            NegatifBackColor: "rgb(56,65,104)", footerdisplay: "flex",
            displaynegative: false
        });
    }
    cleanOnePart = () => {
        if (this.state.csFlag) {
            if (this.state.pow.length < 5) {
                var x = this.state.pow;
                len = x.length - 1;
                x = [...x].slice(0, (x.length - 1));
                this.setState({
                    pow: x, message: "", btnflag: true, nextProcFlag: false,
                    answer: "?", signanswer: "", fracanswwer: ""
                });
                if (len == 0)
                    this.setState({ pow: "Kuveeti Girin", mycolor: "rgb(211,211,211)", NegatifBackColor: "rgb(56,65,104)", displaynegative: false, signPowFlag: false, signpow: "" });
            }

        }
        else {
            if (this.state.shownumber.length < 5) {
                var x = this.state.shownumber;
                len = x.length - 1;
                x = [...x].slice(0, (x.length - 1));
                this.setState({
                    shownumber: x, message: "", btnflag: true, nextProcFlag: false,
                    answer: "?", signanswer: "", fracanswwer: ""
                });
                if (len == 0)
                    this.setState({ shownumber: "Sayıyı Girin", mycolor: "rgb(211,211,211)", NegatifBackColor: "rgb(56,65,104)", displaynegative: false, signNumberFlag: false, signnumber: "" });
            }

        }
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

                if (this.state.shownumber.length == 2) {
                    if (num1.length < 1) {
                        num1 = num1 + param;
                        this.setState({ pow: num1, message: "", displaynegative: true, NegatifBackColor: "gray" });
                        if (this.state.shownumber.length < 6 && this.state.shownumber.length > 0)
                            this.setState({ btnflag: false, mycolor: "rgb(75,0,130)", mycolordis: "rgb(188,143,143)" });
                    }
                    else {
                        this.setState({ btnflag: false, displaynegative: true, NegatifBackColor: "gray" })
                        this.warn2("En Fazla 1 Basamak");
                    }
                }
                else if (this.state.shownumber.length < 2) {
                    if (num1.length < 2) {
                        num1 = num1 + param;
                        this.setState({ pow: num1, message: "", displaynegative: true, NegatifBackColor: "gray" });
                        if (this.state.shownumber.length < 6 && this.state.shownumber.length > 0)
                            this.setState({ btnflag: false, mycolor: "rgb(75,0,130)", mycolordis: "rgb(188,143,143)" });
                    }
                    else {
                        this.setState({ btnflag: false, displaynegative: true, NegatifBackColor: "gray" })
                        this.warn2("En Fazla 2 Basamak");
                    }
                }

            }
            else {

                if (this.state.shownumber.length > 6)
                    var num1 = "";

                else
                    var num1 = this.state.shownumber;

                if (num1.length < 2) {
                    num1 = num1 + param;
                    this.setState({ shownumber: num1, message: "", displaynegative: true, NegatifBackColor: "gray" });
                    if (this.state.pow.length < 6 && this.state.pow.length > 0)
                        this.setState({ btnflag: false, mycolor: "rgb(75,0,130)", mycolordis: "rgb(188,143,143)" });
                }
                else {
                    this.setState({ btnflag: false, displaynegative: true, NegatifBackColor: "gray" });
                    this.warn();
                }
            }
        }

    }
    changeSign = () => {
        if (this.state.csFlag) {

            if (!this.state.signPowFlag)
                this.setState({
                    displaynegative: false, NegatifBackColor: "rgb(56,65,104)",
                    addNegative: "-", pow: "", signPowFlag: true, signpow: "-", signanswer: "", fracanswwer: "", answer: " = ? "

                });
            else
                this.setState({ displaynegative: true, NegatifBackColor: "gray" });
        }
        else {
            if (this.state.shownumber.length < 5) {
                if (!this.state.signNumberFlag)
                    this.setState({
                        displaynegative: true, NegatifBackColor: "rgb(56,65,104)",
                        shownumber: "", signNumberFlag: true, signnumber: "-", signanswer: "", fracanswwer: "", answer: " = ? "
                    });

                else
                    this.setState({ displaynegative: true, NegatifBackColor: "gray" });
            }
            else if (this.state.shownumber.length > 5) {
                if (!this.state.signNumberFlag)
                    this.setState({
                        displaynegative: false, NegatifBackColor: "rgb(56,65,104)", signNumberFlag: true,
                        signnumber: "-", signanswer: "", fracanswwer: "", answer: " = ? "
                    });
                else
                    this.setState({
                        displaynegative: false, NegatifBackColor: "rgb(56,65,104)", signNumberFlag: false,
                        signnumber: "", signanswer: "", fracanswwer: "", answer: " = ? "
                    });
            }
        }

    }

    addPrnthesis = () => {
        if (!this.state.paranthesisFlag) {
            if (this.state.nextProcFlag)
                this.setState({ ParanthesisBackColor: "red", paranthesisFlag: true, addparantehesis: "X", paranthesisLeft: "(", paranthesisRight: ")", signanswer: "", fracanswwer: "", answer: " = ? " });
            else
                this.setState({ ParanthesisBackColor: "red", paranthesisFlag: true, addparantehesis: "X", paranthesisLeft: "(", paranthesisRight: ")" });
        }
        else {
            if (this.state.nextProcFlag)
                this.setState({ ParanthesisBackColor: "rgb(56,65,104)", paranthesisFlag: false, addparantehesis: "(X)", paranthesisLeft: "", paranthesisRight: "", signanswer: "", fracanswwer: "", answer: " = ? " });
            else
                this.setState({ ParanthesisBackColor: "rgb(56,65,104)", paranthesisFlag: false, addparantehesis: "(X)", paranthesisLeft: "", paranthesisRight: "" });
        }
    }
    changeCState = (a) => {
        if (a == 2) {
            if (this.state.signPowFlag)
                this.setState({ displaynegative: true, NegatifBackColor: "gray", csFlag: true, currentstate: "arrow-down", powBackColor: "rgb(142,163,226)", numberBackColor: "white" });
            else
                this.setState({ displaynegative: false, NegatifBackColor: "rgb(56,65,104)", csFlag: true, currentstate: "arrow-down", powBackColor: "rgb(142,163,226)", numberBackColor: "white" });
        }
        else {
            if (this.state.signNumberFlag)
                this.setState({ displaynegative: true, NegatifBackColor: "gray", csFlag: false, currentstate: "arrow-up", powBackColor: "white", numberBackColor: "rgb(142,163,226)" });
            else
                this.setState({ displaynegative: false, NegatifBackColor: "rgb(56,65,104)", csFlag: false, currentstate: "arrow-up", powBackColor: "white", numberBackColor: "rgb(142,163,226)" });
        }
    }

    solution = () => {
        if (this.state.shownumber.length > 6 || this.state.pow.length > 6 || this.state.shownumber == "" || this.state.pow == "")
            this.setState({ message: "Boşluk Bırakma" });

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
                                this.setState({ fracanswwer: "1/", answer: total, signanswer: " = " });
                            else
                                this.setState({ fracanswwer: "1/", answer: total, signanswer: " = - " });
                        }

                    }
                    else {
                        if (power == 0)
                            this.setState({ message: "negatif sıfır olamaz" });
                        else {
                            if (power % 2 == 0)
                                this.setState({ answer: total, signanswer: " = " });
                            else
                                this.setState({ answer: total, signanswer: " = - " });
                        }
                    }
                }
                else {
                    if (this.state.signPowFlag)
                        this.setState({ fracanswwer: "1/", answer: total, signanswer: " = " });

                    else
                        this.setState({ answer: total, signanswer: " = " });
                }
            }
            else {
                if (this.state.signNumberFlag) {
                    if (power == 0)
                        this.setState({ message: "negatif sıfır olamaz" });
                    else {
                        if (this.state.signPowFlag)
                            this.setState({ fracanswwer: "1/", answer: total, signanswer: " = - " });
                        else
                            this.setState({ answer: total, signanswer: " = - " });
                    }
                }
                else {
                    if (power == 0)
                        this.setState({ message: "negatif sıfır olamaz" });
                    else {
                        if (this.state.signPowFlag)
                            this.setState({ fracanswwer: "1/", answer: total, signanswer: " = " });
                        else
                            this.setState({ answer: total, signanswer: " = " });
                    }
                }
            }
            this.setState({ nextProcFlag: true, footerdisplay: "flex" });
        }


    }
    render() {

        return (
            <ImageBackground source={require("../../../image/galaxy.jpg")} style={{ width: '100%', height: '100%' }} >
                <Container>
                    <Header style={{ backgroundColor: "rgb(56,65,104)", height: 50 }}>
                        <Left style={{ flex: 1 }}>
                            <Button transparent onPress={this.back}>
                                <Icon style={{ color: "rgb(142,163,226)", fontSize: 40 }} type="FontAwesome" name="angle-left" />
                            </Button>
                        </Left>
                        <Body style={{ flex: 4 }}>
                            <Title style={styles.heade}>KUVVET ALMA</Title>
                        </Body>
                        <Right style={{ flex: 1 }}>
                            <Button transparent onPress={this.tys}>
                                <Icon style={{ color: "rgb(142,163,226)", fontSize: 30 }} type="FontAwesome" name="edit" />
                            </Button>

                        </Right>
                    </Header>
                    <Content >
                        <View style={{ flexDirection: "column", marginTop: 10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Button onPress={this.solution} disabled={this.state.btnflag} style={{ backgroundColor: this.state.mycolor, borderRadius: 30 }} >
                                        <Text style={{ fontSize: 20, marginTop: 10, alignSelf: "center", color: this.state.mycolordis }} >
                                            <Icon style={{ fontSize: 50, color: this.state.mycolordis }} type="EvilIcons" name="play" />
                                            BASLA
                                        </Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginLeft: 10, marginRight: 10, marginTop: 5 }}>
                            <View style={{ minHeight: 350, width: '100%', backgroundColor: "white", flexDirection: "column" }}>
                                <View style={{ flexDirection: "column" }}>
                                    <Text>AÇIKLAMA BURAYA2</Text>
                                    <Text>{this.state.message}</Text>

                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        <View >
                                            <Text onPress={() => { this.changeCState(1) }} style={{ fontSize: 30, backgroundColor: this.state.numberBackColor }}>
                                                {this.state.paranthesisLeft}{this.state.signnumber}{this.state.shownumber}{this.state.paranthesisRight}
                                            </Text>
                                        </View>
                                        <View>
                                            <Text onPress={() => { this.changeCState(2) }} style={{ fontSize: 20, marginBottom: 20, backgroundColor: this.state.powBackColor }}>
                                                {this.state.signpow}{this.state.pow}
                                            </Text>
                                        </View>
                                        <Text style={{ fontSize: 30 }}>
                                            {this.state.signanswer}{this.state.fracanswwer}{this.state.answer}
                                        </Text>
                                    </View>
                                </View>
                                <Button style={{ position: "absolute", alignSelf: "flex-end" }} onPress={this.clean} transparent >
                                    <Icon style={{ fontSize: 50, color: "rgb(142,163,226)" }} type="FontAwesome" name='refresh' />
                                </Button>
                            </View>
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
                        <Button onPress={this.addPrnthesis} rounded style={{ marginLeft: 5, backgroundColor: this.state.ParanthesisBackColor }}>
                            <Text style={{ fontSize: 20, color: "rgb(142,163,226)" }}>{this.state.addparantehesis}</Text>
                        </Button>
                        <Button onPress={this.changeSign} disabled={this.state.displaynegative} rounded style={{ marginLeft: 5, backgroundColor: this.state.NegatifBackColor }}>

                            <Text style={{ fontSize: 20, color: "rgb(142,163,226)" }}>{this.state.addNegative}</Text>
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
                            <Icon style={{ color: "rgb(142,163,226)", fontSize: 30 }} name='backspace' />
                        </Button>

                    </Footer>

                </Container >
            </ImageBackground >
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
        this.props.navigation.navigate("powers");
        return true;
    }
    back = () => {
        this.props.navigation.navigate("powers");
    }
    tys = () => {
        this.props.navigation.navigate("Pow_getpowTYSPages");
    }
}

const styles = StyleSheet.create({
    heade: {
        textAlign: "center",
        color: "rgb(142,163,226)",
        fontSize: 25,
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


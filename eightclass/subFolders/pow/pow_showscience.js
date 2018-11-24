

import React, { Component } from 'react';
import { Container, Content, Button, Header, Text, Left, Right, Icon, Body, Title, Footer, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, View, Alert, Image, ScrollView, ImageBackground, BackHandler } from 'react-native';
export default class Pow_showscience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: "",
            message: "Lütfen Klavyeden Bir Sayı Giriniz",
            ten: "x10",
            disableten: "none",
            disableten2: "none",
            disable: true,
            disableans: true,
            flagg: true,
            pow: "",
            explain: "Kuvveti Giriniz",
            powbgc: "rgb(193,205,205)",
            numbgc: "rgb(142,163,226)",
            powornumber: true,
            answer: "",
            newpow: "",
            dot: true,
            coma: "gray",
            dotflag: false,
            footerdisplay: "flex",
            mycolor: "rgb(211,211,211)",
            mycolordis: "white",
        }
    }
    warn = () => {
        this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
    }
    cleanOnePart = () => {
        if ((this.state.pow == "" && this.state.powornumber == true) || (this.state.number == "" && this.state.powornumber == false)) {


            this.setState({
                message: "Lütfen Klavyeden Bir Sayı Giriniz", flagg: true, disableten: "none", number: "",
                answer: "", newpow: "", disableten2: "none", disable: true,
                disableans: true, flagg: true, explain: "Kuvveti Giriniz", powornumber: true, pow: "",
                powbgc: "rgb(193,205,205)", dotflag: false, dot: true, coma: "gray", mycolor: "rgb(211,211,211)",
                mycolordis: "white",

            });

        }
        else {
            if (this.state.powornumber == true) {
                this.setState({
                    number: "", disableans: true, mycolor: "rgb(211,211,211)",
                    mycolordis: "white", dotflag: false, dot: true, coma: "gray"
                });
            }
            else {
                this.setState({
                    pow: "", disableans: true, mycolor: "rgb(211,211,211)",
                    mycolordis: "white", dot: true, coma: "gray"
                });
            }
        }



    }
    clean = () => {
        this.setState({
            number: "",
            message: "Lütfen Klavyeden Bir Sayı Giriniz",
            ten: "x10",
            disableten: "none",
            disableten2: "none",
            disable: true,
            disableans: true,
            flagg: true,
            pow: "",
            explain: "Kuvveti Giriniz",
            powbgc: "rgb(193,205,205)",
            numbgc: "rgb(142,163,226)",
            powornumber: true,
            answer: "",
            newpow: "",
            dot: true,
            coma: "gray",
            dotflag: false,
            footerdisplay: "flex",
            mycolor: "rgb(211,211,211)",
            mycolordis: "white",
        });

    }

    keybort(variable) {
        if (variable == ",") {

            this.setState({ number: this.state.number + variable.toString(), disableten: "flex", dot: true, coma: "gray", dotflag: true });
        }
        else {


            if (this.state.flagg == true) {
                if (this.state.powornumber == true) {
                    if (this.state.dotflag == false) {
                        this.setState({ number: this.state.number + variable.toString(), disableten: "flex", disable: false, dot: false, coma: "rgb(56,65,104)" });
                    }
                    else
                        this.setState({ number: this.state.number + variable.toString(), disableten: "flex", disable: false });
                }
                else {
                    this.setState({ pow: this.state.number + variable.toString(), disableans: false, mycolor: "rgb(75,0,130)", mycolordis: "rgb(188,143,143)" });
                }
            }
            else {
                if (this.state.powornumber == true) {
                    if (this.state.number.length < 7) {
                        if (this.state.pow != "") {
                            if (this.state.dotflag == false) {


                                this.setState({
                                    number: (this.state.number + variable.toString()), disableans: false, dot: false, coma: "rgb(56,65,104)",
                                    mycolor: "rgb(75,0,130)", mycolordis: "rgb(188,143,143)"
                                });
                            }
                            else
                                this.setState({
                                    number: (this.state.number + variable.toString()), disableans: false,
                                    mycolor: "rgb(75,0,130)", mycolordis: "rgb(188,143,143)"
                                });
                        }
                        else {
                            if (this.state.dotflag == false) {


                                this.setState({
                                    number: (this.state.number + variable.toString()), dot: false, coma: "rgb(56,65,104)"
                                });
                            }
                            else
                                this.setState({
                                    number: (this.state.number + variable.toString())
                                });
                        }
                    }
                    else {
                        this.warn();
                    }
                }
                else {
                    if (this.state.pow.length < 4) {
                        this.setState({
                            pow: (this.state.pow + variable.toString()),
                            disableans: false, mycolor: "rgb(75,0,130)", mycolordis: "rgb(188,143,143)"
                        });
                    }
                    else {
                        this.warn();
                    }
                }


            }
        }
    }
    powset = (i) => {
        if (this.state.number == "") {

            this.setState(() => ({ message: "Önce Sayıyı Girin" }))

        }
        else {
            if (this.state.dotflag == true) {
                if (i == 2) {

                    this.setState(() => ({ powornumber: false, flagg: false, powbgc: "rgb(142,163,226)", numbgc: "rgb(193,205,205)", explain: "Sayıyı Giriniz" }));
                }
                else {
                    this.setState(() => ({ powornumber: true, flagg: false, powbgc: "rgb(193,205,205)", numbgc: "rgb(142,163,226)", explain: "Kuvveti Giriniz" }));
                }
            }
            else {
                if (i == 2) {

                    this.setState(() => ({ powornumber: false, flagg: false, powbgc: "rgb(142,163,226)", numbgc: "rgb(193,205,205)", explain: "Sayıyı Giriniz", dot: true, coma: "gray" }));
                }
                else {
                    this.setState(() => ({ powornumber: true, flagg: false, powbgc: "rgb(193,205,205)", numbgc: "rgb(142,163,226)", explain: "Kuvveti Giriniz", dot: false, coma: "rgb(56,65,104)" }));
                }
            }
        }


    }
    science = () => {
        this.setState({
            footerdisplay: "none", mycolor: "rgb(211,211,211)",
            mycolordis: "white",
        });
        let array = [... this.state.number];
        let part1;
        let part2 = [];
        let part3 = [];
        let lastarray = [];
        var index;
        if (array[0] != 0) {


            for (i = 0; i < 7; i++) {
                if (array[i] == ",") {
                    index = i;
                    break;
                }
                else {
                    index = array.length;
                }
            }

            part1 = array[0];
            for (i = 1; i < index; i++) {
                part2.push(array[i]);
            }
            for (i = index + 1; i < array.length; i++) {
                part3.push(array[i]);
            }
            lastarray.push(part1, ",", part2, part3);
            this.setState(() => ({ newpow: parseInt(this.state.pow) + (index - 1) }));
            this.setState(() => ({ answer: lastarray, disableten2: "flex" }));
        }
        else {
            for (i = 0; i < 7; i++) {
                if (array[i] != 0) {
                    index = i;
                    break;
                }

            }
            part1 = array[index];
            for (i = 1; i < index; i++) {
                part2.push(array[i]);
            }
            for (i = index + 1; i < array.length; i++) {
                part3.push(array[i]);
            }
            lastarray.push(part1, ",", part2, part3);
            this.setState(() => ({ newpow: parseInt(this.state.pow) + (index - 1) }));
            this.setState(() => ({ answer: lastarray, disableten2: "flex" }));

        }
        this.setState({ footerdisplay: "flex", mycolor: "rgb(75,0,130)", mycolordis: "rgb(188,143,143)" });
    }

    render() {
        return (
            <ImageBackground source={require("../../../image/galaxy.jpg")} style={{ width: '100%', height: '100%' }}>
                <Container>
                    <Header style={{ backgroundColor: "rgb(56,65,104)", height: 50 }}>
                        <Left style={{ flex: 1 }}>
                            <Button transparent onPress={this.back}>
                                <Icon style={{ color: "rgb(142,163,226)", fontSize: 40 }} type="FontAwesome" name="angle-left" />
                            </Button>
                        </Left>
                        <Body style={{ flex: 4 }}>
                            <Title style={styles.heade}>BİLİMSEL GÖSTERİM</Title>
                        </Body>
                        <Right style={{ flex: 1 }}>
                            <Button transparent onPress={this.tys}>
                                <Icon style={{ color: "rgb(142,163,226)", fontSize: 30 }} type="FontAwesome" name="edit" />
                            </Button>
                        </Right>
                    </Header>
                    <Content style={{ padding: 10 }}>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row", marginBottom: 5 }}>
                                <Button disabled={this.state.disableans} onPress={this.science} style={{ backgroundColor: this.state.mycolor, borderRadius: 30 }}>
                                    <Text style={{ fontSize: 20, marginTop: 10, alignSelf: "center", color: this.state.mycolordis }} >
                                        <Icon style={{ fontSize: 50, color: this.state.mycolordis }} type="EvilIcons" name="play" />
                                        BASLA
                                        </Text>
                                </Button>
                                <Button disabled={this.state.disable} onPress={this.powset}><Text style={{ fontSize: 30, fontStyle: "italic" }}>{this.state.explain}</Text></Button>

                            </View>
                            <View style={{ minHeight: 350, width: '100%', backgroundColor: "white", flexDirection: "column" }}>
                                <View style={{ flexDirection: "column", marginTop: 10 }}>
                                    <View style={{ flexDirection: "column" }}>
                                        <Text>{this.state.message}</Text>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text
                                                style={{
                                                    marginTop: 20, fontSize: 30, marginLeft: 20, maxHeight: 100, minWidth: 50,
                                                    backgroundColor: this.state.numbgc
                                                }}
                                                onPress={() => { this.powset(1) }}>
                                                {this.state.number}
                                            </Text>

                                            <Text style={{
                                                marginTop: 20, fontSize: 30,
                                                color: "red"
                                            }}>{this.state.ten}</Text>

                                            <Text style={{
                                                height: 30,
                                                width: 50,
                                                marginTop: 8, fontSize: 20,
                                                color: "red",
                                                backgroundColor: this.state.powbgc
                                            }}
                                                onPress={() => { this.powset(2) }}>{this.state.pow}</Text>

                                        </View>

                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{

                                                marginTop: 20, fontSize: 30,
                                                display: this.state.disableten,


                                            }}>{this.state.answer}</Text>
                                            <Text style={{
                                                marginTop: 20, fontSize: 30,
                                                display: this.state.disableten2,
                                                color: "red"
                                            }}>{this.state.ten}</Text>
                                            <Text style={{
                                                height: 30,
                                                width: 50,
                                                color: "red",
                                                marginTop: 8, fontSize: 20,

                                            }}>{this.state.newpow}</Text>

                                        </View>
                                    </View>
                                    <Button style={{ position: "absolute", alignSelf: "flex-end" }} onPress={this.clean} transparent >
                                        <Icon style={{ fontSize: 50, color: "rgb(142,163,226)" }} type="FontAwesome" name='refresh' />
                                    </Button>
                                </View>
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
                        <Button disabled={this.state.dot} rounded style={{ backgroundColor: this.state.coma }} onPress={() => { this.keybort(",") }} >
                            <Icon style={{ color: "rgb(142,163,226)" }} type="Foundation" name="italic" />
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
            </ImageBackground>
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
    tys = () => {
        this.props.navigation.navigate("Pow_showscienceTYSPages");

    }

    back = () => {
        this.props.navigation.navigate("powers");
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
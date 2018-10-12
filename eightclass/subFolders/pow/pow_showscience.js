

import React, { Component } from 'react';
import { Container, Content, Button, Header, Text, Left, Icon, Body, Title, Footer, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, View, Alert, Image, ScrollView, ImageBackground } from 'react-native';
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
            powbgc: "white",
            numbgc: "white",
            powornumber: true,
            answer: "",
            newpow: "",
            dot: true,
            dotflag: false,
            footerdisplay: "flex"
        }
    }
    warn = () => {
        this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
    }
    cleanpart = () => {
        if ((this.state.pow == "" && this.state.powornumber == true) || (this.state.number == "" && this.state.powornumber == false)) {


            this.setState({
                message: "Lütfen Klavyeden Bir Sayı Giriniz", flagg: true, disableten: "none", number: "", answer: "", newpow: "", disableten2: "none", disable: true,
                disableans: true, flagg: true, explain: "Kuvveti Giriniz", powornumber: true, pow: "", powbgc: "white", dotflag: false, dot: true
            })

        }
        else {
            if (this.state.powornumber == true) {
                this.setState({ number: "", disableans: true, dotflag: false, dot: true })
            }
            else {
                this.setState({ pow: "", disableans: true, dot: true })
            }
        }



    }
    clean = () => {
        this.setState({
            message: "Lütfen Klavyeden Bir Sayı Giriniz", flagg: true, disableten: "none", number: "", answer: "", newpow: "", disableten2: "none", disable: true,
            footerdisplay: "flex", disableans: true, flagg: true, explain: "Kuvveti Giriniz", powornumber: true, pow: "", powbgc: "white", dot: true, dotflag: false
        })

    }
    keybort(variable) {
        if (variable == ",") {

            this.setState({ number: this.state.number + variable.toString(), disableten: "flex", dot: true, dotflag: true });
        }
        else {


            if (this.state.flagg == true) {
                if (this.state.powornumber == true) {
                    if (this.state.dotflag == false) {
                        this.setState({ number: this.state.number + variable.toString(), disableten: "flex", disable: false, dot: false });
                    }
                    else
                        this.setState({ number: this.state.number + variable.toString(), disableten: "flex", disable: false });
                }
                else {
                    this.setState({ pow: this.state.number + variable.toString(), disableans: false });
                }
            }
            else {
                if (this.state.powornumber == true) {
                    if (this.state.number.length < 7) {
                        if (this.state.pow != "") {
                            if (this.state.dotflag == false) {


                                this.setState({
                                    number: (this.state.number + variable.toString()), disableans: false, dot: false
                                });
                            }
                            else
                                this.setState({
                                    number: (this.state.number + variable.toString()), disableans: false
                                });
                        }
                        else {
                            if (this.state.dotflag == false) {


                                this.setState({
                                    number: (this.state.number + variable.toString()), dot: false
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
                            pow: (this.state.pow + variable.toString()), disableans: false
                        });
                    }
                    else {
                        this.warn();
                    }
                }


            }
        }
    }
    powset = () => {
        if (this.state.number == "") {

            this.setState(() => ({ message: "Önce Sayıyı Girin" }))

        }
        else {


            this.setState(() => ({ powornumber: !this.state.powornumber, flagg: false }));
            if (this.state.dotflag == true) {
                if (this.state.powornumber == true) {

                    this.setState(() => ({ powbgc: "gray", numbgc: "white", explain: "Sayıyı Giriniz" }));
                }
                else {
                    this.setState(() => ({ powbgc: "white", numbgc: "gray", explain: "Kuvveti Giriniz" }));
                }
            }
            else {
                if (this.state.powornumber == true) {

                    this.setState(() => ({ powbgc: "gray", numbgc: "white", explain: "Sayıyı Giriniz", dot: true }));
                }
                else {
                    this.setState(() => ({ powbgc: "white", numbgc: "gray", explain: "Kuvveti Giriniz", dot: false }));
                }
            }
        }

    }
    science = () => {
        this.setState({ footerdisplay: "none" });
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
        this.setState({ footerdisplay: "flex" });
    }
    render() {
        return (
            <Container>
                <ImageBackground source={require("../../../image/galaxy.jpg")} style={{ width: '100%', height: '100%' }}>
                    <Content style={{ padding: 10 }}>

                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Button disabled={this.state.disableans} onPress={this.science}><Text style={{ fontSize: 30 }}>CEVAP</Text></Button>
                                <Button disabled={this.state.disable} onPress={this.powset}><Text style={{ fontSize: 30, fontStyle: "italic" }}>{this.state.explain}</Text></Button>

                            </View>
                            <Card style={{ marginLeft: 10, marginRight: 10, height: 250 }}>
                                <CardItem>
                                    <Text>{this.state.message}</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Button onPress={this.clean} transparent bordered>
                                            <Icon style={{ fontSize: 30 }} name='trash' />

                                        </Button>
                                        <Text style={{ marginTop: 20, fontSize: 30, marginLeft: 20, backgroundColor: this.state.numbgc }}>{this.state.number}</Text>
                                        <Text style={{
                                            marginTop: 20, fontSize: 30,
                                            display: this.state.disableten,

                                            color: "red"
                                        }}>{this.state.ten}</Text>

                                        <Text style={{
                                            height: 30,
                                            width: 50,
                                            marginTop: 8, fontSize: 20,

                                            display: this.state.disableten,
                                            color: "red",
                                            backgroundColor: this.state.powbgc
                                        }}>{this.state.pow}</Text>



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

                                    <Button style={{ position: "absolute", alignSelf: "flex-end", marginTop: 40 }} onPress={this.clean}><Text style={{ fontSize: 30, fontStyle: "italic" }}>Temizle</Text></Button>

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
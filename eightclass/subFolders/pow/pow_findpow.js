

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Text, Icon, Body, Title, Footer, List, ListItem, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, View, Alert, Image, ScrollView, FlatList, ImageBackground } from 'react-native';
export default class Pow_findpow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showtempnumber: "",
            tempnumber: "",
            leftNumberArray: [""],
            rightNumberArray: [""],
            showleftNumberArray: [""],
            showrightNumberArray: [""],
            storePow: [{ storenumber: "", x: "", key: "" }],
            clearctrl: false,
            storePow2: [],
            btnflag: false,
            footerdisplay: "flex"
        };

    }
    warn = () => {
        this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
    }
    warn2 = () => {
        this.setState({ message: "Lütfen Sayı Girin" });
    }
    cleanOnePart = () => {
        this.setState({
            tempnumber: "", message: "", btnflag: false,
            showtempnumber: "",
            leftNumberArray: [""],
            rightNumberArray: [""],
            showleftNumberArray: [""],
            showrightNumberArray: [""],
            storePow: [{ storenumber: "", x: "", key: "" }],
            storePow2: [],
        });
    }
    keybort = (param) => {
        var cleardoor = this.state.clearctrl;
        if (cleardoor) {
            this.setState({ showtempnumber: "", clearctrl: false, leftNumberArray: [""], rightNumberArray: [""], showleftNumberArray: [""], showrightNumberArray: [""], storePow: [{ storenumber: "", x: "", key: "" }], });
        }
        var num1 = this.state.tempnumber;

        if (num1.length < 4) {
            num1 = num1 + param;
            this.setState({ tempnumber: num1, message: "" });
        }
        else {
            this.warn();
        }
    }
    clean = () => {
        this.setState({
            showtempnumber: "",
            tempnumber: "",
            leftNumberArray: [""],
            rightNumberArray: [""],
            showleftNumberArray: [""],
            showrightNumberArray: [""],
            storePow: [{ storenumber: "", x: "", key: "" }],
            clearctrl: false,
            storePow2: [],
            btnflag: true,
            footerdisplay: "flex"
        });
    }
    callCheckAgain = () => {
        this.checkAgain();
    }
    async checkAgain() {
        if (this.state.showtempnumber != "") {
            await this.setState({
                showleftNumberArray: [""],
                showrightNumberArray: [""],
                storePow: [{ storenumber: "", x: "", key: "" }],
                tempnumber: this.state.showtempnumber,
                leftNumberArray: [""],
                rightNumberArray: [""],
                storePow2: [],
            });
            this.findpow();
        }
        else
            this.findpow();
    }
    findpow = () => {
        this.setState({ showtempnumber: this.state.tempnumber, btnflag: true, footerdisplay: "none" });
        var num1 = this.state.tempnumber;
        if (num1 != "") {
            clearInterval(this.delay);
            clearTimeout(this.delay2);
            this.setState({ clearctrl: true });
            this.setState({ tempnumber: "" });

            i = 2;
            count = 0;
            ind = 0;
            while (num1 >= i) {
                if (num1 % i == 0) {
                    num1 = num1 / i;
                    this.state.leftNumberArray.push("\n");
                    this.state.leftNumberArray.push(num1);
                    this.state.rightNumberArray.push(i);
                    this.state.rightNumberArray.push("\n");
                    this.setState(this.state.leftNumberArray);
                    this.setState(this.state.rightNumberArray);
                }
                else {
                    i++;
                }
            }
            this.settimem();
        }
        else {

            this.warn2();
            this.clean();
        }
        count = 1;
        for (a = 0; a < this.state.rightNumberArray.length; a++) {

            if (this.state.rightNumberArray[a] != "" && this.state.rightNumberArray[a] != "\n") {
                if (this.state.rightNumberArray[a] == this.state.rightNumberArray[a + 2]) {
                    count++;
                }
                else {
                    at = count.toString();
                    if ((a + 2) == this.state.rightNumberArray.length)
                        this.state.storePow.push(({ storenumber: this.state.rightNumberArray[a], x: "", key: at }));
                    else {
                        this.state.storePow.push(({ storenumber: this.state.rightNumberArray[a], x: "x", key: at }));
                    }
                    this.setState(this.state.storePow);
                    var arr = [];
                    this.state.storePow.map(obj => {

                        arr.push(this.state.storePow.indexOf(obj));

                    });

                    this.setState({
                        storePow2: arr
                    });
                    ind++;
                    count = 1;
                }
            }
        }

    }
    settimem() {
        i = 0;
        this.delay = setInterval(function () {
            if (i < this.state.leftNumberArray.length) {
                this.state.showleftNumberArray.push(this.state.leftNumberArray[i]);
                this.setState(this.state.showleftNumberArray);
                this.settimem2(i);
            }
            else {
                this.setState({ btnflag: false, footerdisplay: "flex" });
            }
            i++;
        }.bind(this), 600);
    }
    settimem2(i) {
        this.delay2 = setTimeout(function () {
            this.state.showrightNumberArray.push(this.state.rightNumberArray[i + 1]);
            this.setState(this.state.showrightNumberArray);
        }.bind(this), 0);
    }
    componentWillUnmount() {
        clearInterval(this.delay);
        clearTimeout(this.delay2);
    }
    render() {
        return (
            <Container>
                <ImageBackground source={require("../../../image/galaxy.jpg")} style={{ width: '100%', height: '100%' }}>
                    <Content>
                        <Card style={{ marginLeft: 10, marginRight: 10 }}>
                            <CardItem>
                                <Text>{this.state.message}</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ marginTop: 20, fontSize: 30, marginLeft: 20 }}>{this.state.tempnumber}{this.state.showtempnumber}{this.state.showleftNumberArray}</Text>
                                    <Text style={{ marginTop: 20, backgroundColor: "red", height: 450, width: 5 }}></Text>
                                    <Text style={{ marginTop: 20, fontSize: 30 }}>{this.state.showrightNumberArray}</Text>
                                    <Button onPress={this.callCheckAgain} disabled={this.state.btnflag} style={{ marginTop: 50, marginLeft: 100 }}><Text style={{ fontSize: 20 }}>Kuvvetini Bul</Text></Button>
                                    <Button onPress={this.clean} transparent bordered>
                                        <Icon style={{ fontSize: 30 }} name='trash' />

                                    </Button>
                                </View>
                                <View>
                                    <FlatList horizontal={true}
                                        data={this.state.storePow}
                                        renderItem={({ item }) => {

                                            return (

                                                <View style={{ flexDirection: "row" }}>

                                                    <Text style={{ fontSize: 30 }}>{item.storenumber}</Text>
                                                    <Text style={{ fontSize: 20, marginBottom: 20 }}>{item.key}</Text>
                                                    <Text style={{ fontSize: 30 }}>{item.x}</Text>
                                                </View>
                                            );

                                        }}
                                        // keyExtractor={item => item.key}
                                        at={this.state.storePow2}
                                    />
                                </View>

                            </CardItem>
                        </Card>
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

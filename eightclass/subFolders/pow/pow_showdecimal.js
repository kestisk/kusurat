

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Right, Icon, Body, Title, Footer, Text, Card, CardItem } from 'native-base';
import { Platform, StyleSheet, View, Alert, Image, ScrollView, FlatList, ImageBackground, BackHandler } from 'react-native';
export default class Pow_showdecimal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number1: "1.Sayı", number2: "2.Sayı",
            storenumber1: [{ snumber1: "", key: "", plus: "" }],
            storenumber2: [{ snumber2: "", key: "", plus: "" }],
            storenumber3: [{ snumber3: "", key: "", plus: "" }],
            shownumber1: [{ snumber1: "", key: "", plus: "" }],
            shownumber2: [{ snumber2: "", key: "", plus: "" }],
            shownumber3: [{ snumber3: "", key: "", plus: "" }],
            switchdoor: false, repeat: false, firstTime: true, firstTime2: true,
            cState: "Virgülden Sonraki Sayı",
            numberBackColor: "rgb(142,163,226)", number2BackColor: "white",
            storekey1: [],
            storekey2: [],
            storekey3: [],
            again: false,
            btnflag: true, footerdisplay: "flex",
            mycolor: "rgb(211,211,211)",
            mycolordis: "white",
            backUpflag: false,
        }
    }
    warn = () => {
        this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
    }
    clean = () => {
        this.setState({
            number1: "1.Sayı", number2: "2.Sayı",
            storenumber1: [{ snumber1: "", key: "", plus: "" }],
            storenumber2: [{ snumber2: "", key: "", plus: "" }],
            storenumber3: [{ snumber3: "", key: "", plus: "" }],
            shownumber1: [{ snumber1: "", key: "", plus: "" }],
            shownumber2: [{ snumber2: "", key: "", plus: "" }],
            shownumber3: [{ snumber3: "", key: "", plus: "" }],
            switchdoor: false, repeat: false, firstTime: true, firstTime2: true,
            cState: "Virgülden Sonraki Sayı",
            numberBackColor: "rgb(142,163,226)", number2BackColor: "white",
            storekey1: [],
            storekey2: [],
            storekey3: [],
            again: false,
            btnflag: true, footerdisplay: "flex",
            backUpflag: false,
        });
    }
    cleanOnePart = () => {
        if (this.state.switchdoor) {
            if (this.state.number2.length < 5) {
                var x = this.state.number2;
                len = x.length - 1;
                x = [...x].slice(0, (x.length - 1));
                this.setState({
                    firstTime2: true, number2: x, message: "", btnflag: true, repeat: false, backUpflag: false,
                    shownumber1: [{ snumber1: "", key: "", plus: "" }],
                    shownumber2: [{ snumber2: "", key: "", plus: "" }]
                });
                if (len == 0)
                    this.setState({ number2: "2.Sayı", mycolor: "rgb(211,211,211)", backUpflag: false, });
            }


        }
        else {
            if (this.state.number1.length < 5) {
                var x = this.state.number1;
                len = x.length - 1;
                x = [...x].slice(0, (x.length - 1));
                this.setState({
                    firstTime: true, number1: x, message: "", btnflag: true, repeat: false, backUpflag: false,
                    shownumber1: [{ snumber1: "", key: "", plus: "" }],
                    shownumber2: [{ snumber2: "", key: "", plus: "" }]
                });
                if (len == 0)
                    this.setState({ number1: "1.Sayı", mycolor: "rgb(211,211,211)", backUpflag: false, });
            }

        }
    }
    keybort = (param) => {

        if (this.state.repeat) {
            this.clean();
            var num1 = "";
            num1 = num1 + param;
            this.setState({ number1: num1, message: "", repeat: false, btnflag: false });

        }
        else {
            if (this.state.switchdoor) {
                if (this.state.firstTime2) {
                    var num1 = "";
                    this.setState({ firstTime2: false });
                }
                else
                    var num1 = this.state.number2;

                if (num1.length < 4) {
                    num1 = num1 + param;
                    this.setState({ number2: num1, message: "", number2BackColor: "rgb(142,163,226)", numberBackColor: "white" });
                    if (this.state.number1.length > 0 && this.state.number1.length < 6)
                        this.setState({ btnflag: false, mycolor: "rgb(75,0,130)", mycolordis: "rgb(188,143,143)" });
                }
                else {
                    this.setState({ btnflag: false });
                    this.warn();
                }
            }
            else {
                if (this.state.firstTime) {
                    var num1 = "";
                    this.setState({ firstTime: false });
                }
                else
                    var num1 = this.state.number1;

                if (num1.length < 4) {
                    num1 = num1 + param;
                    this.setState({ number1: num1, message: "", numberBackColor: "rgb(142,163,226)", number2BackColor: "white" });
                    if (this.state.number2.length > 0 && this.state.number2.length < 6)
                        this.setState({ btnflag: false, mycolor: "rgb(75,0,130)", mycolordis: "rgb(188,143,143)" });
                }
                else {
                    this.setState({ btnflag: false });
                    this.warn();
                }
            }
        }
    }
    changeState = (a) => {
        if (a == 1)
            this.setState({ numberBackColor: "rgb(142,163,226)", number2BackColor: "white", switchdoor: false, cState: "Virgülden Sonraki Sayı" });
        else
            this.setState({ numberBackColor: "white", number2BackColor: "rgb(142,163,226)", switchdoor: true, cState: "Virgülden Önceki Sayı" });
    }
    callCheckAgain = () => {
        this.checkAgain();
    }
    async checkAgain() {
        if (this.state.again == true) {
            await this.setState({
                shownumber1: [{ snumber1: "", key: "", plus: "" }],
                shownumber2: [{ snumber2: "", key: "", plus: "" }],
                shownumber3: [{ snumber3: "", key: "", plus: "" }],
                again: false
            });
            this.solution();
        }
        else
            this.solution();
    }
    backup = () => {
        var num1 = this.state.number1;
        var num2 = this.state.number2;
        var n1 = parseInt(num1);
        var n2 = parseInt(num2);
        if (this.state.backUpflag) {
            this.delay2 = setTimeout(function () {
                this.setState(() => ({
                    message: "", btnflag: true, mycolor: "rgb(211,211,211)", backUpflag: false,
                    fracanswwer: "", answer: " = ? ", signanswer: "",
                    storenumber1: [{ snumber1: "", key: "", plus: "" }],
                    storenumber2: [{ snumber2: "", key: "", plus: "" }],
                    storenumber3: [{ snumber3: "", key: "", plus: "" }],
                    shownumber1: [{ snumber1: "", key: "", plus: "" }],
                    shownumber2: [{ snumber2: "", key: "", plus: "" }],
                    shownumber3: [{ snumber3: "", key: "", plus: "" }],
                    storekey1: [],
                    storekey2: [],
                    storekey3: [],
                }));

                this.solution();
            }.bind(this), 10);

        }
        else {
            this.solution();
            this.setState({ btnflag: true, mycolor: "rgb(211,211,211)", message: "" })
        }
    }
    solution = () => {
        //repeat true yap
        clearInterval(this.delay);
        clearInterval(this.delay2);
        clearInterval(this.delay3);
        this.setState({ footerdisplay: "none", backUpflag: true });
        var num1 = [... this.state.number1];
        var num2 = [... this.state.number2];
        num1 = num1.reverse();
        for (i = this.state.number1.length - 1; i >= 0; i--) {
            this.state.storenumber1.push({
                snumber1: (num1[i] + " x 10"), key: (i).toString(), plus: " + "
            });
            this.state.storenumber3.push({
                snumber3: (num1[i] + " x 10"), key: (i).toString(), plus: " + "
            });
        }

        for (i = 0; i < this.state.number2.length; i++) {
            var ten = Math.pow(10, i + 1);
            ten = parseInt(ten);
            if (i + 1 == this.state.number2.length) {
                this.state.storenumber2.push({
                    snumber2: (num2[i] + " x 1/"), key: ten.toString(), plus: ""
                });
                this.state.storenumber1.push({
                    snumber1: (num1[i] + " x 10"), key: ("-" + (i + 1)), plus: ""
                });
            }
            else {
                this.state.storenumber2.push({
                    snumber2: (num2[i] + " x 1/"), key: ten.toString(), plus: " + "
                });
                this.state.storenumber1.push({
                    snumber1: (num1[i] + " x 10"), key: ("-" + (i + 1)), plus: " + "
                });
            }
        }

        this.setState(this.state.storenumber1);
        this.setState(this.state.storenumber2);
        this.setState(this.state.storenumber3);
        this.setState({ repeat: true, again: true });
        this.settimem();


    }
    settimem() {
        i = 1;
        this.delay = setInterval(function () {
            if (i < this.state.storenumber1.length) {
                var arr = [];
                this.state.shownumber1.push(this.state.storenumber1[i]);
                this.setState(this.state.shownumber1);
                this.state.shownumber1.map(obj => {
                    arr.push(this.state.shownumber1.indexOf(obj));
                });
                this.setState({ storekey1: arr });
            }
            else {
                clearInterval(this.delay);
                this.settimem3();
            }

            i++;
        }.bind(this), 500);
    }
    settimem2() {
        i = 0;
        this.delay2 = setInterval(function () {
            if (i < this.state.storenumber2.length) {
                var arr2 = [];
                this.state.shownumber2.push(this.state.storenumber2[i]);
                this.setState(this.state.shownumber2);
                this.state.shownumber2.map(obj => {
                    arr2.push(this.state.shownumber2.indexOf(obj));
                });
                this.setState({ storekey2: arr2 });
            }
            else {
                clearInterval(this.delay2);
                this.setState({ btnflag: false, mycolor: "rgb(75,0,130)", mycolordis: "rgb(188,143,143)", footerdisplay: "flex" });

            }
            i++;
        }.bind(this), 500);

    }
    settimem3() {
        i = 0;
        this.delay3 = setInterval(function () {
            if (i < this.state.storenumber3.length) {
                var arr3 = [];
                this.state.shownumber3.push(this.state.storenumber3[i]);
                this.setState(this.state.shownumber3);
                this.state.shownumber3.map(obj => {
                    arr3.push(this.state.shownumber3.indexOf(obj));
                });
                this.setState({ storekey3: arr3 });
            }
            else {
                clearInterval(this.delay3);
                this.settimem2();

            }
            i++;
        }.bind(this), 500);

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
                            <Title style={styles.heade}>ONDALIK GÖSTERİM</Title>
                        </Body>
                        <Right style={{ flex: 1 }}>
                            <Button transparent onPress={this.tys}>
                                <Icon style={{ color: "rgb(142,163,226)", fontSize: 30 }} type="FontAwesome" name="edit" />
                            </Button>
                        </Right>

                    </Header>
                    <Content style={{ padding: 10 }}>
                        <View style={{ flexDirection: "column", marginTop: 10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Button onPress={this.backup} disabled={this.state.btnflag} style={{ backgroundColor: this.state.mycolor, borderRadius: 30 }} >
                                        <Text style={{ fontSize: 20, marginTop: 10, alignSelf: "center", color: this.state.mycolordis }} >
                                            <Icon style={{ fontSize: 50, color: this.state.mycolordis }} type="EvilIcons" name="play" />
                                            BASLA
                                        </Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        <View style={{ minHeight: 350, width: '100%', backgroundColor: "white", flexDirection: "column" }}>
                            <View style={{ flexDirection: "column" }}>
                                <Text>AÇIKLAMA BURAYA2</Text>
                                <Text>{this.state.message}</Text>
                                <View style={{ flexDirection: "column", marginTop: 10 }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text onPress={() => { this.changeState(1) }} style={{ fontSize: 30, backgroundColor: this.state.numberBackColor }}>
                                            {this.state.number1}
                                        </Text>
                                        <Text style={{ fontSize: 30 }}> , </Text>
                                        <Text onPress={() => { this.changeState(2) }} style={{ fontSize: 30, backgroundColor: this.state.number2BackColor }}>
                                            {this.state.number2}
                                        </Text>

                                    </View>
                                    <View style={{ flexDirection: "column" }}>
                                        <View>
                                            <FlatList horizontal={true}
                                                data={this.state.shownumber1}
                                                renderItem={({ item }) => {
                                                    return (
                                                        <View style={{ flexDirection: "row" }}>
                                                            <Text style={{ fontSize: 15 }}>{item.snumber1}</Text>
                                                            <Text style={{ fontSize: 8, marginBottom: 10 }}>{item.key}</Text>
                                                            <Text style={{ fontSize: 15 }}>{item.plus}</Text>
                                                        </View>
                                                    );
                                                }}
                                                // keyExtractor={item => item.key}
                                                at={this.state.storekey1}
                                            />
                                        </View>
                                    </View>
                                    <Text>-------------------------</Text>

                                    <View style={{ flexDirection: "column" }}>
                                        <View>
                                            <FlatList horizontal={true}
                                                data={this.state.shownumber3}
                                                renderItem={({ item }) => {
                                                    return (
                                                        <View style={{ flexDirection: "row" }}>
                                                            <Text style={{ fontSize: 15 }}>{item.snumber3}</Text>
                                                            <Text style={{ fontSize: 8, marginBottom: 10 }}>{item.key}</Text>
                                                            <Text style={{ fontSize: 15 }}>{item.plus}</Text>
                                                        </View>
                                                    );
                                                }}
                                                // keyExtractor={item => item.key}
                                                at={this.state.storekey3}
                                            />
                                        </View>
                                        <View>
                                            <FlatList horizontal={true}
                                                data={this.state.shownumber2}
                                                renderItem={({ item }) => {
                                                    return (
                                                        <View style={{ flexDirection: "row" }}>
                                                            <Text style={{ fontSize: 15 }}>{item.snumber2}</Text>
                                                            <Text style={{ fontSize: 15 }}>{item.key}</Text>
                                                            <Text style={{ fontSize: 15 }}>{item.plus}</Text>
                                                        </View>
                                                    );
                                                }}
                                                // keyExtractor={item => item.key}
                                                at={this.state.storekey2}
                                            />
                                        </View>

                                    </View>
                                </View>
                            </View>
                            <Button style={{ position: "absolute", alignSelf: "flex-end" }} onPress={this.clean} transparent >
                                <Icon style={{ fontSize: 50, color: "rgb(142,163,226)" }} type="FontAwesome" name='refresh' />
                            </Button>
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
                            <Icon style={{ color: "rgb(142,163,226)", fontSize: 30 }} name='backspace' />
                        </Button>

                    </Footer>

                </Container >
            </ImageBackground >
        );
    }
    componentWillUnmount() {
        clearInterval(this.delay);
        clearTimeout(this.delay2);
        clearTimeout(this.delay3);
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
        this.props.navigation.navigate("Pow_showdecimalTYSPages");
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

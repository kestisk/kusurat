import React, { Component } from "react";
import {
    Container,
    Button,
    Text,
    Header,
    Left,
    Body,
    Title,
    Icon,
    View,
    Footer,
    Content,
    ListItem,
    List,
    Card,
    CardItem,
    Right
} from "native-base";
import { Platform, ImageBackground, BackHandler, StyleSheet, ScrollView } from "react-native";
export default class EbobPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", zero: "0",
            message: "",
            tempnumber1: "", tempnumber2: "", tempnumber3: "",
            number1: [{ no1: "" }],
            number2: [{ no1: "" }],
            number3: [{ no1: "" }],
            shownumber1: [{ no1: "12" }],
            shownumber2: [{ no1: "" }],
            shownumber3: [{ no1: "" }],
            backColorT1: "rgb(142,163,226)", backColorT2: "white", backColorT3: "white",
            door: "1", maxdoor: "2",
            que1: "1.Sayı", ctrl: [{ c: "" }], cleardoor: false,
            rightarray: [{ rightNumber: "", colorKey: "" }],
            showrightarray: [{ rightNumber: "", colorKey: "" }],
            returnebob: "",
            backUpflag: false,
            btnflag: true,
            mycolor: "rgb(211,211,211)",

            mycolordis: "white",
            sayi2: "", sayi3: "", footerdisplay: "flex"
        }
    }
    warn = () => {
        this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
    }
    clean = () => {
        clearInterval(this.delay);
        clearTimeout(this.delay2);
        this.setState({
            message: "",
            tempnumber1: "", tempnumber2: "", tempnumber3: "",
            number1: [{ no1: "" }],
            number2: [{ no1: "" }],
            number3: [{ no1: "" }],
            shownumber1: [{ no1: "" }],
            shownumber2: [{ no1: "" }],
            shownumber3: [{ no1: "" }],
            backColorT1: "rgb(142,163,226)", backColorT2: "white", backColorT3: "white",
            door: "1", maxdoor: "2",
            que1: "1.Sayı", ctrl: [{ c: "" }], cleardoor: false,
            rightarray: [{ rightNumber: "", colorKey: "" }],
            showrightarray: [{ rightNumber: "", colorKey: "" }],
            returnebob: "",
            backUpflag: false,
            btnflag: true,
            sayi2: "", sayi3: "", footerdisplay: "flex"
        });
    }
    checkState = () => {
        if (this.state.tempnumber2 == "" && this.state.tempnumber3 == "" && this.state.tempnumber1 == "")
            this.clean();
        else if (this.state.tempnumber2 != "" && this.state.tempnumber3 == "" && this.state.tempnumber1 == "")
            this.setState({

                sayi2: "2.Sayı", sayi3: "3.Sayı"
            });
        else if (this.state.tempnumber2 == "" && this.state.tempnumber3 != "" && this.state.tempnumber1 == "")
            this.setState({

                sayi2: "2.Sayı", sayi3: "3.Sayı"
            });
        else if (this.state.tempnumber2 != "" && this.state.tempnumber3 != "" && this.state.tempnumber1 == "")
            this.setState({

                sayi2: "2.Sayı", sayi3: "3.Sayı"
            });
        else if (this.state.tempnumber2 == "" && this.state.tempnumber3 == "" && this.state.tempnumber1 != "")
            this.setState({

                sayi2: "2.Sayı", sayi3: ""
            });

        else if (this.state.tempnumber2 == "" && this.state.tempnumber3 != "" && this.state.tempnumber1 != "")
            this.setState({

                sayi2: "2.Sayı", sayi3: "3.Sayı"
            });
        else if (this.state.tempnumber2 != "" && this.state.tempnumber3 == "" && this.state.tempnumber1 != "")
            this.setState({

                sayi2: "2.Sayı", sayi3: "3.Sayı"
            });
        else if (this.state.tempnumber2 != "" && this.state.tempnumber3 != "" && this.state.tempnumber1 != "")
            this.setState({

                sayi2: "2.Sayı", sayi3: "3.Sayı"
            });

    }
    firstNum = () => {
        this.setState({
            maxdoor: "2", door: "1",
            backUpflag: false,
            showrightarray: [""], shownumber1: [""], shownumber2: [""], shownumber3: [""],
            backColorT1: "rgb(142,163,226)", backColorT2: "white", backColorT3: "white",
            message: "", number1: [""], number2: [""], number3: [""], rightarray: [""]
        });
        this.checkState();
    }
    twoNum = () => {
        this.setState({
            maxdoor: "2", door: "2",
            backUpflag: false,
            showrightarray: [""], shownumber1: [""], shownumber2: [""], shownumber3: [""],
            backColorT1: "white", backColorT2: "rgb(193,205,205)", backColorT3: "white",
            message: "", number1: [""], number2: [""], number3: [""], rightarray: [""]
        });
        this.checkState();

    }
    threeNum = () => {
        this.setState({
            maxdoor: "3", door: "3",
            backUpflag: false,
            showrightarray: [""], shownumber1: [""], shownumber2: [""], shownumber3: [""],
            backColorT1: "white", backColorT2: "white", backColorT3: "rgb(193,205,205)",
            message: "", number1: [""], number2: [""], number3: [""], rightarray: [""]
        });
        this.checkState();
    }
    async cleanOnePart(a) {
        if (a == 0)
            await this.cleanOnePart2();
    }
    cleanOnePart2 = () => {
        var doorctrl = this.state.door;
        var maxdoorctrl = this.state.maxdoor;
        if (maxdoorctrl == "2") {
            if (doorctrl == "1")
                this.setState({ tempnumber1: "", message: "", btnflag: true, mycolor: "rgb(211,211,211)" });

            else if (doorctrl == "2")
                this.setState({ tempnumber2: "", message: "", btnflag: true, mycolor: "rgb(211,211,211)" });
        }
        if (maxdoorctrl == "3") {
            this.setState({ tempnumber3: "", message: "", btnflag: true, mycolor: "rgb(211,211,211)" });
        }
        this.checkState();
    }
    async keybort(param) {
        var clearctrl = this.state.cleardoor;
        if (clearctrl) {
            await this.clean();

        }
        var doorctrl = this.state.door;
        var maxdoorctrl = this.state.maxdoor;
        var num1 = this.state.tempnumber1;
        var num2 = this.state.tempnumber2;
        var num3 = this.state.tempnumber3;
        if (maxdoorctrl == "2") {
            if (doorctrl == "1") {
                if (num1.length < 3) {
                    num1 = num1 + param;
                    this.setState({ tempnumber1: num1 });
                    if (this.state.tempnumber2 == "")
                        this.setState({ sayi2: "2.Sayı" });
                }
                else
                    this.warn();
            }
            else if (doorctrl == "2") {
                if (num2.length < 3) {
                    num2 = num2 + param;
                    this.setState({ tempnumber2: num2 });
                    if (num2.length > 0)
                        this.setState({ sayi3: "3.Sayı" });
                }
                else
                    this.warn();
            }
        }
        if (maxdoorctrl == "3") {
            if (num3.length < 3) {
                num3 = num3 + param;
                this.setState({ tempnumber3: num3, maxdoor: "3", door: "3" });
            }
            else
                this.warn();

        }
        if (this.state.tempnumber3 != "")
            this.setState({ maxdoor: "3" });
        if ((this.state.tempnumber1 != "" && this.state.tempnumber2 != "" && this.state.tempnumber3 == "") || (this.state.tempnumber1 != "" && this.state.tempnumber2 != "" && this.state.tempnumber3 != ""))
            this.setState({ btnflag: false, mycolor: "rgb(75,0,130)", mycolordis: "rgb(188,143,143)" });


    }
    backup = () => {
        var num1 = this.state.tempnumber1;
        var num2 = this.state.tempnumber2;
        var num3 = this.state.tempnumber3;
        var n1 = parseInt(num1);
        var n2 = parseInt(num2);
        var n3 = parseInt(num3);
        var maxdoorctrl = this.state.maxdoor;
        if (maxdoorctrl == "2" && (n1 == 0 || n2 == 0)) {
            this.setState({ message: "Sayı Sıfır Girilemez" });
        }
        else if (maxdoorctrl == "3" && (n1 == 0 || n2 == 0 || n3 == 0)) {
            this.setState({ message: "Sayı Sıfır Girilemez" });
        }
        else {

            if (this.state.backUpflag) {
                this.delay2 = setTimeout(function () {
                    this.setState(() => ({ message: "", btnflag: true, mycolor: "rgb(211,211,211)", backUpflag: false, tempnumber1: this.state.shownumber1[1].no1, tempnumber2: this.state.shownumber2[1].no1 }));

                    if (maxdoorctrl == "3")
                        this.setState(() => ({ tempnumber3: this.state.shownumber3[1].no1 }));

                    this.setState(() => ({ showrightarray: [""], shownumber1: [""], shownumber2: [""], shownumber3: [""], message: "", number1: [""], number2: [""], number3: [""], rightarray: [""] }));

                    this.ebob();
                }.bind(this), 10);

            }
            else {
                this.ebob();
                this.setState({ btnflag: true, mycolor: "rgb(211,211,211)", message: "" })
            }
        }
    }
    ebob = () => {

        var num1 = this.state.tempnumber1;
        var num2 = this.state.tempnumber2;
        var num3 = this.state.tempnumber3;
        var doorctrl = this.state.door;
        var maxdoorctrl = this.state.maxdoor;
        if (this.state.tempnumber3 != "")
            this.setState({ que1: "", sayi2: "", sayi3: "" });
        if (maxdoorctrl == "2" && num1 != "" && num2 != "") {

            clearInterval(this.delay2);
            clearTimeout(this.delay);
            this.setState({ footerdisplay: "none", que1: "", sayi2: "", sayi3: "", backUpflag: true, cleardoor: true, door: "1", backColorT1: "rgb(142,163,226)", backColorT2: "white", backColorT3: "white", message: "" });
            this.state.number1.push({ no1: num1 });
            this.state.number2.push({ no1: num2 });
            this.setState({ tempnumber1: "", tempnumber2: "", tempnumber3: "" });
            var tempebob = 1;
            num1 = parseInt(num1, 10);
            num2 = parseInt(num2, 10);
            var max = (num1 > num2) ? (max = num1) : (max = num2);
            var ctrl1 = null;
            var ctrl2 = null;
            for (i = 2; i <= max; i++) {
                ctrl1 = num1 % i;
                ctrl2 = num2 % i;
                if (ctrl1 == 0 && ctrl2 != 0) {
                    this.state.rightarray.push({ rightNumber: i, key: "2" });
                    this.setState(this.state.rightarray);
                    num1 /= i;
                    this.state.number1.push({ no1: num1 });
                    this.state.number2.push({ no1: num2 });
                    this.setState(this.state.number1);
                    this.setState(this.state.number2);
                    i--;
                }
                else if (ctrl2 == 0 && ctrl1 != 0) {
                    this.state.rightarray.push({ rightNumber: i, key: "2" });

                    this.setState(this.state.rightarray);
                    num2 /= i;
                    this.state.number1.push({ no1: num1 });
                    this.state.number2.push({ no1: num2 });
                    this.setState(this.state.number1);
                    this.setState(this.state.number2);
                    i--;
                }
                else if (ctrl2 == 0 && ctrl1 == 0) {
                    this.state.rightarray.push({ rightNumber: i, key: "1" });

                    this.setState(this.state.rightarray);
                    tempebob *= i;

                    num2 /= i;
                    num1 /= i;
                    this.state.number1.push({ no1: num1 });
                    this.state.number2.push({ no1: num2 });
                    this.setState(this.state.number1);
                    this.setState(this.state.number2);
                    i--;
                }

            }
            this.setState({ returnebob: tempebob });
            this.settimem();
        }
        else if (maxdoorctrl == "3" && num1 != "" && num2 != "" && num3 != "") {
            clearInterval(this.delay12);
            clearTimeout(this.delay22);
            this.setState({
                footerdisplay: "none",
                backUpflag: true, message: "",
                cleardoor: true, door: "1",
                backColorT1: "rgb(142,163,226)", backColorT2: "white", backColorT3: "white"
            });
            this.state.number1.push({ no1: this.state.tempnumber1 });
            this.state.number2.push({ no1: this.state.tempnumber2 });
            this.state.number3.push({ no1: this.state.tempnumber3 });
            this.setState({ tempnumber1: "", tempnumber2: "", tempnumber3: "" });
            var tempebob = 1;
            num1 = parseInt(num1, 10);
            num2 = parseInt(num2, 10);
            num3 = parseInt(num3, 10);
            var ctrl1 = null;
            var ctrl2 = null;
            var ctrl3 = null;
            var max = 0;
            if (num1 > num2 && num1 > num3)
                max = num1;
            else if (num2 > num1 && num2 > num3)
                max = num2;
            else if (num3 > num2 && num3 > num1)
                max = num3;
            else if (num1 == num2 && num1 == num3)
                max = num3;
            for (i = 2; i <= max; i++) {
                ctrl1 = num1 % i;
                ctrl2 = num2 % i;
                ctrl3 = num3 % i;

                if (ctrl1 == 0 && ctrl2 != 0) {
                    this.state.rightarray.push({ rightNumber: i, key: "2" });

                    this.setState(this.state.rightarray);
                    num1 /= i;
                    if (ctrl3 == 0) {
                        num3 /= i;
                    }
                    this.state.number1.push({ no1: num1 });
                    this.state.number2.push({ no1: num2 });
                    this.state.number3.push({ no1: num3 });
                    this.setState(this.state.number3);
                    this.setState(this.state.number1);
                    this.setState(this.state.number2);
                    i--;
                }
                else if (ctrl2 == 0 && ctrl1 != 0) {
                    this.state.rightarray.push({ rightNumber: i, key: "2" });
                    this.setState(this.state.rightarray);
                    num2 /= i;
                    if (ctrl3 == 0) {
                        num3 /= i;
                    }
                    this.state.number1.push({ no1: num1 });
                    this.state.number2.push({ no1: num2 });
                    this.state.number3.push({ no1: num3 });
                    this.setState(this.state.number3);
                    this.setState(this.state.number1);
                    this.setState(this.state.number2);
                    i--;
                }
                else if (ctrl3 == 0 && ctrl1 != 0 && ctrl2 != 0) {
                    this.state.rightarray.push({ rightNumber: i, key: "2" });

                    this.setState(this.state.rightarray);
                    num3 /= i;
                    this.state.number1.push({ no1: num1 });
                    this.state.number2.push({ no1: num2 });
                    this.state.number3.push({ no1: num3 });
                    this.setState(this.state.number1);
                    this.setState(this.state.number2);
                    this.setState(this.state.number3);
                    i--;
                }
                else if (ctrl2 == 0 && ctrl1 == 0) {
                    num2 /= i;
                    num1 /= i;
                    if (ctrl3 == 0) {
                        this.state.rightarray.push({ rightNumber: i, key: "1" });
                        tempebob *= i;

                        num3 /= i;
                    }
                    else
                        this.state.rightarray.push({ rightNumber: i, key: "2" });

                    this.setState(this.state.rightarray);
                    this.state.number1.push({ no1: num1 });
                    this.state.number2.push({ no1: num2 });
                    this.state.number3.push({ no1: num3 });
                    this.setState(this.state.number1);
                    this.setState(this.state.number2);
                    this.setState(this.state.number3);
                    i--;
                }
            }
            this.setState({ returnebob: tempebob });
            this.settimem12();
        }
        else {
            this.setState({ message: "Bosluk Birakmayiniz" });
        }


    }

    settimem() {
        i = 1;
        this.delay = setInterval(function () {
            if (i < this.state.number1.length && i < this.state.number2.length) {
                this.state.shownumber1.push(this.state.number1[i]);
                this.setState(this.state.shownumber1);
                this.state.shownumber2.push(this.state.number2[i]);
                this.setState(this.state.shownumber2);
                this.settimem2(i);
            }
            else if (i < this.state.number1.length && i > this.state.number2.length) {
                this.state.shownumber1.push(this.state.number1[i]);
                this.setState(this.state.shownumber1);
                this.settimem2(i);
            }
            else if (i < this.state.number2.length && i > this.state.number1.length) {
                this.state.shownumber2.push(this.state.number2[i]);
                this.setState(this.state.shownumber2);
                this.settimem2(i);
            }
            else {
                clearInterval(this.delay);
                clearTimeout(this.delay2);
                this.setState({ btnflag: false, mycolor: "rgb(75,0,130)", mycolordis: "rgb(188,143,143)", footerdisplay: "flex" });
            }
            i++;
        }.bind(this), 1000);
    }
    settimem2(i) {
        this.delay2 = setTimeout(function () {
            if (i < this.state.rightarray.length) {
                this.state.showrightarray.push(this.state.rightarray[i]);
                this.setState(this.state.showrightarray);
            }
        }.bind(this), 0);
    }
    settimem12() {
        i = 1;
        this.delay12 = setInterval(function () {
            if (i < this.state.number1.length && i < this.state.number2.length) {
                if (i < this.state.number3.length) {
                    this.state.shownumber3.push(this.state.number3[i]);
                    this.setState(this.state.shownumber3);
                }
                this.state.shownumber1.push(this.state.number1[i]);
                this.setState(this.state.shownumber1);
                this.state.shownumber2.push(this.state.number2[i]);
                this.setState(this.state.shownumber2);
                this.settimem22(i);
            }
            else if (i < this.state.number1.length && i > this.state.number2.length) {
                if (i < this.state.number3.length) {
                    this.state.shownumber3.push(this.state.number3[i]);
                    this.setState(this.state.shownumber3);
                }
                this.state.shownumber1.push(this.state.number1[i]);
                this.setState(this.state.shownumber1);
                this.settimem22(i);
            }
            else if (i < this.state.number2.length && i > this.state.number1.length) {
                if (i < this.state.number3.length) {
                    this.state.shownumber3.push(this.state.number3[i]);
                    this.setState(this.state.shownumber3);
                }
                this.state.shownumber2.push(this.state.number2[i]);
                this.setState(this.state.shownumber2);
                this.settimem22(i);
            }
            else if (i > this.state.number2.length && i > this.state.number1.length) {
                if (i < this.state.number3.length) {
                    this.state.shownumber3.push(this.state.number3[i]);
                    this.setState(this.state.shownumber3);
                }
                this.settimem22(i);
            }
            else {
                clearInterval(this.delay12);
                clearTimeout(this.delay22);
                this.setState({ btnflag: false, mycolor: "rgb(75,0,130)", mycolordis: "rgb(188,143,143)", footerdisplay: "flex" });
            }
            i++;
        }.bind(this), 1000);
    }
    settimem22(i) {
        this.delay22 = setTimeout(function () {
            if (i < this.state.rightarray.length) {
                this.state.showrightarray.push(this.state.rightarray[i]);
                this.setState(this.state.showrightarray);
            }

        }.bind(this), 0);
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
                            <Title style={styles.heade}>KÜSUR-AT</Title>
                        </Body>
                        <Right style={{ flex: 1 }}>
                            <Button transparent onPress={this.tys}>
                                <Icon style={{ color: "rgb(142,163,226)", fontSize: 30 }} type="FontAwesome" name="edit" />
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <View style={{ flexDirection: "column", marginTop: 10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 30, color: "white", marginLeft: 50, marginRight: 10 }}>EBOB</Text>

                                <Button style={{ backgroundColor: this.state.mycolor }} rounded disabled={this.state.btnflag} onPress={this.backup} ><Text style={{ fontSize: 20, alignSelf: "center", color: this.state.mycolordis }}><Icon style={{ fontSize: 50, color: this.state.mycolordis }} type="EvilIcons" name="play" />BASLA</Text></Button>
                                <Text style={{ fontSize: 30, color: "white" }}>{this.state.returnebob}</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 10, marginRight: 10, marginTop: 5 }}>
                            <View style={{ minHeight: 350, width: '100%', backgroundColor: "white", flexDirection: "column" }}>
                                <View style={{ marginTop: 10 }}>
                                    <Text>{this.state.message}</Text>
                                    <View style={{ flexDirection: "column" }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <View style={{ flexDirection: "column" }}>
                                                <Text onPress={this.firstNum}>{this.state.que1}</Text>
                                                <Text onPress={this.firstNum} style={{ color: "black", fontSize: 25, backgroundColor: this.state.backColorT1 }}>{this.state.tempnumber1}</Text>
                                            </View>
                                            <List dataArray={this.state.shownumber1}
                                                renderRow={(item) =>
                                                    <ListItem style={{ borderColor: "white" }}>
                                                        <Text style={{ color: "black", fontSize: 25 }}>{item.no1}</Text>
                                                    </ListItem>
                                                }>
                                            </List>
                                            <View style={{ flexDirection: "column" }}>
                                                <Text onPress={this.twoNum}>{this.state.sayi2}</Text>
                                                <Text onPress={this.twoNum} style={{ color: "black", fontSize: 25, backgroundColor: this.state.backColorT2 }}>{this.state.tempnumber2}</Text>
                                            </View>
                                            <List dataArray={this.state.shownumber2}
                                                renderRow={(item) =>
                                                    <ListItem style={{ borderColor: "white" }}>
                                                        <Text style={{ color: "black", fontSize: 25 }}>{item.no1}</Text>
                                                    </ListItem>
                                                }>
                                            </List>
                                            <View style={{ flexDirection: "column", marginTop: 10 }}>
                                                <Text onPress={this.threeNum} >{this.state.sayi3}</Text>
                                                <Text onPress={this.threeNum} style={{ color: "black", fontSize: 25, backgroundColor: this.state.backColorT3 }}>{this.state.tempnumber3}</Text>
                                            </View>
                                            <List dataArray={this.state.shownumber3}
                                                renderRow={(item) =>
                                                    <ListItem style={{ borderColor: "white" }}>
                                                        <Text style={{ color: "black", fontSize: 25 }}>{item.no1}</Text>
                                                    </ListItem>
                                                }>
                                            </List>
                                            <Text style={{ marginTop: 20, backgroundColor: "rgb(25,25,112)", height: 400, width: 5 }}></Text>
                                            <List dataArray={this.state.showrightarray}
                                                renderRow={(item) =>
                                                    <ListItem style={{ borderColor: "white" }}>
                                                        <Text style={{ color: "white", fontSize: 25, fontWeight: "bold", color: (item.key == "1") ? "rgb(138,43,226)" : "#191970" }}>{item.rightNumber}</Text>
                                                        <Icon style={{ fontSize: 25, color: (item.key == "1") ? "rgb(138,43,226)" : "#191970", borderColor: "white", display: (item.key == "1") ? "flex" : "none" }} type="FontAwesome" name='check' />
                                                    </ListItem>
                                                }>
                                            </List>

                                        </View>

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
                        <Button style={styles.footerbtn} rounded onPress={() => { this.cleanOnePart(0) }}>
                            <Icon style={{ fontSize: 30 }} name='trash' />
                        </Button>

                    </Footer>

                </Container >
            </ImageBackground >
        );
    }
    componentWillUnmount() {
        clearInterval(this.delay);
        clearTimeout(this.delay2);
        clearInterval(this.delay12);
        clearTimeout(this.delay22);
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
        this.props.navigation.navigate("ebob_ekokPages");
        return true;
    }

    back = () => {
        this.props.navigation.navigate("ebob_ekokPages");
    };
    tys = () => {
        this.props.navigation.navigate("EbobPageTYSPages");
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
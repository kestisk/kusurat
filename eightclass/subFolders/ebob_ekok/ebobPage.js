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
    CardItem
} from "native-base";
import { Platform, ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
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
            shownumber1: [{ no1: "" }],
            shownumber2: [{ no1: "" }],
            shownumber3: [{ no1: "" }],
            backColorT1: "green", backColorT2: "white", backColorT3: "white",
            door: "1", maxdoor: "2", doorstate: "Ikinci Sayiya Geç",
            que1: "1.Sayı", que2: "", que3: "", ctrl: [{ c: "" }], cleardoor: false,
            rightarray: [{ rightNumber: "", colorKey: "" }],
            showrightarray: [{ rightNumber: "", colorKey: "" }],
            returnebob: "",
            backUpflag: false,
            btnflag: true,
            twonumBColor: null, threenumBColor: null, firstnumBColor: "green",
            iconname: null, iconname2: null, iconname1: null,
            btn2disable: true, btn3disable: true,
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
            backColorT1: "green", backColorT2: "white", backColorT3: "white",
            door: "1", maxdoor: "2",
            que1: "1.Sayı", que2: "", que3: "", ctrl: [{ c: "" }], cleardoor: false,
            rightarray: [{ rightNumber: "", colorKey: "" }],
            showrightarray: [{ rightNumber: "", colorKey: "" }],
            returnebob: "yok",
            backUpflag: false,
            btnflag: true,
            twonumBColor: null, threenumBColor: null, firstnumBColor: "green",
            iconname: null, iconname2: null, iconname1: null,
            btn2disable: true, btn3disable: true,
            sayi2: "", sayi3: "", footerdisplay: "flex"
        });
    }
    checkState = () => {
        if (this.state.tempnumber2 == "" && this.state.tempnumber3 == "" && this.state.tempnumber1 == "")
            this.clean();
        else if (this.state.tempnumber2 != "" && this.state.tempnumber3 == "" && this.state.tempnumber1 == "")
            this.setState({
                iconname2: null, iconname1: "check", iconname: null,
                sayi2: "2.Sayı", sayi3: "3.Sayı", btn3disable: false, btn2disable: false,
                twonumBColor: "red", firstnumBColor: "rgb(56,65,104)", threenumBColor: "rgb(56,65,104)"
            });
        else if (this.state.tempnumber2 == "" && this.state.tempnumber3 != "" && this.state.tempnumber1 == "")
            this.setState({
                iconname2: "check", iconname1: null, iconname: null,
                sayi2: "2.Sayı", sayi3: "3.Sayı", btn3disable: false, btn2disable: false,
                twonumBColor: "rgb(56,65,104)", firstnumBColor: "rgb(56,65,104)", threenumBColor: "red"
            });
        else if (this.state.tempnumber2 != "" && this.state.tempnumber3 != "" && this.state.tempnumber1 == "")
            this.setState({
                iconname2: "check", iconname1: "check", iconname: null,
                sayi2: "2.Sayı", sayi3: "3.Sayı", btn3disable: false, btn2disable: false,
                twonumBColor: "red", firstnumBColor: "rgb(56,65,104)", threenumBColor: "red"
            });
        else if (this.state.tempnumber2 == "" && this.state.tempnumber3 == "" && this.state.tempnumber1 != "")
            this.setState({
                iconname2: null, iconname1: null, iconname: "check", btn3disable: true,
                sayi2: "2.Sayı", sayi3: "",
                twonumBColor: "rgb(56,65,104)", firstnumBColor: "red", threenumBColor: null
            });

        else if (this.state.tempnumber2 == "" && this.state.tempnumber3 != "" && this.state.tempnumber1 != "")
            this.setState({
                iconname2: "check", iconname1: null, iconname: "check",
                sayi2: "2.Sayı", sayi3: "3.Sayı", btn3disable: false, btn2disable: false,
                twonumBColor: "rgb(56,65,104)", firstnumBColor: "red", threenumBColor: "red"
            });
        else if (this.state.tempnumber2 != "" && this.state.tempnumber3 == "" && this.state.tempnumber1 != "")
            this.setState({
                iconname2: null, iconname1: "check", iconname: "check", btn3disable: false, btn2disable: false,
                sayi2: "2.Sayı", sayi3: "3.Sayı", btn3disable: false, btn2disable: false,
                twonumBColor: "red", firstnumBColor: "red", threenumBColor: "rgb(56,65,104)"
            });
        else if (this.state.tempnumber2 != "" && this.state.tempnumber3 != "" && this.state.tempnumber1 != "")
            this.setState({
                iconname2: "check", iconname1: "check", iconname: "check",
                sayi2: "2.Sayı", sayi3: "3.Sayı", btn3disable: false, btn2disable: false,
                twonumBColor: "red", firstnumBColor: "red", threenumBColor: "red"
            });
        if ((this.state.tempnumber1 != "" && this.state.tempnumber2 != "" && this.state.tempnumber3 == "") || (this.state.tempnumber1 != "" && this.state.tempnumber2 != "" && this.state.tempnumber3 != ""))
            this.setState({ btnflag: false });
    }
    firstNum = () => {
        this.setState({
            maxdoor: "2", door: "1",
            backUpflag: false,
            showrightarray: [""], shownumber1: [""], shownumber2: [""], shownumber3: [""],
            que1: "1.Sayı", que2: "", que3: "", backColorT1: "green", backColorT2: "white", backColorT3: "white",
            returnebob: "", message: "", number1: [""], number2: [""], number3: [""], rightarray: [""],
            firstnumBColor: "green",
        });
        this.checkState();
    }
    twoNum = () => {
        this.setState({
            maxdoor: "2", door: "2",
            backUpflag: false,
            showrightarray: [""], shownumber1: [""], shownumber2: [""], shownumber3: [""],
            que1: "", que2: "2.Sayı", que3: "", backColorT1: "white", backColorT2: "green", backColorT3: "white",
            returnebob: "yok", message: "", number1: [""], number2: [""], number3: [""], rightarray: [""],
            twonumBColor: "green"
        });
        this.checkState();

    }
    threeNum = () => {
        this.setState({
            maxdoor: "3", door: "3",
            backUpflag: false,
            showrightarray: [""], shownumber1: [""], shownumber2: [""], shownumber3: [""],
            que1: "", que2: "", que3: "3.Sayı", backColorT1: "white", backColorT2: "white", backColorT3: "green",
            returnebob: "yok", message: "", number1: [""], number2: [""], number3: [""], rightarray: [""],
            threenumBColor: "green"
        });
        this.checkState();
    }
    cleanOnePart = () => {
        var doorctrl = this.state.door;
        var maxdoorctrl = this.state.maxdoor;
        if (maxdoorctrl == "2") {
            if (doorctrl == "1")
                this.setState({ iconname: null, firstnumBColor: "green", tempnumber1: "", message: "", btnflag: true });

            else if (doorctrl == "2")
                this.setState({ iconname1: null, twonumBColor: "green", tempnumber2: "", message: "", btnflag: true });
        }
        if (maxdoorctrl == "3") {
            this.setState({ iconname2: null, threenumBColor: "green", tempnumber3: "", message: "", btnflag: true });
        }
        this.checkState();
    }
    keybort = (param) => {
        var clearctrl = this.state.cleardoor;
        if (clearctrl) {
            this.setState({ cleardoor: false, btnflag: true });
            this.setState(() => ({ backUpflag: false, showrightarray: [""], shownumber1: [""], shownumber2: [""], shownumber3: [""], que1: "1.Sayı", que2: "", que3: "", backColorT1: "green", backColorT2: "white", backColorT3: "white", returnebob: "yok", message: "", number1: [""], number2: [""], number3: [""], door: "1", rightarray: [""], tempnumber1: "", tempnumber2: "", tempnumber3: "", }));
        }
        var doorctrl = this.state.door;
        var maxdoorctrl = this.state.maxdoor;
        var num1 = this.state.tempnumber1;
        var num2 = this.state.tempnumber2;
        var num3 = this.state.tempnumber3;
        if (maxdoorctrl == "2") {
            if (doorctrl == "1") {
                if (num1.length < 4) {
                    num1 = num1 + param;
                    this.setState({ tempnumber1: num1, btn2disable: false });
                    if (this.state.tempnumber2 == "")
                        this.setState({ firstnumBColor: "red", iconname: "check", twonumBColor: "rgb(56,65,104)", sayi2: "2.Sayı" });
                }
                else
                    this.warn();
            }
            else if (doorctrl == "2") {
                if (num2.length < 4) {
                    num2 = num2 + param;
                    this.setState({ tempnumber2: num2 });
                    if (num2.length > 0)
                        this.setState({ twonumBColor: "red", iconname1: "check", btn3disable: false, threenumBColor: "rgb(56,65,104)", sayi3: "3.Sayı" });
                }
                else
                    this.warn();
            }
        }
        if (maxdoorctrl == "3") {
            if (num3.length < 4) {
                num3 = num3 + param;
                this.setState({ threenumBColor: "red", iconname2: "check", tempnumber3: num3, maxdoor: "3", door: "3" });
            }
            else
                this.warn();

        }

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
            this.setState({ message: "Sayı Sıfır Girilemez2" });
        }
        else if (maxdoorctrl == "3" && (n1 == 0 || n2 == 0 || n3 == 0)) {
            this.setState({ message: "Sayı Sıfır Girilemez3" });
        }
        else {

            if (this.state.backUpflag) {
                this.delay2 = setTimeout(function () {
                    this.setState(() => ({ message: "", btnflag: true, backUpflag: false, tempnumber1: this.state.shownumber1[1].no1, tempnumber2: this.state.shownumber2[1].no1 }));

                    if (maxdoorctrl == "3")
                        this.setState(() => ({ tempnumber3: this.state.shownumber3[1].no1 }));

                    this.setState(() => ({ showrightarray: [""], shownumber1: [""], shownumber2: [""], shownumber3: [""], returnebob: "yok", message: "", number1: [""], number2: [""], number3: [""], rightarray: [""] }));

                    this.ebob();
                }.bind(this), 10);

            }
            else {
                this.ebob();
                this.setState({ btnflag: true, message: "" })
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
            this.setState({ threenumBColor: "red", iconname2: "check" });
        else
            this.setState({ threenumBColor: "green", iconname2: null });
        if (maxdoorctrl == "2" && num1 != "" && num2 != "") {

            clearInterval(this.delay2);
            clearTimeout(this.delay);
            this.setState({ footerdisplay: "none", backUpflag: true, cleardoor: true, que1: "", que2: "", que3: "", door: "1", backColorT1: "green", backColorT2: "white", backColorT3: "white", message: "" });
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
                    this.setState({ returnebob: tempebob });
                    num2 /= i;
                    num1 /= i;
                    this.state.number1.push({ no1: num1 });
                    this.state.number2.push({ no1: num2 });
                    this.setState(this.state.number1);
                    this.setState(this.state.number2);
                    i--;
                }
            }
            this.settimem();
        }
        else if (maxdoorctrl == "3" && num1 != "" && num2 != "" && num3 != "") {
            clearInterval(this.delay12);
            clearTimeout(this.delay22);

            this.setState({ footerdisplay: "none", backUpflag: true, message: "", cleardoor: true, que1: "", que2: "", que3: "", door: "1", backColorT1: "green", backColorT2: "white", backColorT3: "white" });
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
            else if (num3 > num2 && num3 > num2)
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
                        this.setState({ returnebob: tempebob });
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
            this.settimem12();
        }
        else {
            this.setState({ message: "Bosluk Birakmayiniz" });
        }


    }
    componentWillUnmount() {
        clearInterval(this.delay);
        clearTimeout(this.delay2);
        clearInterval(this.delay12);
        clearTimeout(this.delay22);
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
                this.setState({ btnflag: false, footerdisplay: "flex" });
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
            else {
                clearInterval(this.delay12);
                clearTimeout(this.delay22);
                this.setState({ btnflag: false, footerdisplay: "flex" });
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
            <Container>
                <ImageBackground source={require("../../../image/galaxy.jpg")} style={{ width: '100%', height: '100%' }}>
                    <Content>
                        <Text>{this.state.message}</Text>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 30, color: "white", marginLeft: 50 }}>EBOB</Text>
                                <Button rounded onPress={this.backup} ><Text style={{ fontSize: 50 }}>=</Text></Button>
                                <Text style={{ fontSize: 30, color: "white" }}>{this.state.returnebob}</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Button onPress={this.firstNum} style={{ marginTop: 5, backgroundColor: this.state.firstnumBColor }}>
                                    <Icon type="FontAwesome" name={this.state.iconname} />
                                    <Text style={{ fontSize: 10 }}>1.Sayı</Text>
                                </Button>
                                <Button disabled={this.state.btn2disable} onPress={this.twoNum} style={{ marginTop: 5, backgroundColor: this.state.twonumBColor }}>
                                    <Icon type="FontAwesome" name={this.state.iconname1} />
                                    <Text style={{ fontSize: 10 }}>{this.state.sayi2}</Text>
                                </Button>
                                <Button disabled={this.state.btn3disable} onPress={this.threeNum} style={{ marginTop: 5, backgroundColor: this.state.threenumBColor }}>
                                    <Icon type="FontAwesome" name={this.state.iconname2} />
                                    <Text style={{ fontSize: 10 }}>{this.state.sayi3}</Text>
                                </Button>
                            </View>
                        </View>
                        <Card style={{ marginLeft: 10, marginRight: 10 }}>
                            <CardItem>
                                <View style={{ flexDirection: "column" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text>{this.state.que1}</Text>
                                            <Text style={{ color: "black", fontSize: 30, backgroundColor: this.state.backColorT1 }}>{this.state.tempnumber1}</Text>
                                        </View>
                                        <List dataArray={this.state.shownumber1}
                                            renderRow={(item) =>
                                                <ListItem style={{ borderColor: "white" }}>
                                                    <Text style={{ color: "black", fontSize: 30 }}>{item.no1}</Text>
                                                </ListItem>
                                            }>
                                        </List>

                                        <View style={{ flexDirection: "column" }}>
                                            <Text>{this.state.que2}</Text>
                                            <Text style={{ color: "black", fontSize: 30, backgroundColor: this.state.backColorT2 }}>{this.state.tempnumber2}</Text>
                                        </View>
                                        <List dataArray={this.state.shownumber2}
                                            renderRow={(item) =>
                                                <ListItem style={{ borderColor: "white" }}>
                                                    <Text style={{ color: "black", fontSize: 30 }}>{item.no1}</Text>
                                                </ListItem>
                                            }>
                                        </List>

                                        <View style={{ flexDirection: "column" }}>
                                            <Text>{this.state.que3}</Text>
                                            <Text style={{ color: "black", fontSize: 30, backgroundColor: this.state.backColorT3 }}>{this.state.tempnumber3}</Text>
                                        </View>
                                        <List dataArray={this.state.shownumber3}
                                            renderRow={(item) =>
                                                <ListItem style={{ borderColor: "white" }}>
                                                    <Text style={{ color: "black", fontSize: 30 }}>{item.no1}</Text>
                                                </ListItem>
                                            }>
                                        </List>


                                        <Text style={{ marginTop: 20, backgroundColor: "red", height: 450, width: 5, marginLeft: 5 }}></Text>
                                        <List dataArray={this.state.showrightarray}
                                            renderRow={(item) =>
                                                <ListItem style={{ borderColor: "red" }}>
                                                    <Text style={{ color: "white", fontSize: 30, backgroundColor: (item.key == "1") ? "red" : "blue" }}>{item.rightNumber}</Text>
                                                </ListItem>
                                            }>
                                        </List>

                                    </View>

                                </View>
                                <Button onPress={this.clean} transparent bordered>
                                    <Icon style={{ fontSize: 30 }} name='trash' />

                                </Button>

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
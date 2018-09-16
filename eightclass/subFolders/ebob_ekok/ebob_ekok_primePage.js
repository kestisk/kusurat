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
    List
} from "native-base";
import { Platform } from "react-native";
import { StyleSheet } from "react-native";
export default class Ebob_ekok_primePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", zero: "0",
            message: "",
            tempnumber1: "", tempnumber2: "", tempnumber3: "",
            shownumber1: [{ no1: "" }],
            shownumber2: [{ no1: "" }],
            shownumber3: [{ no1: "" }],
            number1: [{ no1: "" }],
            number2: [{ no1: "" }],
            number3: [{ no1: "" }],
            backColorT1: "green", backColorT2: "white", backColorT3: "white",
            door: "1", maxdoor: "2", doorstate: "Ikinci Sayiya Geç",
            que1: "1.Sayı", que2: "", que3: "", ctrl: [{ c: "" }], cleardoor: false,
            rightarray: [{ rightNumber: "", colorKey: "" }],
            showrightarray: [{ rightNumber: "", colorKey: "" }],
            ebobkac: ""
        }
    }
    warn = () => {
        this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
    }
    clean = () => {
        this.setState({ showrightarray: [""], shownumber1: [""], shownumber2: [""], shownumber3: [""], que1: "1.Sayı", que2: "", que3: "", backColorT1: "green", backColorT2: "white", backColorT3: "white", ebobkac: "yok", message: "", number1: [""], number2: [""], number3: [""], maxdoor: "2", doorstate: "Ikinci Sayiya Geç", door: "1", rightarray: [""], tempnumber1: "", tempnumber2: "", tempnumber3: "", });
    }
    twoNum = () => {
        this.setState({ showrightarray: [""], shownumber1: [""], shownumber2: [""], shownumber3: [""], que1: "1.Sayı", que2: "", que3: "", backColorT1: "green", backColorT2: "white", backColorT3: "white", ebobkac: "yok", message: "", number1: [""], number2: [""], number3: [""], maxdoor: "2", doorstate: "Ikinci Sayiya Geç", door: "1", rightarray: [""], tempnumber1: "", tempnumber2: "", tempnumber3: "", });
    }
    threeNum = () => {
        this.setState({ showrightarray: [""], shownumber1: [""], shownumber2: [""], shownumber3: [""], que1: "1.Sayı", que2: "", que3: "", backColorT1: "green", backColorT2: "white", backColorT3: "white", ebobkac: "yok", message: "", number1: [""], number2: [""], number3: [""], maxdoor: "3", doorstate: "Ikinci Sayiya Geç", door: "1", rightarray: [""], tempnumber1: "", tempnumber2: "", tempnumber3: "", });
    }
    nextNum = () => {
        var doorctrl = this.state.door;
        var maxdoorctrl = this.state.maxdoor;
        if (maxdoorctrl == 2) {
            if (doorctrl == "1")
                this.setState({ que1: "", que2: "2.Sayı", que3: "", door: "2", doorstate: "Birinci Sayiya Geç", backColorT2: "green", backColorT1: "white", backColorT3: "white" });
            else {
                this.setState({ que2: "", que1: "1.Sayı", que3: "", door: "1", doorstate: "Ikinci Sayiya Geç", backColorT1: "green", backColorT2: "white", backColorT3: "white" });
            }
        }
        else if (maxdoorctrl == 3) {
            if (doorctrl == "1")
                this.setState({ que1: "", que2: "2.Sayı", que3: "", door: "2", doorstate: "Üçüncü Sayiya Geç", backColorT2: "green", backColorT1: "white", backColorT3: "white" });
            else if (doorctrl == "2") {
                this.setState({ que2: "", que3: "3.Sayı", que1: "", door: "3", doorstate: "Birinci Sayiya Geç", backColorT3: "green", backColorT2: "white", backColorT1: "white" });
            }
            else {
                this.setState({ que2: "", que1: "1.Sayı", que3: "", door: "1", doorstate: "Ikinci Sayiya Geç", backColorT1: "green", backColorT2: "white", backColorT3: "white" });
            }
        }
    }
    write = (param) => {
        var clearctrl = this.state.cleardoor;
        if (clearctrl) {
            this.setState({ cleardoor: false });
            this.setState({ showrightarray: [""], shownumber1: [""], shownumber2: [""], shownumber3: [""], ebobkac: "", que1: "1.Sayı", que2: "", que3: "", backColorT1: "green", backColorT2: "white", backColorT3: "white", ebobkac: "yok", message: "", number1: [""], number2: [""], number3: [""], doorstate: "Ikinci Sayiya Geç", door: "1", rightarray: [""], tempnumber1: "", tempnumber2: "", tempnumber3: "", });

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
                    this.setState({ tempnumber1: num1 });
                    this.setState(this.state.number1);
                }
                else {
                    this.warn();
                }
            }
            else if (doorctrl == "2") {
                if (num2.length < 4) {
                    num2 = num2 + param;
                    this.setState({ tempnumber2: num2 });
                    this.setState(this.state.number2);
                }
                else {
                    this.warn();
                }
            }
        }
        if (maxdoorctrl == "3") {
            if (doorctrl == "1") {
                if (num1.length < 4) {
                    num1 = num1 + param;
                    this.setState({ tempnumber1: num1 });
                    this.setState(this.state.number1);
                }
                else {
                    this.warn();
                }
            }
            else if (doorctrl == "2") {
                if (num2.length < 4) {
                    num2 = num2 + param;
                    this.setState({ tempnumber2: num2 });
                    this.setState(this.state.number2);
                }
                else {
                    this.warn();
                }
            }
            else if (doorctrl == "3") {
                if (num2.length < 4) {
                    num3 = num3 + param;
                    this.setState({ tempnumber3: num3 });
                    this.setState(this.state.number3);
                }
                else {
                    this.warn();
                }
            }
        }

    }
    prime_ebob_ekok = () => {
        var num1 = this.state.tempnumber1;
        var num2 = this.state.tempnumber2;
        var num3 = this.state.tempnumber3;
        var doorctrl = this.state.door;
        var maxdoorctrl = this.state.maxdoor;
        if (maxdoorctrl == "2" && num1 != "" && num2 != "") {
            clearInterval(this.at);
            clearTimeout(this.at2);
            this.setState({ cleardoor: true, que1: "", que2: "", que3: "", door: "1", doorstate: "Ikinci Sayiya Geç", backColorT1: "green", backColorT2: "white", backColorT3: "white", message: "" });
            this.state.number1.push({ no1: this.state.tempnumber1 });
            this.state.number2.push({ no1: this.state.tempnumber2 });
            this.state.number3.push({ no1: this.state.tempnumber3 });
            this.setState({ tempnumber1: "", tempnumber2: "", tempnumber3: "" });
            var tempebob = 1;
            num1 = parseInt(num1, 10);
            num2 = parseInt(num2, 10);
            var max = (num1 > num2) ? (max = num1) : (max = num2);
            var ctrl1 = null;
            var ctrl2 = null;
            for (i = 2; i < max; i++) {
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
                    this.setState({ ebobkac: tempebob });
                    num2 /= i;
                    num1 /= i;
                    this.state.number1.push({ no1: num1 });
                    this.state.number2.push({ no1: num2 });
                    this.setState(this.state.number1);
                    this.setState(this.state.number2);
                    i--;
                }
            }
            if (tempebob > 1) {
                this.setState({ ebobkac: "aralarında asal değil" });
            }
            else {
                this.setState({ ebobkac: "aralarında asal " })
            }
            this.settimem();
        }
        else if (maxdoorctrl == "3" && (num1 != "" && num2 != "" && num3 != "")) {
            clearInterval(this.at);
            clearTimeout(this.at2);
            this.setState({ message: "", cleardoor: true, que1: "", que2: "", que3: "", door: "1", doorstate: "Ikinci Sayiya Geç", backColorT1: "green", backColorT2: "white", backColorT3: "white" });
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
            else (num3 > num2 && num3 > num2)
            max = num3;


            for (i = 2; i < max; i++) {
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
                        this.setState({ ebobkac: tempebob });
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
                if (tempebob > 1) {
                    this.setState({ ebobkac: "aralarında ebob değil" })
                }
                else {
                    this.setState({ ebobkac: "aralarında asal " })
                }
            }
            this.settimem12();
        }
        else {
            this.setState({ message: "Bosluk Birakmayiniz" });
        }

    }
    componentWillUnmount() {
        clearInterval(this.at);
        clearTimeout(this.at2);
    }
    settimem() {
        i = 1;
        this.at = setInterval(function () {
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
            i++;
        }.bind(this), 1000);
    }
    settimem2(i) {
        this.at2 = setTimeout(function () {
            if (i < this.state.rightarray.length) {
                this.state.showrightarray.push(this.state.rightarray[i]);
                this.setState(this.state.showrightarray);
            }
        }.bind(this), 0);
    }
    settimem12() {
        i = 1;
        this.at = setInterval(function () {
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
            i++;
        }.bind(this), 1000);
    }
    settimem22(i) {
        this.at2 = setTimeout(function () {
            if (i < this.state.rightarray.length) {
                this.state.showrightarray.push(this.state.rightarray[i]);
                this.setState(this.state.showrightarray);
            }

        }.bind(this), 0);
    }
    render() {
        return (
            <Container>
                <Content>
                    <Text>{this.state.message}</Text>
                    <Text>{this.state.ebobkac}</Text>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Button onPress={this.prime_ebob_ekok} style={{ marginTop: 5 }}><Text style={{ fontSize: 10 }}>Cevabı Gör</Text></Button>
                            <Button onPress={this.twoNum} style={{ marginTop: 5 }}><Text style={{ fontSize: 10 }}>Iki Sayi Gir</Text></Button>
                            <Button onPress={this.threeNum} style={{ marginTop: 5 }}><Text style={{ fontSize: 10 }}>Üç Sayi Gir</Text></Button>
                            <Button onPress={this.nextNum} style={{ marginTop: 5 }}><Text style={{ fontSize: 10 }}>{this.state.doorstate}</Text></Button>
                        </View>
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
                </Content>
                <Footer>
                    <Button info rounded onPress={() => { this.write(1) }} >
                        <Icon type="MaterialIcons" name="filter-1" />
                    </Button>
                    <Button info rounded onPress={() => { this.write(2) }} >
                        <Icon type="MaterialIcons" name="filter-2" />
                    </Button>
                    <Button info rounded onPress={() => { this.write(3) }}>
                        <Icon type="MaterialIcons" name="filter-3" />
                    </Button>
                    <Button info rounded onPress={() => { this.write(4) }}>
                        <Icon type="MaterialIcons" name="filter-4" />
                    </Button>
                    <Button info rounded onPress={() => { this.write(5) }} >
                        <Icon type="MaterialIcons" name="filter-5" />
                    </Button>
                </Footer>
                <Footer>
                    <Button info rounded onPress={() => { this.write(6) }} >
                        <Icon type="MaterialIcons" name="filter-6" />
                    </Button>
                    <Button info rounded onPress={() => { this.write(7) }} >
                        <Icon type="MaterialIcons" name="filter-7" />
                    </Button>
                    <Button info rounded onPress={() => { this.write(8) }} >
                        <Icon type="MaterialIcons" name="filter-8" />
                    </Button>
                    <Button info rounded onPress={() => { this.write(9) }} >
                        <Icon type="MaterialIcons" name="filter-9" />
                    </Button>
                    <Button info rounded onPress={() => { this.write(0) }} >
                        <Icon type="MaterialIcons" name="exposure-zero" />
                    </Button>
                    <Button info rounded onPress={this.clean} >
                        <Icon type="MaterialIcons" name="keyboard-arrow-left" />
                    </Button>
                </Footer>

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
        color: 'white',
        padding: 5,
        fontSize: 20,
    }
});

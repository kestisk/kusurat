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
    Content
} from "native-base";
import { Platform } from "react-native";
import { StyleSheet } from "react-native";
export default class EbobPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", zero: "0",
            message: "",
            tempnumber1: "", tempnumber2: "", tempnumber3: "",
            number1: [""], number2: [""], number3: [""],
            door: "1", maxdoor: "2", doorstate: "İkinci Sayıya Geç",
            rightarray: [""]
        }
    }
    warn = () => {
        this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
    }
    clean = () => {
        this.setState({ message: "", number1: [""], number2: [""], number3: [""], maxdoor: "2", doorstate: "İkinci Sayıya Geç", door: "1", rightarray: [""], tempnumber1: "", tempnumber2: "", tempnumber3: "", });
    }
    twoNum = () => {
        this.setState({ message: "", number1: [""], number2: [""], number3: [""], maxdoor: "2", doorstate: "İkinci Sayıya Geç", door: "1", rightarray: [""], tempnumber1: "", tempnumber2: "", tempnumber3: "", });
    }
    threeNum = () => {
        this.setState({ message: "", number1: [""], number2: [""], number3: [""], maxdoor: "3", doorstate: "İkinci Sayıya Geç", door: "1", rightarray: [""], tempnumber1: "", tempnumber2: "", tempnumber3: "", });
    }
    nextNum = () => {
        var doorctrl = this.state.door;
        var maxdoorctrl = this.state.maxdoor;
        if (maxdoorctrl == 2) {
            if (doorctrl == "1")
                this.setState({ door: "2", doorstate: "Birinci Sayıya Geç" });
            else {
                this.setState({ door: "1", doorstate: "İkinci Sayıya Geç" });
            }
        }
        else if (maxdoorctrl == 3) {
            if (doorctrl == "1")
                this.setState({ door: "2", doorstate: "Üçüncü Sayıya Geç" });
            else if (doorctrl == "2") {
                this.setState({ door: "3", doorstate: "Birinci Sayıya Geç" });
            }
            else {
                this.setState({ door: "1", doorstate: "İkinci Sayıya Geç" });
            }
        }
    }
    write = (param) => {
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
                    this.state.number1[0] = num1;
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
                    this.state.number2[0] = num2;
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
                    this.state.number1[0] = num1;
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
                    this.state.number2[0] = num2;
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
                    this.state.number3[0] = num3;
                    this.setState(this.state.number3);
                }
                else {
                    this.warn();
                }
            }
        }

    }

    ebob = () => {
        var doorctrl = this.state.door;
        var maxdoorctrl = this.state.maxdoor;
        var num1 = this.state.number1;
        var num2 = this.state.number2;
        var num3 = this.state.number3;
        if (maxdoorctrl == "2" && num1 != "" && num2 != "") {
            num1 = parseInt(num1, 10);
            num2 = parseInt(num2, 10);
            var max = (num1 > num2) ? (max = num1) : (max = num2);
            var ctrl1 = null;
            var ctrl2 = null;
            for (i = 2; i < max; i++) {
                ctrl1 = num1 % i;
                ctrl2 = num2 % i;

                if (ctrl1 == ctrl2) {
                    this.state.rightarray.push(i);
                    this.state.rightarray.push("\n");
                    this.setState(this.state.rightarray);
                    num1 /= i;
                    num2 /= i;
                    this.state.number1.push("\n");
                    this.state.number1.push(num1);
                    this.state.number2.push("\n");
                    this.state.number2.push(num2);
                    this.setState(this.state.number1);
                    this.setState(this.state.number2);
                    i--;

                }
            }

        }
        else if (maxdoorctrl == "3" && num1 != "" && num2 != "" && num3 != "") {
            num1 = parseInt(num1, 10);
            num2 = parseInt(num2, 10);
            var max = (num1 > num2) ? (max = num1) : (max = num2);
            var ctrl1 = null;
            var ctrl2 = null;
            var ctrl3 = null;
            for (i = 2; i < max; i++) {
                ctrl1 = num1 % i;
                ctrl2 = num2 % i;
                ctrl3 = num3 % i;

                if (ctrl1 == ctrl2 && ctrl2 == ctrl3) {
                    this.state.rightarray.push(i);
                    this.state.rightarray.push("\n");
                    this.setState(this.state.rightarray);
                    num1 /= i;
                    num2 /= i;
                    num3 /= i;
                    this.state.number1.push("\n");
                    this.state.number1.push(num1);
                    this.state.number2.push("\n");
                    this.state.number2.push(num2);
                    this.state.number3.push("\n");
                    this.state.number3.push(num3);
                    this.setState(this.state.number1);
                    this.setState(this.state.number2);
                    this.setState(this.state.number3);
                    i--;

                }
            }
        }
        else {
            this.setState({ message: "Boşluk Bırakmayınız" });
        }
    }
    render() {
        return (
            <Container>
                <Content>

                    <Text>{this.state.message}</Text>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Button onPress={this.ebob} style={{ marginTop: 5 }}><Text style={{ fontSize: 10 }}>AYIR</Text></Button>
                            <Button onPress={this.twoNum} style={{ marginTop: 5 }}><Text style={{ fontSize: 10 }}>İki Sayı Gir</Text></Button>
                            <Button onPress={this.threeNum} style={{ marginTop: 5 }}><Text style={{ fontSize: 10 }}>Üç Sayı Gir</Text></Button>
                            <Button onPress={this.nextNum} style={{ marginTop: 5 }}><Text style={{ fontSize: 10 }}>{this.state.doorstate}</Text></Button>

                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ marginTop: 20, fontSize: 30, marginLeft: 20 }}>{this.state.number1}</Text>
                            <Text style={{ marginTop: 20, fontSize: 30, marginLeft: 20 }}>{this.state.number2}</Text>
                            <Text style={{ marginTop: 20, fontSize: 30, marginLeft: 20 }}>{this.state.number3}</Text>
                            <Text style={{ marginTop: 20, fontSize: 30 }}>{this.state.leftarray}</Text>
                            <Text style={{ marginTop: 20, backgroundColor: "red", height: 450, width: 5, marginLeft: 5 }}></Text>
                            <Text style={{ marginTop: 20, fontSize: 30, marginLeft: 5 }}>{this.state.rightarray}</Text>
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



import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView, ImageBackground } from 'react-native';
export default class Pow_basic2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display1: "flex",
            display2: "none",
            iconname1: "check", iconname2: null,
            leftbtnBackColor: "red", rightbtnBackColor: "rgb(56,65,104)",
            btnTxt1Color: "white", btnTxt2Color: "rgb(142,163,226)"
        };
    }
    tik1 = () => {
        this.setState({
            display1: "flex", display2: "none",
            iconname1: "check", iconname2: null,
            leftbtnBackColor: "red", rightbtnBackColor: "rgb(56,65,104)",
            btnTxt1Color: "white", btnTxt2Color: "rgb(142,163,226)"
        });
    }
    tik2 = () => {
        this.setState({
            display2: "flex", display1: "none",
            iconname2: "check", iconname1: null,
            leftbtnBackColor: "rgb(56,65,104)", rightbtnBackColor: "red",
            btnTxt1Color: "rgb(142,163,226)", btnTxt2Color: "white"
        });
    }
    render() {
        return (
            <ImageBackground source={require("../../../image/galaxy.jpg")} style={{ width: '100%', height: '100%' }}>
                <Container>
                    <Content style={{ padding: 10 }}>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row", flex: 3 }}>
                                <Button onPress={this.tik1} style={{ marginTop: 1, flex: 1, backgroundColor: this.state.leftbtnBackColor }}>
                                    <Icon type="FontAwesome" name={this.state.iconname1} />
                                    <Text style={{ textAlign: "center", fontSize: 10, color: this.state.btnTxt1Color, fontSize: 15 }}>Negatif Kuvvet</Text>
                                </Button>
                                <Button onPress={this.tik2} style={{ marginLeft: 10, marginTop: 1, flex: 1, backgroundColor: this.state.rightbtnBackColor }}>
                                    <Icon type="FontAwesome" name={this.state.iconname2} />
                                    <Text style={{ textAlign: "center", fontSize: 10, color: this.state.btnTxt2Color, fontSize: 15 }}>Üssün Üssü</Text>
                                </Button>
                            </View>
                            <View style={{ display: this.state.display1, backgroundColor: "white", minHeight: 200 }}>
                                <Negative_Power></Negative_Power>
                            </View>
                            <View style={{ display: this.state.display2, backgroundColor: "white", minHeight: 200 }}>
                                <Double_Pow></Double_Pow>
                            </View>
                        </View>
                    </Content>

                </Container >
            </ImageBackground >
        );
    }

}
class Negative_Power extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: "", num2: "",
            sign: "-", sign2: "", sign3: "",
            answer1: "1",
            answer2: "",
            view1: "none", view2: "none"
        };
    }
    newNum = () => {

        var n1 = (Math.random() * 20 + 1);
        n1 = parseInt(n1);
        var pow = (Math.random() * 5 + 1);
        pow = parseInt(pow);
        var total = 1;
        for (i = 0; i < pow; i++)
            total = total * n1;

        this.setState({ num1: n1, num2: pow, answer2: total });
        var random1 = (Math.random() * 5 + 2);
        random1 = parseInt(random1 % 2);
        var index = (Math.random() * 5 + 2);
        index = parseInt(index % 2);
        if (index == 0) {
            if (random1 == 0) {
                if ((pow % 2) == 0)
                    this.setState({ sign2: "", sign3: "", view1: "flex", view2: "none" });
                else
                    this.setState({ sign2: "", sign3: "", view1: "flex", view2: "none" });
            }
            else {
                if ((pow % 2) == 0)
                    this.setState({ sign2: "-", sign3: "-", view1: "flex", view2: "none" });
                else
                    this.setState({ sign2: "-", sign3: "-", view1: "flex", view2: "none" });
            }

        }
        else {
            if (random1 == 0) {
                if ((pow % 2) == 0)
                    this.setState({ sign2: "", sign3: "", view1: "none", view2: "flex" });
                else
                    this.setState({ sign2: "", sign3: "", view1: "none", view2: "flex" });
            }
            else {
                if ((pow % 2) == 0)
                    this.setState({ sign2: "-", sign3: "", view1: "none", view2: "flex" });
                else
                    this.setState({ sign2: "-", sign3: "-", view1: "none", view2: "flex" });
            }
        }


    }
    componentDidMount() {
        var n1 = (Math.random() * 10 + 1);
        n1 = parseInt(n1);
        var pow = (Math.random() * 5 + 1);
        pow = parseInt(pow);
        var total = 1;
        for (i = 0; i < pow; i++)
            total = total * n1;
        this.setState({ num1: n1, num2: pow, answer2: total, view1: "flex", view2: "none" });
    }
    render() {
        return (
            <Container>
                <Content style={{ padding: 10 }}>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text>AÇIKLAMA BURAYA</Text>
                        </View>
                        <View style={{ flexDirection: "row", display: this.state.view1 }}>
                            <Text style={{ fontSize: 30 }}>{this.state.sign2}{this.state.num1}</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.sign}{this.state.num2}</Text>
                            <Text style={{ fontSize: 30 }}>=</Text>
                            <Text style={{ fontSize: 30 }}>
                                {this.state.sign3}{this.state.answer1}/{this.state.answer2}
                            </Text>
                            <Button onPress={this.newNum}><Text>Yeni Sayı</Text></Button>
                        </View>

                        <View style={{ flexDirection: "row", display: this.state.view2 }}>
                            <Text style={{ fontSize: 30 }}>({this.state.sign2}{this.state.num1})</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.sign}{this.state.num2}</Text>
                            <Text style={{ fontSize: 30 }}>=</Text>
                            <Text style={{ fontSize: 30 }}>
                                {this.state.sign3}{this.state.answer1}/{this.state.answer2}
                            </Text>
                            <Button onPress={this.newNum}><Text>Yeni Sayı</Text></Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}
class Double_Pow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: "", num2: "", num3: "",
            sign: "-", signpow1: "", signpow2: "", signmultip: "",
            multip: ""
        };
    }
    newNum = () => {
        var n1 = (Math.random() * 5 + 2);
        n1 = parseInt(n1);
        var pow = (Math.random() * 2 + 2);
        pow = parseInt(pow);
        var total = 1;
        var pow2 = (Math.random() * 2 + 2);
        pow2 = parseInt(pow2);
        var total = 1;
        var pow3 = pow * pow2;
        var rand1 = (Math.random() * 5 + 2);
        var rand2 = (Math.random() * 5 + 2);
        rand1 = parseInt(rand1 % 2);
        rand2 = parseInt(rand2 % 2);
        if (rand1 == 0) {
            if (rand2 == 0) {
                this.setState({ num1: n1, num2: pow, num3: pow2, multip: pow3, signpow1: "", signpow2: "", signmultip: "" });
            }
            else {
                this.setState({ num1: n1, num2: pow, num3: pow2, multip: pow3, signpow1: "", signpow2: "-", signmultip: "-" });
            }
        }
        else {
            if (rand2 == 0) {
                this.setState({ num1: n1, num2: pow, num3: pow2, multip: pow3, signpow1: "-", signpow2: "", signmultip: "-" });
            }
            else {
                this.setState({ num1: n1, num2: pow, num3: pow2, multip: pow3, signpow1: "-", signpow2: "-", signmultip: "" });
            }
        }

    }
    componentDidMount() {
        var n1 = (Math.random() * 5 + 2);
        n1 = parseInt(n1);
        var pow = (Math.random() * 5 + 2);
        pow = parseInt(pow);
        var total = 1;
        var pow2 = (Math.random() * 5 + 2);
        pow2 = parseInt(pow2);
        var total = 1;

        var pow3 = pow * pow2;
        this.setState({ num1: n1, num2: pow, num3: pow2, multip: pow3 });
    }
    render() {
        return (
            <Container>
                <Content style={{ padding: 10 }}>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text>AÇIKLAMA BURAYA2</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 30 }}>({this.state.num1}</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.signpow1}{this.state.num2}</Text>
                            <Text style={{ fontSize: 30 }}>)</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.signpow2}{this.state.num3}</Text>
                            <Text style={{ fontSize: 30 }}>=</Text>

                            <Text style={{ fontSize: 30 }}>({this.state.num1}</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.signpow2}{this.state.num3}</Text>
                            <Text style={{ fontSize: 30 }}>)</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.signpow1}{this.state.num2}</Text>
                            <Text style={{ fontSize: 30 }}>=</Text>

                            <Text style={{ fontSize: 30 }}>{this.state.num1}</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.signmultip}{this.state.multip}</Text>
                            <Button onPress={this.newNum}><Text>Yeni Sayı</Text></Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
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

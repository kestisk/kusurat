

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title, Footer } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
export default class Pow_basic3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display1: "flex",
            display2: "none",
            iconname1: "check", iconname2: null,
            leftbtnBackColor: "red", rightbtnBackColor: "gray",
        };
    }
    tik1 = () => {
        this.setState({
            display1: "flex", display2: "none",
            iconname1: "check", iconname2: null,
            leftbtnBackColor: "red", rightbtnBackColor: "gray",
        });
    }
    tik2 = () => {
        this.setState({
            display2: "flex", display1: "none",
            iconname2: "check", iconname1: null,
            leftbtnBackColor: "gray", rightbtnBackColor: "red",
        });
    }
    render() {
        return (
            <Container>
                <Content style={{ padding: 10 }}>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row", flex: 3 }}>
                            <Button onPress={this.tik1} style={{ marginTop: 1, flex: 1, backgroundColor: this.state.leftbtnBackColor }}>
                                <Icon type="FontAwesome" name={this.state.iconname1} />
                                <Text style={{ marginLeft: 10, fontSize: 10, color: "white", fontSize: 15 }}>Tek/Çift Kuvvet</Text>
                            </Button>
                            <Button onPress={this.tik2} style={{ marginLeft: 10, marginTop: 1, flex: 1, backgroundColor: this.state.rightbtnBackColor }}>
                                <Icon type="FontAwesome" name={this.state.iconname2} />
                                <Text style={{ marginLeft: 10, fontSize: 10, color: "white", fontSize: 15 }}>Kendini Dene</Text>
                            </Button>
                        </View>
                        <View style={{ display: this.state.display1 }}>
                            <Even_Odd_Poww></Even_Odd_Poww>
                        </View>
                        <View style={{ display: this.state.display2 }}>
                            <TYS></TYS>
                        </View>


                    </View>
                </Content>

            </Container>
        );
    }

}
class Even_Odd_Poww extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: "", num2: "",
            sign: "",
            signanswer: "",
            signpow: "",
            answer1: "", answer2: "",
            evenView1: "none", evenView2: "none"
        };
    }
    newNum = () => {
        var n1 = (Math.random() * 5 + 1);
        var pow = (Math.random() * 5 + 1);
        var n1sign = (Math.random() * 5 + 1);
        var powsign = (Math.random() * 5 + 1);
        powsign = parseInt(powsign);
        n1sign = parseInt(n1sign);
        pow = parseInt(pow);
        n1 = parseInt(n1);
        var total = 1;
        for (i = 0; i < pow; i++)
            total = total * n1;
        //işaretler atandı..
        var rand = (Math.random() * 5 + 1);
        rand = parseInt(rand);
        if (rand % 2 == 0) {
            if (n1sign % 2 == 0) {
                if (powsign % 2 == 0)
                    this.setState({ signpow: "", sign: "", evenView1: "flex", evenView2: "none", num1: n1, num2: pow, answer1: total, signanswer: "", answer2: "" });
                else
                    this.setState({ signpow: "-", sign: "", evenView1: "flex", evenView2: "none", num1: n1, num2: pow, answer1: 1, answer2: "/" + total, signanswer: "" });
            }
            else {
                if (powsign % 2 == 0)
                    this.setState({ signpow: "", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow, answer1: total, answer2: "", signanswer: "-" });
                else
                    this.setState({ signpow: "-", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow, answer1: 1, answer2: "/" + total, signanswer: "-" });
            }

        }
        else {
            if (n1sign % 2 == 0) {
                if (powsign % 2 == 0)
                    this.setState({ signpow: "", sign: "", evenView2: "flex", evenView1: "none", num1: n1, num2: pow, answer2: "", answer1: total, signanswer: "" });
                else
                    this.setState({ signpow: "-", sign: "", evenView2: "flex", evenView1: "none", num1: n1, num2: pow, answer1: 1, answer2: "/" + total, signanswer: "" });
            }
            else {
                if (pow % 2 == 0)
                    if (powsign % 2 == 0)
                        this.setState({ signpow: "", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow, answer2: "", answer1: total, signanswer: "" });

                    else
                        this.setState({ signpow: "-", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow, answer1: 1, answer2: "/" + total, signanswer: "" });
                else {
                    if (powsign % 2 == 0)
                        this.setState({ signpow: "", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow, answer2: "", answer1: total, signanswer: "-" });
                    else
                        this.setState({ signpow: "-", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow, answer1: 1, answer2: "/" + total, signanswer: "-" });
                }

            }
        }
    }
    componentDidMount() {
        var n1 = (Math.random() * 5 + 1);
        n1 = parseInt(n1);
        var pow = (Math.random() * 10 + 1);
        pow = parseInt(pow);
        var total = 1;
        for (i = 0; i < pow; i++)
            total = total * n1;
        this.setState({ evenView1: "flex", evenView2: "none", num1: n1, num2: pow, answer1: total });
    }
    render() {
        return (
            <Container>
                <Content style={{ padding: 10 }}>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text>AÇIKLAMA BURAYA2</Text>
                        </View>
                        <View style={{ flexDirection: "row", display: this.state.evenView1 }}>
                            <Text style={{ fontSize: 30 }}>{this.state.sign}{this.state.num1}</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.signpow}{this.state.num2}</Text>
                            <Text style={{ fontSize: 30 }}>=</Text>
                            <Text style={{ fontSize: 30 }}>{this.state.signanswer}{this.state.answer1}</Text>
                            <Button onPress={this.newNum}><Text>Yeni Sayı</Text></Button>
                        </View>
                        <View style={{ flexDirection: "row", display: this.state.evenView2 }}>
                            <Text style={{ fontSize: 30 }}>({this.state.sign}{this.state.num1})</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.signpow}{this.state.num2}</Text>
                            <Text style={{ fontSize: 30 }}>=</Text>
                            <Text style={{ fontSize: 30 }}>{this.state.signanswer}{this.state.answer1}{this.state.answer2}</Text>
                            <Button onPress={this.newNum}><Text>Yeni Sayı</Text></Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}
class TYS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: "", num2: "", num3: "",
            sign1: "-",
            sign: "",
            signanswer: "",
            signpow: "",
            answer: "1", answer1: "", answer2: "",
            displaydouble: "none", displayeven: "none",
            displaynegative: "none", displayzero: "none", displayanswer34: "none",
            displayFirstView: "none", displaySecondView: "none", signV2: "",
            negativesign2: "", negativeview1: "none", negatifview2: "none",
            evenView1: "none", evenView2: "none",
            fracButonView: "none", normalbuttonview: "flex",
            answerpow1: "", answerpow2: "", answerpow3: "", answerpow4: "",

            colorboxs: ["blue", "blue", "blue", "blue"],
            aa: "0", b: "1", c: "2", d: "3",
            aChoise: "A", bChoise: "B", cChoise: "C", dChoise: "D", ind: "",
            truecount: 0, wholefalsecount: 0, falsecount: 0, questioncount: 0,
            falseflag: false

        };
    }
    generateQuestion = () => {
        var x = ((Math.random() * 4)) + 1;
        x = parseInt(x);
        switch (x) {
            case 1: {
                this.newNumZero();
                break;
            }
            case 2: {
                this.newNumNegative();
                break;
            }
            case 3: {
                this.newNumEven();
                break;
            }
            case 4: {
                this.newNumDouble();
                break;
            }
            default: {
                this.generateQuestion();
                break;
            }
        }
        var qcount = parseInt(this.state.questioncount, 10);
        qcount++;
        this.setState({ questioncount: qcount });
    }
    reset = () => {
        this.setState({
            num1: "", num2: "", sign1: "-", sign: "", answer1: "", answer2: "", answerpow1: "", answerpow2: "", answerpow3: "",
            answerpow4: "", signanswer: "", signpow: "", answer: "1", displaydouble: "none", displayeven: "none", displaynegative: "none",
            displayzero: "none", displayanswer34: "none", signV2: "", negativesign2: "", negativeview1: "none", negatifview2: "none",
            evenView1: "none", evenView2: "none", fracButonView: "none", normalbuttonview: "flex", displayFirstView: "none",
            displaySecondView: "none", ind: "", colorboxs: ["blue", "blue", "blue", "blue"], aa: "0", b: "1", c: "2", d: "3", aChoise: "A",
            bChoise: "B", cChoise: "C", dChoise: "D"
        });
    }
    newNumZero = () => {
        this.reset();
        this.setState({ displaydouble: "none", displayeven: "none", displaynegative: "none", displayzero: "flex", displayanswer34: "none" });

        var n1 = (Math.random() * 20 + 1);
        var random = (Math.random() * 20);
        random = parseInt(random % 2);
        var random2 = (Math.random() * 20);
        random2 = parseInt(random2 % 2);
        n1 = parseInt(n1);
        var x = parseInt(n1 % 2);
        if (random == 0) {
            if (random2 == 0) {
                this.setState({ signV2: "" });
            }
            else {
                this.setState({ signV2: "-" });
            }
            this.setState({ num1: n1, num2: "0", displayFirstView: "flex", displaySecondView: "none" });
        }
        else {
            if (random2 == 0) {
                this.setState({ signV2: "" });
            }
            else {
                this.setState({ signV2: "-" });
            }
            this.setState({ num1: n1, num2: "0", displayFirstView: "none", displaySecondView: "flex" });
        }
        //sonuc
        var index = (Math.random() * 20 + 1);
        index = parseInt(index);
        index = parseInt(index % 2);
        if (index != 0) {
            if (random == 0) {
                if (random2 == 0)
                    this.setState(() => ({ aChoise: -1, bChoise: 1, ind: "2" }));
                else {
                    this.setState(() => ({ aChoise: 1, bChoise: -1, ind: "1" }));
                }

            }
            else {
                if (random2 == 0)
                    this.setState(() => ({ aChoise: -1, bChoise: 1, ind: "1" }));
                else {
                    this.setState(() => ({ aChoise: 1, bChoise: -1, ind: "2" }));
                }
            }
        }
        else {
            if (random == 0) {
                if (random2 == 0)
                    this.setState(() => ({ aChoise: 1, bChoise: -1, ind: "1" }));
                else {
                    this.setState(() => ({ aChoise: -1, bChoise: 1, ind: "2" }));
                }

            }
            else {
                if (random2 == 0)
                    this.setState(() => ({ aChoise: -1, bChoise: 1, ind: "2" }));
                else {
                    this.setState(() => ({ aChoise: 1, bChoise: -1, ind: "1" }));
                }
            }
        }
    }
    newNumNegative = () => {
        this.reset();
        this.setState({ displaydouble: "none", displayeven: "none", displaynegative: "flex", displayzero: "none", displayanswer34: "flex" });

        var n1 = (Math.random() * 20 + 1);
        n1 = parseInt(n1);
        var pow = (Math.random() * 5 + 1);
        pow = parseInt(pow);
        var total = 1;
        var total2 = 0;
        for (i = 0; i < pow; i++) {
            total = total * n1;
            total2 = total2 + n1;
        }
        if (total2 == total)
            total2 = total2 + total;
        this.setState({ num1: n1, num2: pow });

        var random1 = (Math.random() * 5 + 2);
        random1 = parseInt(random1 % 2);
        var index = (Math.random() * 5 + 2);
        index = parseInt(index % 2);
        if (index == 0) {
            if (random1 == 0) {
                if ((pow % 2) == 0)
                    this.setState({ negativesign2: "", sign: "-", negativeview1: "flex", negativeview2: "none" });
                else
                    this.setState({ negativesign2: "", sign: "-", negativeview1: "flex", negativeview2: "none" });
            }
            else {
                if ((pow % 2) == 0)
                    this.setState({ negativesign2: "-", sign: "-", negativeview1: "flex", negativeview2: "none" });
                else
                    this.setState({ negativesign2: "-", sign: "-", negativeview1: "flex", negativeview2: "none" });
            }

        }
        else {
            if (random1 == 0) {
                if ((pow % 2) == 0)
                    this.setState({ negativesign2: "", sign: "-", negativeview1: "none", negativeview2: "flex" });
                else
                    this.setState({ negativesign2: "", sign: "-", negativeview1: "none", negativeview2: "flex" });
            }
            else {
                if ((pow % 2) == 0)
                    this.setState({ negativesign2: "-", sign: "-", negativeview1: "none", negativeview2: "flex" });
                else
                    this.setState({ negativesign2: "-", sign: "-", negativeview1: "none", negativeview2: "flex" });
            }
        }
        //sonuc
        var index2 = (Math.random() * 3 + 1);
        index2 = parseInt(index2);
        if (index2 == 1) {
            if (index == 0) {
                if (random1 == 0)
                    this.setState(() => ({ aChoise: "1/" + total, cChoise: ("-1/" + + total), dChoise: "1/" + total2, bChoise: ("-1/" + total2), ind: "1" }));
                else
                    this.setState(() => ({ cChoise: "1/" + total, aChoise: ("-1/" + total), dChoise: "1/" + total2, bChoise: ("-1/" + total2), ind: "1" }));
            }
            else {
                if (random1 == 0)
                    this.setState(() => ({ aChoise: "-1/" + total, cChoise: ("-1/" + total), dChoise: "1/" + total2, bChoise: ("-1/" + total2), ind: "1" }));
                else {
                    if ((pow % 2) == 0)
                        this.setState(() => ({ aChoise: "1/" + total, cChoise: ("-1/" + total), dChoise: "1/" + total2, bChoise: ("-1/" + total2), ind: "1" }));
                    else
                        this.setState(() => ({ cChoise: "1/" + total, aChoise: ("-1/" + total), dChoise: "1/" + total2, bChoise: ("-1/" + total2), ind: "1" }));
                }
            }

        }
        else if (index2 == 2) {
            if (index == 0) {
                if (random1 == 0)
                    this.setState(() => ({ bChoise: "1/" + total, cChoise: ("-1/" + total), dChoise: "1/" + total2, aChoise: ("-1/" + total2), ind: "2" }));
                else
                    this.setState(() => ({ cChoise: "1/" + total, bChoise: ("-1/" + total), dChoise: "1/" + total2, aChoise: ("-1/" + total2), ind: "2" }));
            }
            else {
                if (random1 == 0)
                    this.setState(() => ({ bChoise: "1/" + total, cChoise: ("-1/" + total), dChoise: "1/" + total2, aChoise: ("-1/" + total2), ind: "2" }));
                else {
                    if ((pow % 2) == 0)
                        this.setState(() => ({ bChoise: "1/" + total, cChoise: ("-1/" + total), dChoise: "1/" + total2, aChoise: ("-1/" + total2), ind: "2" }));
                    else
                        this.setState(() => ({ cChoise: "1/" + total, bChoise: ("-1/" + total), dChoise: "1/" + total2, aChoise: ("-1/" + total2), ind: "2" }));
                }
            }

        }
        else if (index2 == 3) {
            if (index == 0) {
                if (random1 == 0)
                    this.setState(() => ({ cChoise: "1/" + total, bChoise: ("-1/" + total), dChoise: "1/" + total2, aChoise: ("-1/" + total2), ind: "3" }));
                else
                    this.setState(() => ({ bChoise: "1/" + total, cChoise: ("-1/" + total), dChoise: "1/" + total2, aChoise: ("-1/" + total2), ind: "3" }));
            }
            else {
                if (random1 == 0)
                    this.setState(() => ({ cChoise: "1/" + total, bChoise: ("-1/" + total), dChoise: "1/" + total2, aChoise: ("-1/" + total2), ind: "3" }));
                else {
                    if ((pow % 2) == 0)
                        this.setState(() => ({ cChoise: "1/" + total, bChoise: ("-1/" + total), dChoise: "1/" + total2, aChoise: ("-1/" + total2), ind: "3" }));
                    else
                        this.setState(() => ({ bChoise: "1/" + total, cChoise: ("-1/" + total), dChoise: "1/" + total2, aChoise: ("-1/" + total2), ind: "3" }));
                }
            }

        }
        else if (index2 == 4) {
            if (index == 0) {
                if (random1 == 0)
                    this.setState(() => ({ dChoise: "1/" + total, bChoise: ("-1/" + total), cChoise: "1/" + total2, aChoise: ("-1/" + total2), ind: "4" }));
                else
                    this.setState(() => ({ bChoise: "1/" + total, dChoise: ("-1/" + total), cChoise: "1/" + total2, aChoise: ("-1/" + total2), ind: "4" }));
            }
            else {
                if (random1 == 0)
                    this.setState(() => ({ dChoise: "1/" + total, bChoise: ("-1/" + total), cChoise: "1/" + total2, aChoise: ("-1/" + total2), ind: "4" }));
                else {
                    if ((pow % 2) == 0)
                        this.setState(() => ({ dChoise: "1/" + total, bChoise: ("-1/" + total), cChoise: "1/" + total2, aChoise: ("-1/" + total2), ind: "4" }));
                    else
                        this.setState(() => ({ bChoise: "1/" + total, dChoise: ("-1/" + total), cChoise: "1/" + total2, aChoise: ("-1/" + total2), ind: "4" }));
                }
            }

        }
    }
    newNumEven = () => {
        this.reset();
        this.setState({ displaydouble: "none", displayeven: "flex", displaynegative: "none", displayzero: "none", displayanswer34: "flex" });

        var n1 = (Math.random() * 5 + 1);
        var pow = (Math.random() * 5 + 1);
        var n1sign = (Math.random() * 5 + 1);
        var powsign = (Math.random() * 5 + 1);
        powsign = parseInt(powsign);
        n1sign = parseInt(n1sign);
        pow = parseInt(pow);
        n1 = parseInt(n1);
        var total = 1;
        var total2 = 0;
        for (i = 0; i < pow; i++) {
            total = total * n1;
            total2 = total2 + n1;
        }
        if (total2 == total)
            total2 = total2 + total;
        this.setState({ num1: n1, num2: pow });
        var rand = (Math.random() * 5 + 1);
        rand = parseInt(rand);

        //şıklar hazırlanacak
        var index = (Math.random() * 3 + 1);
        index = parseInt(index);
        if (index == 1) {
            if (rand % 2 == 0) {
                if (n1sign % 2 == 0) {
                    if (powsign % 2 == 0)
                        this.setState({
                            signpow: "", sign: "", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                            aChoise: total, bChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "1"
                        });
                    else
                        this.setState({
                            signpow: "-", sign: "", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                            aChoise: ("1/" + total), bChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "1"
                        });

                }
                else {
                    if (pow % 2 == 0) {
                        if (powsign % 2 == 0)
                            this.setState({
                                signpow: "", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                                aChoise: "-" + total, bChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "1"
                            });
                        else
                            this.setState({
                                signpow: "-", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                                aChoise: ("-1/" + total), bChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "1"
                            });

                    }
                    else {
                        if (powsign % 2 == 0)
                            this.setState({
                                signpow: "", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                                aChoise: "-" + total, bChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "1"
                            });
                        else
                            this.setState({
                                signpow: "-", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                                aChoise: ("-1/" + total), bChoise: ("-" + total), cChoise: ("1/" + total), dChoise: ("-" + total2), ind: "1"
                            });
                    }
                }
            }
            else {
                if (n1sign % 2 == 0) {
                    if (powsign % 2 == 0)
                        this.setState({
                            signpow: "", sign: "", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                            aChoise: total, bChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "1"
                        });
                    else
                        this.setState({
                            signpow: "-", sign: "", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                            aChoise: ("1/" + total), bChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "1"
                        });

                }
                else {
                    if (pow % 2 == 0) {
                        if (powsign % 2 == 0)
                            this.setState({
                                signpow: "", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                                aChoise: total, bChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "1"
                            });
                        else
                            this.setState({
                                signpow: "-", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                                aChoise: ("1/" + total), bChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "1"
                            });

                    }
                    else {
                        if (powsign % 2 == 0)
                            this.setState({
                                signpow: "", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                                aChoise: "-" + total, bChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "1"
                            });
                        else
                            this.setState({
                                signpow: "-", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                                aChoise: ("-1/" + total), bChoise: ("-" + total), cChoise: ("1/" + total), dChoise: ("-" + total2), ind: "1"
                            });
                    }
                }
            }
        }
        else if (index == 2) {
            if (rand % 2 == 0) {
                if (n1sign % 2 == 0) {
                    if (powsign % 2 == 0)
                        this.setState({
                            signpow: "", sign: "", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                            bChoise: total, aChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "2"
                        });
                    else
                        this.setState({
                            signpow: "-", sign: "", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                            bChoise: ("1/" + total), aChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "2"
                        });

                }
                else {
                    if (pow % 2 == 0) {
                        if (powsign % 2 == 0)
                            this.setState({
                                signpow: "", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                                bChoise: "-" + total, aChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "2"
                            });
                        else
                            this.setState({
                                signpow: "-", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                                bChoise: ("-1/" + total), aChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "2"
                            });

                    }
                    else {
                        if (powsign % 2 == 0)
                            this.setState({
                                signpow: "", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                                bChoise: "-" + total, aChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "2"
                            });
                        else
                            this.setState({
                                signpow: "-", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                                bChoise: ("-1/" + total), aChoise: ("-" + total), cChoise: ("1/" + total), dChoise: ("-" + total2), ind: "2"
                            });
                    }
                }
            }
            else {
                if (n1sign % 2 == 0) {
                    if (powsign % 2 == 0)
                        this.setState({
                            signpow: "", sign: "", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                            bChoise: total, aChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "2"
                        });
                    else
                        this.setState({
                            signpow: "-", sign: "", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                            bChoise: ("1/" + total), aChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "2"
                        });

                }
                else {
                    if (pow % 2 == 0) {
                        if (powsign % 2 == 0)
                            this.setState({
                                signpow: "", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                                bChoise: total, aChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "2"
                            });
                        else
                            this.setState({
                                signpow: "-", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                                bChoise: ("1/" + total), aChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "2"
                            });

                    }
                    else {
                        if (powsign % 2 == 0)
                            this.setState({
                                signpow: "", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                                bChoise: "-" + total, aChoise: ("-" + total), cChoise: total2, dChoise: ("-" + total2), ind: "2"
                            });
                        else
                            this.setState({
                                signpow: "-", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                                bChoise: ("-1/" + total), aChoise: ("-" + total), cChoise: ("1/" + total), dChoise: ("-" + total2), ind: "2"
                            });
                    }
                }
            }

        }
        else if (index == 3) {
            if (rand % 2 == 0) {
                if (n1sign % 2 == 0) {
                    if (powsign % 2 == 0)
                        this.setState({
                            signpow: "", sign: "", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                            cChoise: total, aChoise: ("-" + total), bChoise: total2, dChoise: ("-" + total2), ind: "3"
                        });
                    else
                        this.setState({
                            signpow: "-", sign: "", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                            cChoise: ("1/" + total), aChoise: ("-" + total), bChoise: total2, dChoise: ("-" + total2), ind: "3"
                        });

                }
                else {
                    if (pow % 2 == 0) {
                        if (powsign % 2 == 0)
                            this.setState({
                                signpow: "", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                                cChoise: "-" + total, aChoise: ("-" + total), bChoise: total2, dChoise: ("-" + total2), ind: "3"
                            });
                        else
                            this.setState({
                                signpow: "-", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                                cChoise: ("-1/" + total), aChoise: ("-" + total), bChoise: total2, dChoise: ("-" + total2), ind: "3"
                            });

                    }
                    else {
                        if (powsign % 2 == 0)
                            this.setState({
                                signpow: "", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                                cChoise: "-" + total, aChoise: ("-" + total), bChoise: total2, dChoise: ("-" + total2), ind: "3"
                            });
                        else
                            this.setState({
                                signpow: "-", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                                cChoise: ("-1/" + total), aChoise: ("-" + total), bChoise: ("1/" + total), dChoise: ("-" + total2), ind: "3"
                            });
                    }
                }
            }
            else {
                if (n1sign % 2 == 0) {
                    if (powsign % 2 == 0)
                        this.setState({
                            signpow: "", sign: "", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                            cChoise: total, aChoise: ("-" + total), bChoise: total2, dChoise: ("-" + total2), ind: "3"
                        });
                    else
                        this.setState({
                            signpow: "-", sign: "", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                            cChoise: ("1/" + total), aChoise: ("-" + total), bChoise: total2, dChoise: ("-" + total2), ind: "3"
                        });

                }
                else {
                    if (pow % 2 == 0) {
                        if (powsign % 2 == 0)
                            this.setState({
                                signpow: "", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                                cChoise: total, aChoise: ("-" + total), bChoise: total2, dChoise: ("-" + total2), ind: "3"
                            });
                        else
                            this.setState({
                                signpow: "-", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                                cChoise: ("1/" + total), aChoise: ("-" + total), bChoise: total2, dChoise: ("-" + total2), ind: "3"
                            });

                    }
                    else {
                        if (powsign % 2 == 0)
                            this.setState({
                                signpow: "", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                                cChoise: "-" + total, aChoise: ("-" + total), bChoise: total2, dChoise: ("-" + total2), ind: "3"
                            });
                        else
                            this.setState({
                                signpow: "-", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                                cChoise: ("-1/" + total), aChoise: ("-" + total), bChoise: ("1/" + total), dChoise: ("-" + total2), ind: "3"
                            });
                    }
                }
            }
        }
        else if (index == 4) {
            if (rand % 2 == 0) {
                if (n1sign % 2 == 0) {
                    if (powsign % 2 == 0)
                        this.setState({
                            signpow: "", sign: "", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                            dChoise: total, aChoise: ("-" + total), bChoise: total2, cChoise: ("-" + total2), ind: "4"
                        });
                    else
                        this.setState({
                            signpow: "-", sign: "", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                            dChoise: ("1/" + total), aChoise: ("-" + total), bChoise: total2, cChoise: ("-" + total2), ind: "4"
                        });

                }
                else {
                    if (pow % 2 == 0) {
                        if (powsign % 2 == 0)
                            this.setState({
                                signpow: "", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                                dChoise: "-" + total, aChoise: ("-" + total), bChoise: total2, cChoise: ("-" + total2), ind: "4"
                            });
                        else
                            this.setState({
                                signpow: "-", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                                dChoise: ("-1/" + total), aChoise: ("-" + total), bChoise: total2, cChoise: ("-" + total2), ind: "4"
                            });

                    }
                    else {
                        if (powsign % 2 == 0)
                            this.setState({
                                signpow: "", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                                cChoise: "-" + total, aChoise: ("-" + total), bChoise: total2, dChoise: ("-" + total2), ind: "4"
                            });
                        else
                            this.setState({
                                signpow: "-", sign: "-", evenView1: "flex", evenView2: "none", num1: n1, num2: pow,
                                dChoise: ("-1/" + total), aChoise: ("-" + total), bChoise: ("1/" + total), cChoise: ("-" + total2), ind: "4"
                            });
                    }
                }
            }
            else {
                if (n1sign % 2 == 0) {
                    if (powsign % 2 == 0)
                        this.setState({
                            signpow: "", sign: "", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                            dChoise: total, aChoise: ("-" + total), bChoise: total2, cChoise: ("-" + total2), ind: "4"
                        });
                    else
                        this.setState({
                            signpow: "-", sign: "", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                            dChoise: ("1/" + total), aChoise: ("-" + total), bChoise: total2, cChoise: ("-" + total2), ind: "4"
                        });

                }
                else {
                    if (pow % 2 == 0) {
                        if (powsign % 2 == 0)
                            this.setState({
                                signpow: "", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                                dChoise: total, aChoise: ("-" + total), bChoise: total2, cChoise: ("-" + total2), ind: "4"
                            });
                        else
                            this.setState({
                                signpow: "-", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                                dChoise: ("1/" + total), aChoise: ("-" + total), bChoise: total2, cChoise: ("-" + total2), ind: "4"
                            });

                    }
                    else {
                        if (powsign % 2 == 0)
                            this.setState({
                                signpow: "", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                                dChoise: "-" + total, aChoise: ("-" + total), bChoise: total2, cChoise: ("-" + total2), ind: "4"
                            });
                        else
                            this.setState({
                                signpow: "-", sign: "-", evenView2: "flex", evenView1: "none", num1: n1, num2: pow,
                                dChoise: ("-1/" + total), aChoise: ("-" + total), bChoise: ("1/" + total), cChoise: ("-" + total2), ind: "4"
                            });
                    }
                }
            }
        }
    }
    newNumDouble = () => {
        this.reset();
        this.setState({ displaydouble: "flex", displayeven: "none", displaynegative: "none", displayzero: "none", displayanswer34: "flex" });

        var n1 = (Math.random() * 5 + 1);
        n1 = parseInt(n1);
        var pow = (Math.random() * 2 + 1);
        pow = parseInt(pow);
        var total = 1;
        var pow2 = (Math.random() * 2 + 1);
        pow2 = parseInt(pow2);
        var total2 = 0;
        var total = pow * pow2;
        var rand1 = (Math.random() * 5 + 2);
        var rand2 = (Math.random() * 5 + 2);
        rand1 = parseInt(rand1 % 2);
        rand2 = parseInt(rand2 % 2);
        //sonuc
        var index = (Math.random() * 3 + 1);
        index = parseInt(index);
        if (index == 1) {
            if (rand1 == 0) {
                if (rand2 == 0) {
                    this.setState({ answerpow1: total, answerpow2: pow2, answerpow3: (pow2 - pow), answerpow4: (pow + pow2), aChoise: n1, bChoise: n1, cChoise: n1, dChoise: n1, num1: n1, num2: pow, num3: pow2, signpow1: "", signpow2: "", ind: "1" });
                }
                else {
                    this.setState({ answerpow1: ("-" + total), answerpow2: (pow + pow2), answerpow3: pow2, answerpow4: (pow2 - pow), aChoise: n1, bChoise: n1, cChoise: n1, dChoise: n1, num1: n1, num2: pow, num3: pow2, signpow1: "", signpow2: "-", ind: "1" });
                }
            }
            else {
                if (rand2 == 0) {
                    this.setState({ answerpow1: ("-" + total), answerpow2: pow2, answerpow3: (pow + pow2), answerpow4: (pow2 - pow), aChoise: n1, bChoise: n1, cChoise: n1, dChoise: n1, num1: n1, num2: pow, num3: pow2, signpow1: "-", signpow2: "", ind: "1" });
                }
                else {
                    this.setState({ answerpow1: total, answerpow2: (pow + pow2), answerpow3: (pow2 - pow), answerpow4: pow2, aChoise: n1, bChoise: n1, cChoise: n1, dChoise: n1, num1: n1, num2: pow, num3: pow2, signpow1: "-", signpow2: "-", ind: "1" });
                }
            }
        }
        else if (index == 2) {
            if (rand1 == 0) {
                if (rand2 == 0) {
                    this.setState({ answerpow2: total, answerpow1: pow2, answerpow3: (pow2 - pow), answerpow4: (pow + pow2), ind: "2", aChoise: n1, bChoise: n1, cChoise: n1, dChoise: n1, num1: n1, num2: pow, num3: pow2, signpow1: "", signpow2: "" });
                }
                else {
                    this.setState({ answerpow2: ("-" + total), answerpow1: pow2, answerpow3: (pow2 - pow), answerpow4: (pow - pow2), ind: "2", aChoise: n1, bChoise: n1, cChoise: n1, dChoise: n1, num1: n1, num2: pow, num3: pow2, signpow1: "", signpow2: "-" });
                }
            }
            else {
                if (rand2 == 0) {
                    this.setState({ answerpow2: ("-" + total), answerpow1: pow2, answerpow3: (pow2 - pow), answerpow4: (pow + pow2), ind: "2", aChoise: n1, bChoise: n1, cChoise: n1, dChoise: n1, num1: n1, num2: pow, num3: pow2, signpow1: "-", signpow2: "" });
                }
                else {
                    this.setState({ answerpow2: total, answerpow1: pow2, answerpow3: (pow2 - pow), answerpow4: (pow + pow2), ind: "2", aChoise: n1, bChoise: n1, cChoise: n1, dChoise: n1, num1: n1, num2: pow, num3: pow2, signpow1: "-", signpow2: "-" });
                }
            }


        }
        else if (index == 3) {
            if (rand1 == 0) {
                if (rand2 == 0) {
                    this.setState({ answerpow3: total, answerpow2: pow2, answerpow1: (pow2 - pow), answerpow4: (pow + pow2), aChoise: n1, bChoise: n1, cChoise: n1, dChoise: n1, num1: n1, num2: pow, num3: pow2, signpow1: "", signpow2: "", ind: "3" });
                }
                else {
                    this.setState({ answerpow3: ("-" + total), answerpow2: pow2, answerpow1: (pow2 - pow), answerpow4: (pow + pow2), aChoise: n1, bChoise: n1, cChoise: n1, dChoise: n1, num1: n1, num2: pow, num3: pow2, signpow1: "", signpow2: "-", ind: "3" });
                }
            }
            else {
                if (rand2 == 0) {
                    this.setState({ answerpow3: ("-" + total), answerpow2: pow2, answerpow1: (pow2 - pow), answerpow4: (pow + pow2), aChoise: n1, bChoise: n1, cChoise: n1, dChoise: n1, num1: n1, num2: pow, num3: pow2, signpow1: "-", signpow2: "", ind: "3" });
                }
                else {
                    this.setState({ answerpow3: total, answerpow2: pow2, answerpow1: (pow2 - pow), answerpow4: (pow + pow2), aChoise: n1, bChoise: n1, cChoise: n1, dChoise: n1, num1: n1, num2: pow, num3: pow2, signpow1: "-", signpow2: "-", ind: "3" });
                }
            }


        }
        else if (index == 4) {
            if (rand1 == 0) {
                if (rand2 == 0) {
                    this.setState({ answerpow4: total, answerpow2: pow2, answerpow1: (pow2 - pow), answerpow3: (pow + pow2), ind: "4", aChoise: n1, bChoise: n1, cChoise: n1, dChoise: n1, num1: n1, num2: pow, num3: pow2, signpow1: "", signpow2: "" });
                }
                else {
                    this.setState({ answerpow4: ("-" + total), answerpow2: pow2, answerpow1: (pow2 - pow), answerpow3: (pow + pow2), ind: "4", aChoise: n1, bChoise: n1, cChoise: n1, dChoise: n1, num1: n1, num2: pow, num3: pow2, signpow1: "", signpow2: "-" });
                }
            }
            else {
                if (rand2 == 0) {
                    this.setState({ answerpow4: ("-" + total), answerpow2: pow2, answerpow1: (pow2 - pow), answerpow3: (pow + pow2), ind: "4", aChoise: n1, bChoise: n1, cChoise: n1, dChoise: n1, num1: n1, num2: pow, num3: pow2, signpow1: "-", signpow2: "" });
                }
                else {
                    this.setState({ answerpow4: total, answerpow2: pow2, answerpow1: (pow2 - pow), answerpow3: (pow + pow2), ind: "4", aChoise: n1, bChoise: n1, cChoise: n1, dChoise: n1, num1: n1, num2: pow, num3: pow2, signpow1: "-", signpow2: "-" });
                }
            }

        }
    }
    componentDidMount() {
        var x = (Math.random() * 3) + 1;
        x = parseInt(x);
        switch (x) {
            case 1: {
                this.newNumZero();
                break;
            }
            case 2: {
                this.newNumNegative();
                break;
            }
            case 3: {
                this.newNumEven();
                break;
            }
            case 4: {
                this.newNumDouble();
                break;
            }
        }
    }
    control = (t) => {
        var tcount = parseInt(this.state.truecount, 10);
        var fcount = parseInt(this.state.falsecount, 10);
        var wfcount = parseInt(this.state.wholefalsecount, 10);
        if (this.state.ind == t) {
            tcount++;
            this.setState({ truecount: tcount, falseflag: false });
            this.state.colorboxs[t - 1] = "green";
            this.setState(this.state.colorboxs);

        }
        else {
            wfcount++;
            if (!this.state.falseflag)
                this.setState({ falsecount: (fcount + 1), falseflag: true });
            this.setState({ wholefalsecount: wfcount });
            this.state.colorboxs[t - 1] = "red";
            this.setState(this.state.colorboxs);
        }
    }

    render() {
        return (
            <Container>
                <Content style={{ padding: 10 }}>
                    <View style={{ flexDirection: "column", display: this.state.displayzero }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text>AÇIKLAMA BURAYA1</Text>
                        </View>
                        <View style={{ flexDirection: "row", flexDirection: "row", display: this.state.displayFirstView }}>
                            <Text style={{ fontSize: 30 }}>{this.state.signV2}{this.state.num1}</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.num2}</Text>
                            <Text style={{ fontSize: 30 }}>=</Text>
                            <Text style={{ fontSize: 30 }}>?</Text>
                            <Button onPress={this.generateQuestion}><Text>Yeni Sayı</Text></Button>
                        </View>
                        <View style={{ flexDirection: "row", display: this.state.displaySecondView }}>
                            <Text style={{ fontSize: 30 }}>({this.state.signV2}{this.state.num1})</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.num2}</Text>
                            <Text style={{ fontSize: 30 }}>=</Text>
                            <Text style={{ fontSize: 30 }}>?</Text>
                            <Button onPress={this.generateQuestion}><Text>Yeni Sayı</Text></Button>
                        </View>
                    </View>

                    <View style={{ flexDirection: "column", display: this.state.displaydouble }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text>AÇIKLAMA BURAYA2</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 30 }}>({this.state.num1}</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.signpow1}{this.state.num2}</Text>
                            <Text style={{ fontSize: 30 }}>)</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.signpow2}{this.state.num3}</Text>
                            <Text style={{ fontSize: 30 }}>=</Text>
                            <Text style={{ fontSize: 30 }}>?</Text>
                            <Button onPress={this.generateQuestion}><Text>Yeni Sayı</Text></Button>
                        </View>
                    </View>

                    <View style={{ flexDirection: "column", display: this.state.displaynegative }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text>AÇIKLAMA BURAYA3</Text>
                        </View>
                        <View style={{ flexDirection: "row", display: this.state.negativeview1 }}>
                            <Text style={{ fontSize: 30 }}>{this.state.negativesign2}{this.state.num1}</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.sign}{this.state.num2}</Text>
                            <Text style={{ fontSize: 30 }}>=</Text>
                            <Text style={{ fontSize: 30 }}>?</Text>
                            <Button onPress={this.generateQuestion}><Text>Yeni Sayı</Text></Button>
                        </View>
                        <View style={{ flexDirection: "row", display: this.state.negativeview2 }}>
                            <Text style={{ fontSize: 30 }}>({this.state.negativesign2}{this.state.num1})</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.sign}{this.state.num2}</Text>
                            <Text style={{ fontSize: 30 }}>=</Text>
                            <Text style={{ fontSize: 30 }}>?</Text>
                            <Button onPress={this.generateQuestion}><Text>Yeni Sayı</Text></Button>
                        </View>
                    </View>

                    <View style={{ flexDirection: "column", display: this.state.displayeven }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text>AÇIKLAMA BURAYA4</Text>
                        </View>
                        <View style={{ flexDirection: "row", display: this.state.evenView1 }}>
                            <Text style={{ fontSize: 30 }}>{this.state.sign}{this.state.num1}</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.signpow}{this.state.num2}</Text>
                            <Text style={{ fontSize: 30 }}>=</Text>
                            <Text style={{ fontSize: 30 }}>?</Text>
                            <Button onPress={this.generateQuestion}><Text>Yeni Sayı</Text></Button>
                        </View>
                        <View style={{ flexDirection: "row", display: this.state.evenView2 }}>
                            <Text style={{ fontSize: 30 }}>({this.state.sign}{this.state.num1})</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.signpow}{this.state.num2}</Text>
                            <Text style={{ fontSize: 30 }}>=</Text>
                            <Text style={{ fontSize: 30 }}>?</Text>
                            <Button onPress={this.generateQuestion}><Text>Yeni Sayı</Text></Button>
                        </View>
                    </View>

                    <Footer style={{ backgroundColor: "white", marginTop: 120 }}>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Button onPress={() => this.control(1)} style={[styles.buttonstyle2, { width: 150, height: 50, backgroundColor: this.state.colorboxs[this.state.aa] }]}  >
                                    <Text style={styles.buttontext2}> {this.state.aChoise} </Text>
                                    <Text style={{ fontSize: 25, marginBottom: 20, marginRight: 115, color: "white" }}>{this.state.answerpow1}</Text>
                                </Button>
                                <Button onPress={() => this.control(2)} style={[styles.buttonstyle2, { width: 150, height: 50, backgroundColor: this.state.colorboxs[this.state.b] }]}  >
                                    <Text style={styles.buttontext2}> {this.state.bChoise} </Text>
                                    <Text style={{ fontSize: 25, marginBottom: 20, marginRight: 115, color: "white" }}>{this.state.answerpow2}</Text>
                                </Button>
                            </View>
                        </View>
                    </Footer>
                    <Footer style={{ backgroundColor: "white" }}>
                        <View style={{ flexDirection: "row", display: this.state.displayanswer34 }}>
                            <Button onPress={() => this.control(3)} style={[styles.buttonstyle2, { width: 150, height: 50, backgroundColor: this.state.colorboxs[this.state.c] }]}  >
                                <Text style={styles.buttontext2}> {this.state.cChoise} </Text>
                                <Text style={{ fontSize: 25, marginBottom: 20, color: "white", marginRight: 115 }}>{this.state.answerpow3}</Text>
                            </Button>
                            <Button onPress={() => this.control(4)} style={[styles.buttonstyle2, { width: 150, height: 50, backgroundColor: this.state.colorboxs[this.state.d] }]} >
                                <Text style={styles.buttontext2} > {this.state.dChoise} </Text>
                                <Text style={{ fontSize: 25, marginBottom: 20, color: "white", marginRight: 115 }}>{this.state.answerpow4}</Text>
                            </Button>
                        </View>

                    </Footer>
                    <Footer style={{ backgroundColor: "gray", height: 90, marginTop: 30 }}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 20, color: "orange", marginLeft: 20 }}>Toplam Soru Sayısı={this.state.questioncount}</Text>
                            <Text style={{ fontSize: 20, color: "purple", marginLeft: 20 }}>Toplam Doğru Sayısı={this.state.truecount}</Text>
                            <Text style={{ fontSize: 20, color: "brown", marginLeft: 20 }}>Toplam Yanlış Sayısı={this.state.falsecount}</Text>
                        </View>
                    </Footer>
                </Content>
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
        color: "blue",
        backgroundColor: "gray",
        fontSize: 20,
    },
    buttontext2: {
        textAlign: "center",
        color: "gray",
        fontSize: 40,
    },
    buttonstyle: {
        marginLeft: 5
    },
    buttonstyle2: {

        marginLeft: 5
    }
});


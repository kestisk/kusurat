

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
export default class Pow_basic1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display1: "flex",
            display2: "none",
            iconname1: "check", iconname2: null,
            leftbtnBackColor: "red", rightbtnBackColor: "gray"
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
                                <Text style={{ marginLeft: 10, fontSize: 10, color: "white", fontSize: 15 }}>Temel Üs Alma</Text>
                            </Button>
                            <Button onPress={this.tik2} style={{ marginLeft: 10, marginTop: 1, flex: 1, backgroundColor: this.state.rightbtnBackColor }}>
                                <Icon type="FontAwesome" name={this.state.iconname2} />
                                <Text style={{ marginLeft: 10, fontSize: 10, color: "white", fontSize: 15 }}>Sayının Sıfırıncı Kuvveti</Text>
                            </Button>
                        </View>
                        <View style={{ display: this.state.display1 }}>
                            <Basic_Pow></Basic_Pow>
                        </View>
                        <View style={{ display: this.state.display2 }}>
                            <Zero_Power></Zero_Power>
                        </View>


                    </View>
                </Content>

            </Container>
        );
    }

}
class Zero_Power extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: "", num2: 0,
            sign: "",
            signV2: "",
            answer: "1",
            displayFirstView: "none", displaySecondView: "none"

        };
    }
    newNum = () => {
        this.setState({ displayFirstView: "none", displaySecondView: "none" });
        var n1 = (Math.random() * 20 + 1);
        var random = (Math.random() * 20);
        random = parseInt(random % 2);
        n1 = parseInt(n1);
        var x = parseInt(n1 % 2);
        if (random == 0) {
            if (x == 0) {
                this.setState({ sign: "" });
            }
            else {
                this.setState({ sign: "-" });
            }
            this.setState({ num1: n1, displayFirstView: "flex", displaySecondView: "none" });
        }
        else {
            if (x == 0) {
                this.setState({ signV2: "" });
            }
            else {
                this.setState({ signV2: "-" });
            }
            this.setState({ num1: n1, displayFirstView: "none", displaySecondView: "flex" });
        }
    }
    componentDidMount() {
        var n1 = (Math.random() * 20 + 1);
        n1 = parseInt(n1);
        this.setState({ num1: n1, displayFirstView: "flex", displaySecondView: "none" });
    }
    render() {
        return (
            <Container>
                <Content style={{ padding: 10 }}>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text>AÇIKLAMA BURAYA</Text>
                        </View>
                        <View style={{ flexDirection: "row", display: this.state.displayFirstView }}>
                            <Text style={{ fontSize: 30 }}>{this.state.sign}{this.state.num1}</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.num2}</Text>
                            <Text style={{ fontSize: 30 }}>=</Text>
                            <Text style={{ fontSize: 30 }}>{this.state.sign}{this.state.answer}</Text>
                            <Button onPress={this.newNum}><Text>Yeni Sayı</Text></Button>
                        </View>
                        <View style={{ flexDirection: "row", display: this.state.displaySecondView }}>
                            <Text style={{ fontSize: 30 }}>({this.state.sign}{this.state.num1})</Text>
                            <Text style={{ fontSize: 20, marginBottom: 20 }}>{this.state.num2}</Text>
                            <Text style={{ fontSize: 30 }}>=</Text>
                            <Text style={{ fontSize: 30 }}>{this.state.answer}</Text>
                            <Button onPress={this.newNum}><Text>Yeni Sayı</Text></Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}
class Basic_Pow extends Component {
    render() {
        return (
            <View><Text>onur</Text></View>
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

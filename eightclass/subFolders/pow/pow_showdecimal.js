

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title, Footer, Text } from 'native-base';
import { Platform, StyleSheet, View, Alert, Image, ScrollView, FlatList } from 'react-native';
export default class Pow_showdecimal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number1: "1.Sayı", number2: "2.Sayı",
            shownumber1: [{ snumber1: "", key: "", plus: "" }],
            shownumber2: [{ snumber2: "", key: "", plus: "" }],
            shownumber3: [{ snumber3: "", key: "", plus: "" }],
            switchdoor: false, repeat: false, firstTime: true, firstTime2: true,
            cState: "Virgülden Sonraki Sayı",
            numberBackColor: "green", number2BackColor: "white",
            storekey1: [],
            storekey2: [],
            storekey3: [],
            again: false,
            btnflag: true
        }


    }
    warn = () => {
        this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
    }
    clean = () => {
        this.setState({
            number1: "1.Sayı", number2: "2.Sayı",
            shownumber1: [{ snumber1: "", key: "", plus: "" }],
            shownumber2: [{ snumber2: "", key: "", plus: "" }],
            shownumber3: [{ snumber3: "", key: "", plus: "" }],
            switchdoor: false, repeat: false, firstTime: true, firstTime2: true,
            cState: "Virgülden Sonraki Sayı",
            numberBackColor: "green", number2BackColor: "white",
            storekey1: [],
            storekey2: [],
            storekey3: [],
            again: false,
            btnflag: true
        });
    }
    cleanOnePart = () => {
        if (this.state.switchdoor) {
            this.setState({
                firstTime2: true, number2: "2.Sayı", message: "", btnflag: true, repeat: false,
                shownumber1: [{ snumber1: "", key: "", plus: "" }],
                shownumber2: [{ snumber2: "", key: "", plus: "" }],
                shownumber3: [{ snumber3: "", key: "", plus: "" }],
            });
        }
        else {
            this.setState({
                firstTime: true, number1: "1.Sayı", message: "", btnflag: true, repeat: false,
                shownumber1: [{ snumber1: "", key: "", plus: "" }],
                shownumber2: [{ snumber2: "", key: "", plus: "" }],
                shownumber3: [{ snumber3: "", key: "", plus: "" }],
            });
        }
    }
    write = (param) => {

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
                    this.setState({ number2: num1, message: "", number2BackColor: "green", numberBackColor: "white" });
                    if (this.state.number1.length > 0 && this.state.number1.length < 6)
                        this.setState({ btnflag: false });
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
                    this.setState({ number1: num1, message: "", numberBackColor: "green", number2BackColor: "white" });
                    if (this.state.number2.length > 0 && this.state.number2.length < 6)
                        this.setState({ btnflag: false });
                }
                else {
                    this.setState({ btnflag: false });
                    this.warn();
                }
            }
        }
    }
    changeState = () => {
        if (this.state.switchdoor)
            this.setState({ numberBackColor: "green", number2BackColor: "white", switchdoor: false, cState: "Virgülden Sonraki Sayı" });
        else
            this.setState({ numberBackColor: "white", number2BackColor: "green", switchdoor: true, cState: "Virgülden Önceki Sayı" });
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
    solution = () => {
        //repeat true yap

        var num1 = [... this.state.number1];
        var num2 = [... this.state.number2];
        num1 = num1.reverse();
        for (i = 0; i < this.state.number1.length; i++) {
            this.state.shownumber1.push({
                snumber1: (num1[i] + " x 10"), key: (i).toString(), plus: " + "
            });
        }

        for (i = 0; i < this.state.number2.length; i++) {
            if (i + 1 == this.state.number2.length)
                this.state.shownumber2.push({
                    snumber2: (num2[i] + " x 10"), key: ("-" + (i + 1)), plus: ""
                });
            else this.state.shownumber2.push({
                snumber2: (num2[i] + " x 10"), key: ("-" + (i + 1)), plus: " + "
            });
        }


        for (i = 0; i < this.state.number2.length; i++) {
            var ten = Math.pow(10, i + 1);
            ten = parseInt(ten);
            if (i + 1 == this.state.number2.length)
                this.state.shownumber3.push({
                    snumber3: (num2[i] + " x 1/"), key: ten.toString(), plus: ""
                });
            else
                this.state.shownumber3.push({
                    snumber3: (num2[i] + " x 1/"), key: ten.toString(), plus: " + "
                });
        }
        this.state.shownumber1 = this.state.shownumber1.reverse();
        this.setState(this.state.shownumber1);
        this.setState(this.state.shownumber2);
        this.setState({ repeat: true, again: true });
        var arr = [];
        this.state.shownumber1.map(obj => {

            arr.push(this.state.shownumber1.indexOf(obj));

        });

        this.setState({
            storekey1: arr
        });

        var arr2 = [];
        this.state.shownumber2.map(obj => {

            arr2.push(this.state.shownumber2.indexOf(obj));

        });

        this.setState({
            storekey2: arr2
        });
        var arr3 = [];
        this.state.shownumber3.map(obj => {

            arr3.push(this.state.shownumber3.indexOf(obj));

        });

        this.setState({
            storekey3: arr3
        });



    }
    render() {
        return (
            <Container>
                <Content style={{ padding: 10, }}>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Button onPress={this.callCheckAgain} disabled={this.state.btnflag} style={{ marginLeft: 10 }}><Text style={{ color: "white" }}>Cevapla</Text></Button>
                                <Button onPress={this.changeState} style={{ marginLeft: 10 }}><Text style={{ color: "white" }}>{this.state.cState}</Text></Button>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text>AÇIKLAMA BURAYA2</Text>
                            <Text>{this.state.message}</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 30, backgroundColor: this.state.numberBackColor }}>
                                {this.state.number1}
                            </Text>
                            <Text style={{ fontSize: 30 }}>
                                ,
                            </Text>
                            <Text style={{ fontSize: 30, backgroundColor: this.state.number2BackColor }}>
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
                            <View>
                                <FlatList horizontal={true}
                                    data={this.state.shownumber2}
                                    renderItem={({ item }) => {
                                        return (
                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={{ fontSize: 15 }}>{item.snumber2}</Text>
                                                <Text style={{ fontSize: 8, marginBottom: 10 }}>{item.key}</Text>
                                                <Text style={{ fontSize: 15 }}>{item.plus}</Text>
                                            </View>
                                        );

                                    }}
                                    // keyExtractor={item => item.key}
                                    at={this.state.storekey2}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row" }}>
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
                            <View style={{ flexDirection: "row" }}>
                                <View>
                                    <FlatList horizontal={true}
                                        data={this.state.shownumber3}
                                        renderItem={({ item }) => {
                                            return (
                                                <View style={{ flexDirection: "row" }}>
                                                    <Text style={{ fontSize: 15 }}>{item.snumber3}</Text>
                                                    <Text style={{ fontSize: 15 }}> {item.key}</Text>
                                                    <Text style={{ fontSize: 15 }}>{item.plus}</Text>
                                                </View>
                                            );
                                        }}
                                        // keyExtractor={item => item.key}
                                        at={this.state.storekey3}
                                    />
                                </View>
                            </View>
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
                    <Button info rounded onPress={this.cleanOnePart} >
                        <Text style={{ color: "white", fontSize: 15 }}>Sil</Text>
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
                        <Text style={{ color: "white", fontSize: 10 }}>Sıfırla</Text>
                    </Button>
                </Footer>

            </Container>
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



import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title, Footer, List, ListItem } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView, FlatList } from 'react-native';
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
            btnflag: false
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
    write = (param) => {
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
            btnflag: true
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
        this.setState({ showtempnumber: this.state.tempnumber, btnflag: true });
        var num1 = this.state.tempnumber;
<<<<<<< HEAD
        debugger;
=======

>>>>>>> refs/remotes/origin/kusurat
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
                this.setState({ btnflag: false });
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
                <Content>
                    <Text>{this.state.message}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ marginTop: 20, fontSize: 30, marginLeft: 20 }}>{this.state.tempnumber}{this.state.showtempnumber}{this.state.showleftNumberArray}</Text>
                        <Text style={{ marginTop: 20, backgroundColor: "red", height: 450, width: 5 }}></Text>
                        <Text style={{ marginTop: 20, fontSize: 30 }}>{this.state.showrightNumberArray}</Text>
                        <Button onPress={this.callCheckAgain} disabled={this.state.btnflag} style={{ marginTop: 50, marginLeft: 150 }}><Text style={{ fontSize: 20 }}>Kuvvetini Bul</Text></Button>

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

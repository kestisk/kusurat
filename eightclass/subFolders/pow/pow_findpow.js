

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title, Footer, List, ListItem } from 'native-base';
import { Platform, StyleSheet, Text, View, Alert, Image, ScrollView } from 'react-native';
export default class Pow_findpow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempnumber: "",
            leftNumberArray: [""],
            rightNumberArray: [""],
            showleftNumberArray: [""],
            showrightNumberArray: [""],
            storePow: [{ storenumber: "", x: "", key: "" }],
            clearctrl: false,
        };

    }
    warn = () => {
        this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
    }
    write = (param) => {
        var cleardoor = this.state.clearctrl;
        if (cleardoor) {
            this.setState({ clearctrl: false, message: "", leftNumberArray: [""], rightNumberArray: [""], showleftNumberArray: [""], showrightNumberArray: [""], storePow: [{ storenumber: "", x: "", key: "" }], });
        }
        var num1 = this.state.tempnumber;

        if (num1.length < 4) {
            num1 = num1 + param;
            this.setState({ tempnumber: num1 });
        }
        else {
            this.warn();
        }
    }
    clean = () => {
        this.setState({ message: "", leftNumberArray: [""], rightNumberArray: [""], showleftNumberArray: [""], showrightNumberArray: [""], storePow: [{ storenumber: "", x: "", key: "" }], });

    }
    findpow = () => {
        var num1 = this.state.tempnumber;
        if (num1 != "") {
            clearInterval(this.at);
            clearTimeout(this.at2);
            this.setState({ clearctrl: true });
            //this.setState({ tempnumber: "" });

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

        }
        else {
            this.warn();
        }
        count = 1;
        for (a = 0; a < this.state.rightNumberArray.length; a += 1) {

            if (this.state.rightNumberArray[a] != "" && this.state.rightNumberArray[a] != "\n") {
                if (this.state.rightNumberArray[a] == this.state.rightNumberArray[a + 2]) {
                    count++;
                }
                else {
                    this.state.storePow.push(({ storenumber: this.state.rightNumberArray[a], x: "x", key: count }));
                    this.setState(this.state.storePow);
                    ind++;
                    count = 1;
                }
            }

        }
        this.settimem();
    }
    settimem() {
        i = 0;
        this.at = setInterval(function () {
            if (i < this.state.leftNumberArray.length) {
                this.state.showleftNumberArray.push(this.state.leftNumberArray[i]);
                this.setState(this.state.showleftNumberArray);
                this.settimem2(i);
            }
            i++;
        }.bind(this), 600);
    }
    settimem2(i) {
        this.at2 = setTimeout(function () {
            this.state.showrightNumberArray.push(this.state.rightNumberArray[i + 1]);
            this.setState(this.state.showrightNumberArray);
        }.bind(this), 0);
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text>{this.state.message}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ marginTop: 20, fontSize: 30, marginLeft: 20 }}>{this.state.tempnumber}{this.state.showleftNumberArray}</Text>
                        <Text style={{ marginTop: 20, backgroundColor: "red", height: 450, width: 5 }}></Text>
                        <Text style={{ marginTop: 20, fontSize: 30 }}>{this.state.showrightNumberArray}</Text>
                        <Button onPress={this.findpow} style={{ marginTop: 50, marginLeft: 150 }}><Text style={{ fontSize: 20 }}>Kuvvetini Bul</Text></Button>

                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <List dataArray={this.state.storePow}
                            renderRow={(item) =>
                                <ListItem style={{ borderColor: "white" }}>
                                    <Text style={{ color: "black", fontSize: 30 }}>{item.storenumber}-</Text>
                                    <Text style={{ color: "black", fontSize: 30 }}>{item.key}</Text>
                                    <Text style={{ color: "black", fontSize: 30 }}>  {item.x}</Text>

                                </ListItem>
                            }>
                        </List>
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

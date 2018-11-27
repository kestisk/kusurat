

import React, { Component } from 'react';
import {
    Container, Content, Button, Header, Left, Text, Icon, Body, Title, Footer, List, ListItem, Card, CardItem,
    Right
} from 'native-base';
import { Platform, StyleSheet, View, Alert, Image, ScrollView, FlatList, ImageBackground, BackHandler } from 'react-native';
import { Headers } from '../../headers';
export default class Pow_findpow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [""], number: "130",
            numberarr: [""],
            stick: 400,
            one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", zero: "0",
            message: "",
            prime: [""],
            disable: false,
            flagg: false,
            storePow: [{ storenumber: "", x: "", key: "" }],
            footdsp: "flex",
            storePow2: []
        }

        this.arrayleft = [];
        this.arrayright = [];

    }
    warn = () => {
        this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
    }
    clean = () => {
        this.setState({ message: "", flagg: true, disable: true, numberarr: [""], array: [""], number: "", numberarrshow: [""], arrayshow: [""], storePow: [{ storenumber: "", x: "", key: "" }], storePow2: [""] })
        this.arrayleft = [];
        this.arrayright = [];
        clearInterval(this.delayed1);
        clearTimeout(this.delayed2);
    }
    componentWillUnmount() {
        clearInterval(this.delayed1);
        clearTimeout(this.delayed2);
        clearInterval(this.delay);
        clearTimeout(this.delay2);
        BackHandler.removeEventListener(
            "hardwareBackPress",
            this.handleBackButtonClick
        );
    }

    handleBackButtonClick = () => {
        this.props.navigation.navigate("powers");
        return true;
    }

    keybort(variable) {
        if (this.state.flagg == true) {
            this.setState({ number: variable.toString(), disable: false, numberarr: [""], array: [""], numberarrshow: [""], arrayshow: [""], flagg: false, storePow: [{ storenumber: "", x: "", key: "" }], storePow2: [""] });




        }

        else {
            if (this.state.number.length < 4) {
                this.setState({
                    number: (this.state.number + variable.toString())
                });
            }
            else {
                this.warn();
            }

        }
    }
    direct = () => {
        if (this.state.flagg == false) {
            this.arrayleft = [];
            this.arrayright = [];
            num = this.state.number;
            this.setState({ footdsp: "none" });
            this.devided(num);
        }
        else {
            this.setState({ message: "", flagg: false, numberarr: [""], array: [""], numberarrshow: [""], arrayshow: [""], storePow: [{ storenumber: "", x: "", key: "" }], storePow2: [""], footdsp: "none" })
            this.delayed3 = setTimeout(function () {
                this.arrayleft = [];
                this.arrayright = [];
                num = this.state.number;
                this.devided(num);
            }.bind(this), 0);

        }


    }
    store(i, count) {
        this.state.storePow.push(({ storenumber: i, x: "x", key: count.toString() }));
        this.setState(this.state.storePow);


    }
    cleanOnePart = () => {
        if (this.state.flagg == false) {
            this.setState({ number: this.state.number.slice(0, -1) })
            if (this.state.number.length == 1) {
                this.clean();
            }
        }
        else {
            this.clean();
        }

    }
    devided = (num) => {

        this.setState(() => ({ disable: true, flagg: true, message: "" }));
        clearInterval(this.delayed1);
        clearTimeout(this.delayed2);
        clearTimeout(this.delayed3);



        count = 0;
        i = 2
        while (num >= i) {
            if (num % i == 0) {
                count++;
                if (num == i) {

                    this.state.storePow.push(({ storenumber: i, x: "", key: count.toString() }));
                    this.setState(this.state.storePow);

                }

                num = num / i;

                this.arrayleft.push("\n");
                this.arrayleft.push(num);
                this.arrayright.push(i);
                this.arrayright.push("\n");

                this.state.arrayshow = this.arrayright;
                this.state.numberarrshow = this.arrayleft;
                this.setState(this.state.arrayshow);
                this.setState(this.state.numberarrshow);

            }

            else {
                if (count != 0) {
                    this.store(i, count);
                    count = 0;
                }
                i++;
            }
        }
        if (this.arrayright.length > 10)
            this.setState({ stick: 600 });
        this.settimem();

    }
    settimem() {
        i = 0;

        this.delayed1 = setInterval(() => {



            if (i < this.arrayright.length) {
                this.state.array.push(this.arrayright[i]);
                this.setState(this.state.array);
                this.settimem2(i);
            }
            else {

                clearInterval(this.delayed1);
                clearTimeout(this.delayed2);

                this.setState({ disable: false, footdsp: "flex" });
                var arr = [];
                this.state.storePow.map(obj => {

                    arr.push(this.state.storePow.indexOf(obj));

                });

                this.setState({
                    storePow2: arr
                });

            }
            i++;

        }, 1000);





    }
    settimem2(i) {


        this.delayed2 = setTimeout(function () {

            this.state.numberarr.push(this.arrayleft[i]);
            this.setState(this.state.numberarr);
        }.bind(this), 0);

    }
    warn = () => {
        this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
    }
    warn2 = () => {
        this.setState({ message: "Lütfen Sayı Girin" });
    }
    componentWillMount() {
        BackHandler.addEventListener(
            "hardwareBackPress",
            this.handleBackButtonClick
        );
    }
    back = () => {
        this.props.navigation.navigate("powers");
    }
    render() {
        return (
            <Container>
                <ImageBackground source={require("../../../image/galaxy.jpg")} style={{ width: '100%', height: '100%' }}>
                    <Headers onur="Pow_findpowPagesTYS"></Headers>
                    <Content >
                        <Text>{this.state.message}</Text>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 30, marginLeft: 50, color: "white", textShadowColor: "black", textShadowOffset: { width: -3, height: 5 }, }}>{this.state.number}</Text>
                                <Button rounded disabled={this.state.disable} onPress={this.direct}><Text style={{ fontSize: 50 }}>=</Text></Button>
                                <View>
                                    <FlatList horizontal={true}
                                        data={this.state.storePow}
                                        renderItem={({ item }) => {

                                            return (

                                                <View style={{ flexDirection: "row" }}>

                                                    <Text style={{ fontSize: 30, color: "white", textShadowColor: "black", textShadowOffset: { width: -3, height: 5 } }}>{item.storenumber}</Text>
                                                    <Text style={{ fontSize: 20, marginBottom: 20, color: "white", textShadowColor: "black", textShadowOffset: { width: -3, height: 5 } }}>{item.key}</Text>
                                                    <Text style={{ fontSize: 30, color: "white", textShadowColor: "black", textShadowOffset: { width: -3, height: 5 } }}>{item.x}</Text>
                                                </View>
                                            );

                                        }}
                                        // keyExtractor={item => item.key}
                                        at={this.state.storePow2}
                                    />

                                </View>
                            </View>
                            <Card style={{ marginLeft: 10, marginRight: 10, minHeight: 400 }}>
                                <CardItem>

                                    <Body>
                                        <Text>{this.state.message}</Text>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ marginTop: 20, fontSize: 30, marginLeft: 20 }}>{this.state.number}{this.state.numberarr}</Text>
                                            <Text style={{ marginTop: 20, marginLeft: 10, backgroundColor: "rgb(25,25,112)", height: this.state.stick, width: 4 }}></Text>
                                            <Text style={{ marginTop: 20, fontSize: 30 }}>{this.state.array}</Text>
                                        </View>
                                    </Body>
                                    <Button onPress={this.clean} transparent>
                                        <Icon style={{ color: "rgb(142,163,226)", fontSize: 40 }} type="FontAwesome" name='refresh' />

                                    </Button>
                                </CardItem>
                            </Card>
                        </View>
                    </Content>
                </ImageBackground>
            </Container >
        );
    }

}
export class At extends Pow_findpow {
    constructor(props) {

        super(props);

        this.state = {


        }

    }
    justdivede(num) {
        var storePow = [{ storenumber: "", x: "", keyA: "", keyB: "", keyC: "", keyD: "" }];


        //  this.setState({storePow: [{storenumber: "", x: "", key: "" }], storePow2: [""] });
        first = true;
        count = 0;
        i = 2
        while (num >= i) {
            if (num % i == 0) {
                count++;
                if (num == i) {
                    if (first) {
                        storePow.push(({
                            storenumber: i, x: "",
                            keyA: count.toString(),
                            keyB: (count + 1).toString(),
                            keyC: (count + 2).toString(),
                            keyD: (count + 3).toString()
                        }));
                    }
                    else {
                        storePow.push(({
                            storenumber: i, x: "",
                            keyA: count.toString(),
                            keyB: (count).toString(),
                            keyC: (count).toString(),
                            keyD: (count).toString()
                        }));
                    }


                }

                num = num / i;




            }

            else {
                if (count != 0) {
                    if (first) {
                        storePow.push(({
                            storenumber: i, x: "x",
                            keyA: count.toString(),
                            keyB: (count + 1).toString(),
                            keyC: (count + 2).toString(),
                            keyD: (count + 3).toString()
                        }));
                        first = false
                    }
                    else {
                        storePow.push(({
                            storenumber: i, x: "x",
                            keyA: count.toString(),
                            keyB: (count).toString(),
                            keyC: (count).toString(),
                            keyD: (count).toString()
                        }));
                    }


                    count = 0;
                }
                i++;
            }

        }

        return storePow;
    }
    render() {
        return (

            <View>
                <Button onPress={this.sk}><Text>gönder</Text></Button>
                <FlatList horizontal={true}
                    data={this.state.storePow}
                    renderItem={({ item }) => {

                        return (

                            <View style={{ flexDirection: "row" }}>

                                <Text style={{ fontSize: 30, color: "red" }}>{item.storenumber}</Text>
                                <Text style={{ fontSize: 20, marginBottom: 20, color: "red" }}>{item.key}</Text>
                                <Text style={{ fontSize: 30, color: "red" }}>{item.x}</Text>
                            </View>
                        );

                    }}
                    // keyExtractor={item => item.key}
                    at={this.state.storePow2}
                />

            </View>
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

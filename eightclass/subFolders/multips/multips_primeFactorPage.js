
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
import { Platform, FlatList } from "react-native";

import { StyleSheet } from "react-native";

export class Multips_primeFactorPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [""], number: "130",
            numberarr: [""],

            one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", zero: "0",
            message: "",
            prime: [""],
            disable: false,
            flagg: false,
            storePow: [{ storenumber: "", x: "", key: "" }],

            storePow2: []
        }

        this.arrayleft = [];
        this.arrayright = [];
    }

    warn = () => {
        this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
    }
    clean = () => {
        this.setState({ message: "", flagg: false, disable: false, numberarr: [""], array: [""], number: "", numberarrshow: [""], arrayshow: [""], storePow: [{ storenumber: "", x: "", key: "" }], storePow2: [""] })

    }
    componentWillUnmount() {
        clearInterval(this.delayed1);
        clearTimeout(this.delayed2);
    }
    keybort(variable) {
        if (this.state.flagg == true) {
            this.setState({ number: variable.toString(), numberarr: [""], array: [""], numberarrshow: [""], arrayshow: [""], flagg: false, storePow: [{ storenumber: "", x: "", key: "" }], storePow2: [""] });




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
            num = this.state.number;
            this.devided(num);
        }
        else {
            this.setState({ message: "", flagg: false, numberarr: [""], array: [""], numberarrshow: [""], arrayshow: [""], storePow: [{ storenumber: "", x: "", key: "" }], storePow2: [""] })
            this.delayed3 = setTimeout(function () {
                num = this.state.number;
                this.devided(num);
            }.bind(this), 0);

        }


    }
    store(i, count) {
        this.state.storePow.push(({ storenumber: i, x: "x", key: count.toString() }));
        this.setState(this.state.storePow);


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

                this.setState({ disable: false });
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
    render() {
        return (
            <Container>
                <Content>

                    <Text>{this.state.message}</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ marginTop: 20, fontSize: 30, marginLeft: 20 }}>{this.state.number}{this.state.numberarr}</Text>
                        <Text style={{ marginTop: 20, backgroundColor: "red", height: 450, width: 5 }}></Text>
                        <Text style={{ marginTop: 20, fontSize: 30 }}>{this.state.array}</Text>
                        <View style={{ flexDirection: "column", marginLeft: 150 }}>
                            <Button disabled={this.state.disable} onPress={this.direct} style={{ marginTop: 50 }}><Text style={{ fontSize: 30 }}>AYIR</Text></Button>
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

                        </View>
                    </View>

                </Content>
                <Footer>
                    <Button info rounded onPress={() => { this.keybort(1) }} >
                        <Icon type="MaterialIcons" name="filter-1" />
                    </Button>
                    <Button info rounded onPress={() => { this.keybort(2) }} >
                        <Icon type="MaterialIcons" name="filter-2" />
                    </Button>
                    <Button info rounded onPress={() => { this.keybort(3) }} >
                        <Icon type="MaterialIcons" name="filter-3" />
                    </Button>
                    <Button info rounded onPress={() => { this.keybort(4) }} >
                        <Icon type="MaterialIcons" name="filter-4" />
                    </Button>
                    <Button info rounded onPress={() => { this.keybort(5) }} >
                        <Icon type="MaterialIcons" name="filter-5" />
                    </Button>
                </Footer>
                <Footer>
                    <Button info rounded onPress={() => { this.keybort(6) }} >
                        <Icon type="MaterialIcons" name="filter-6" />
                    </Button>
                    <Button info rounded onPress={() => { this.keybort(7) }} >
                        <Icon type="MaterialIcons" name="filter-7" />
                    </Button>
                    <Button info rounded onPress={() => { this.keybort(8) }} >
                        <Icon type="MaterialIcons" name="filter-8" />
                    </Button>
                    <Button info rounded onPress={() => { this.keybort(9) }} >
                        <Icon type="MaterialIcons" name="filter-9" />
                    </Button>
                    <Button info rounded onPress={() => { this.keybort(0) }} >
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
export class At extends Multips_primeFactorPage {
    constructor(props) {

        super(props);

        this.state = {


        }

    }
    justdivede(num) {
        var storePow = [{ storenumber: "", x: "", keyA: "", keyB: "", keyC: "", keyD: "" }];


        //  this.setState({ storePow: [{ storenumber: "", x: "", key: "" }], storePow2: [""] });
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
        color: "white",
        fontSize: 30,
        padding: 5
    },
    buttontext: {
        textAlign: "center",
        color: "white",
        padding: 5,
        fontSize: 20
    }
});


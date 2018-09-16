

import React, { Component } from 'react';
import { Container, Content, Button, Header, Left, Icon, Body, Title, List, ListItem, Footer } from 'native-base';
import {
    Platform, StyleSheet, Text, View, Alert, Image, ScrollView, ListView, Animated,
    Easing
} from 'react-native';
import { BackHandler } from 'react-native';


export default class PrimeFacTreePage extends Component {
    constructor(props) {
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.animasyonDegeri = new Animated.Value(0);

        this.state = {
            DataSource: "",
            numberarrayTYS: [
                { key: null, id: null, key2: null, id2: null, colorr: null },





            ],
            numberarrayTYS1: [
                { key: null, id: null, key2: null, id2: null, colorr: null },





            ],
            message: "",
            numberTYS: "",
            numbershow: "",
            rand: "",
            randnumber: "",
            brain: "",
            index: "",
            keycontrol: "",
            one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", zero: "0",

        }




    }
    componentDidMount() {
        randnum = 13;
        while (randnum % 2 != 0 && randnum % 3 != 0 && randnum % 5 != 0 && randnum % 7 != 0 && randnum % 11 != 0) {
            randnum = Math.floor(Math.random() * 1001) + 10;

        }
        this.setState({ randnumber: randnum });
    }




}
check = () => {
    ind = this.state.index;
    keycont = this.state.keykont

    debugger;
    if (parseInt(this.state.brain) == parseInt(this.state.numberTYS)) {
        this.setState(() => ({ numberTYS: "true" }));
        this.state.numberarrayTYS[ind].colorr = "red";
        this.setState((se) => ({ numberarrayTYS: se.numberarrayTYS }));



    }
}
clean = () => {
    this.setState(() => ({ numberTYS: "", numbershow: "", numberarrayTYS: [""] }));
    this.animasyonDegeri.setValue(0);

}
warn() {
    this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
}
bringrandom = () => {
    this.setState(() => ({ numberTYS: "", numbershow: "", numberarrayTYS: [""] }));
    this.animasyonDegeri.setValue(0);
    randnum = 13;
    while (randnum % 2 != 0 && randnum % 3 != 0 && randnum % 5 != 0 && randnum % 7 != 0 && randnum % 11 != 0) {
        randnum = Math.floor(Math.random() * 1001) + 10;

    }
    this.setState({ randnumber: randnum });
}


tree = () => {
    this.setState({ numbershow: this.state.randnumber });

    this.animasyonDegeri.setValue(0);
    const doanimate = function (value, duration, easing, delay = 0) {
        return Animated.timing(value, {
            toValue: 1,
            duration,
            easing,
            delay
        });
    };
    doanimate(this.animasyonDegeri, 300, Easing.ease, 0).start();
    num = this.state.randnumber;

    i = 2
    distance = 0;
    count = 0

    while (num > i) {
        if (num % i == 0) {
            num = num / i;

            count++;
            if (count % 2 == 0) {
                mycolorr = "black"
            }
            else {
                mycolorr = "purple"
            }



            if (this.state.numberarrayTYS.length < 5) {
                distance += 50;

                this.state.numberarrayTYS.push({ key2: num, key: i, id: 50, id2: distance, colorr: mycolorr });


                this.setState(this.state.numberarrayTYS);

            }




            else if (this.state.numberarrayTYS.length == 5) {
                distance += 50;
                this.state.numberarrayTYS.push({ key2: i, key: num, id: 50, id2: distance, colorr: mycolorr });


                this.setState(this.state.numberarrayTYS);
            }
            else if (this.state.numberarrayTYS.length >= 6 && this.state.numberarrayTYS.length < 10) {

                distance -= 50;

                this.state.numberarrayTYS.push({ key2: i, key: num, id: 50, id2: distance, colorr: mycolorr });


                this.setState(this.state.numberarrayTYS);

            }
            else if (this.state.numberarrayTYS.length == 10) {

                distance -= 50;

                this.state.numberarrayTYS.push({ key2: num, key: i, id: 50, id2: distance, colorr: mycolorr });


                this.setState(this.state.numberarrayTYS);

            }
            else {
                distance += 50;
                this.state.numberarrayTYS.push({ key2: num, key: i, id: 50, id2: distance, colorr: mycolorr });


                this.setState(this.state.numberarrayTYS);

            }



        }
        else {
            i++;
        }

    }

    len = this.state.numberarrayTYS.length;


    rand = Math.floor(Math.random() * (2 * len - 2)) + 2;
    //  randkey = Math.ceil(Math.random() * 2);
    i = parseInt(rand / 2)
    this.setState({ rand: rand });
    if (len >= 2) {


        if (rand % 2 == 0) {
            remember = this.state.numberarrayTYS[i].key;
            this.setState(() => ({ brain: remember }));
            this.state.numberarrayTYS[i].key = "?"
            this.setState(() => ({ index: i }));
            this.setState(() => ({ keycontrol: "1" }));
            this.setState(this.state.numberarrayTYS);

        }
        else {
            remember = this.state.numberarrayTYS[i].key2;
            this.setState(() => ({ brain: remember }));
            this.state.numberarrayTYS[i].key2 = "?";
            this.setState(() => ({ index: i }));
            this.setState(() => ({ keycontrol: "2" }));
            this.setState(this.state.numberarrayTYS);
        }

    }


    else {
        this.setState({ message: "sayı asaldır" });
    }
    this.setState({ randnumber: "" });

}

render() {
    const intro = this.animasyonDegeri.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 70]
    });
    return (
        <Container>
            <Content>
                <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ position: "relative", fontSize: 30, marginLeft: 100, color: "black" }}> {this.state.randnumber}</Text>
                        <Animated.View
                            style={{
                                top: intro

                            }}
                        >
                            <Text

                                style={{ position: "relative", fontSize: 30, color: "black" }}
                            >

                                {this.state.numbershow}
                            </Text>
                        </Animated.View>

                        <Button style={{ display: "flex" }} onPress={this.tree}><Text style={{ fontSize: 30, color: "white" }}>AYIR</Text></Button>
                        <Button style={{ display: "flex" }} onPress={this.bringrandom}><Text style={{ fontSize: 30, color: "white" }}>YENİ AGAÇ</Text></Button>

                    </View>
                    <Text style={{ fontSize: 20, color: "red" }}>Lütfen ? yerine gelecek sayıyı tuşlayınız({this.state.numberTYS})</Text>
                    <View>

                        <List dataArray={this.state.numberarrayTYS}

                            renderRow={(item) =>
                                <ListItem >


                                    <Text style={{
                                        textAlign: "center",
                                        fontSize: 20,
                                        backgroundColor: item.colorr,
                                        height: 35,
                                        width: 45,
                                        borderRadius: 50,
                                        color: "white",
                                        marginLeft: item.id2
                                    }}>{item.key}</Text>
                                    <Text style={{
                                        textAlign: "center",
                                        fontSize: 20,
                                        backgroundColor: item.colorr,
                                        height: 35,
                                        width: 45,
                                        borderRadius: 50,
                                        color: "white",
                                        marginLeft: item.id
                                    }}>{item.key2}</Text>

                                </ListItem>

                            }>


                        </List>

                    </View>
                </View>
            </Content>
            <Footer>
                <Button info rounded onPress={(numberTYS) =>
                    (this.state.numberTYS.length < 4) ? this.setState({ numberTYS: (this.state.numberTYS + this.state.one) }) : this.warn()} >
                    <Icon type="MaterialIcons" name="filter-1" />
                </Button>
                <Button info rounded onPress={(numberTYS) => (this.state.numberTYS.length < 4) ? this.setState({ numberTYS: (this.state.numberTYS + this.state.two) }) : this.warn()} >
                    <Icon type="MaterialIcons" name="filter-2" />
                </Button>
                <Button info rounded onPress={(numberTYS) => (this.state.numberTYS.length < 4) ? this.setState({ numberTYS: (this.state.numberTYS + this.state.three) }) : this.warn()} >
                    <Icon type="MaterialIcons" name="filter-3" />
                </Button>
                <Button info rounded onPress={(numberTYS) => (this.state.numberTYS.length < 4) ? this.setState({ numberTYS: (this.state.numberTYS + this.state.four) }) : this.warn()} >
                    <Icon type="MaterialIcons" name="filter-4" />
                </Button>
                <Button info rounded onPress={(numberTYS) => (this.state.numberTYS.length < 4) ? this.setState({ numberTYS: (this.state.numberTYS + this.state.five) }) : this.warn()} >
                    <Icon type="MaterialIcons" name="filter-5" />
                </Button>
            </Footer>
            <Footer>
                <Button info rounded onPress={(numberTYS) => (this.state.numberTYS.length < 4) ? this.setState({ numberTYS: (this.state.numberTYS + this.state.six) }) : this.warn()} >
                    <Icon type="MaterialIcons" name="filter-6" />
                </Button>
                <Button info rounded onPress={(numberTYS) => (this.state.numberTYS.length < 4) ? this.setState({ numberTYS: (this.state.numberTYS + this.state.seven) }) : this.warn()} >
                    <Icon type="MaterialIcons" name="filter-7" />
                </Button>
                <Button info rounded onPress={(numberTYS) => (this.state.numberTYS.length < 4) ? this.setState({ numberTYS: (this.state.numberTYS + this.state.eight) }) : this.warn()} >
                    <Icon type="MaterialIcons" name="filter-8" />
                </Button>
                <Button info rounded onPress={(numberTYS) => (this.state.numberTYS.length < 4) ? this.setState({ numberTYS: (this.state.numberTYS + this.state.nine) }) : this.warn()} >
                    <Icon type="MaterialIcons" name="filter-9" />
                </Button>
                <Button info rounded onPress={(numberTYS) => (this.state.numberTYS.length < 4) ? this.setState({ numberTYS: (this.state.numberTYS + this.state.zero) }) : this.warn()} >
                    <Icon type="MaterialIcons" name="exposure-zero" />
                </Button>
                <Button info rounded onPress={this.check} >
                    <Text>KONTROL</Text>

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
        marginTop: 20,

        backgroundColor: '#00BCD4',
        height: 50,

        borderRadius: 150 / 2,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",





    },


});


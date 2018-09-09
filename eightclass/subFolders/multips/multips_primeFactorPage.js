
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
import { BackHandler } from "react-native";
import { StyleSheet } from "react-native";
export default class Multips_primeFactorPage extends Component {
    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            array: [], number: "120",
            numberarr: [""],
            one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9", zero: "0",
            message: "",
            prime: [""]
        }

    }
    warn = () => {
        this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
    }
    clean = () => {
        this.setState({ message: "", numberarr: [""], array: [""], number: "" })

    }

    devided = () => {

        if (this.state.number == "") {
            this.setState(() => ({ number: this.state.numberarr[1] }));

        }
        var num = this.state.number;

        var count = 0;
        for (i = 2; i < 20; i++) {
            for (a = 2; a <= i; a++) {
                b = i % a;
                if (parseInt(b) == 0) {
                    count++;

                }
            }

            if (count < 2) {

                this.state.prime.push(i);
                this.setState(this.state.prime);
            }
            count = 0;

        }

        for (ind = 1; ind < 10; ind++) {
            while (num % this.state.prime[ind] == 0) {
                num = num / this.state.prime[ind];
                this.state.numberarr.push("\n");
                this.state.numberarr.push(num);

                this.setState(this.state.numberarr);
                this.setState(this.state.array);

                this.state.array.push(this.state.prime[ind]);
                this.state.array.push("\n");
                this.setState(this.state.array);

            }
        }

    }
    componentWillMount() {
        BackHandler.addEventListener(
            "hardwareBackPress",
            this.handleBackButtonClick
        );
    }

    componentWillUnmount() {
        BackHandler.removeEventListener(
            "hardwareBackPress",
            this.handleBackButtonClick
        );
    }

    handleBackButtonClick() {
        this.props.navigation.navigate("Main_eight");
        return true;
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
                        <Button onPress={this.devided} style={{ marginTop: 50, marginLeft: 150 }}><Text style={{ fontSize: 30 }}>AYIR</Text></Button>
                    </View>
                </Content>
                <Footer>
                    <Button info rounded onPress={(number) =>
                        (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.one) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-1" />
                    </Button>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.two) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-2" />
                    </Button>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.three) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-3" />
                    </Button>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.four) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-4" />
                    </Button>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.five) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-5" />
                    </Button>
                </Footer>
                <Footer>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.six) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-6" />
                    </Button>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.seven) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-7" />
                    </Button>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.eight) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-8" />
                    </Button>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.nine) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="filter-9" />
                    </Button>
                    <Button info rounded onPress={(number) => (this.state.number.length < 4) ? this.setState({ number: (this.state.number + this.state.zero) }) : this.warn()} >
                        <Icon type="MaterialIcons" name="exposure-zero" />
                    </Button>
                    <Button info rounded onPress={this.clean} >

                        <Icon type="MaterialIcons" name="keyboard-arrow-left" />
                    </Button>
                </Footer>

            </Container >
        );
    }
    back = () => {
        this.props.navigation.navigate("Main_eight");
    };
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


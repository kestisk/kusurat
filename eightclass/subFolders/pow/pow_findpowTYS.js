import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, Title, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, Footer, Content } from 'native-base';
import { FlatList, StyleSheet, BackHandler } from 'react-native';
import { At, Multips_primeFactorPage } from '../multips/multips_primeFactorPage';

export default class DeckSwiperAdvancedExample extends At {
    constructor(props) {
        super(props);
        this.state = {
            storePow: [{ storenumber: "", x: "", key: "" }],
            indexState: 0,
            showquestion: [{
                qNumber: "", question: "", key: "0"
            }],
            userAnswers: [
                { userAnswer: "0" }, { userAnswer: "0" }, { userAnswer: "0" }, { userAnswer: "0" }, { userAnswer: "0" },
                { userAnswer: "0" }, { userAnswer: "0" }, { userAnswer: "0" }, { userAnswer: "0" }, { userAnswer: "0" }, { userAnswer: "0" }],
            trueAnswers: [
                { userAnswer: "0" }, { userAnswer: "0" }, { userAnswer: "0" }, { userAnswer: "0" }, { userAnswer: "0" },
                { userAnswer: "0" }, { userAnswer: "0" }, { userAnswer: "0" }, { userAnswer: "0" }, { userAnswer: "0" }, { userAnswer: "0" }],
            showarray: [
                { num: "", key: "0" }, { num: "", key: "0" }, { num: "", key: "0" }, { num: "", key: "0" }, { num: "", key: "0" },
                { num: "", key: "0" }, { num: "", key: "0" }, { num: "", key: "0" }, { num: "", key: "0" }, { num: "", key: "0" }],

            number: [{ randnum: "" }],
            message: "",
            answer: [{ storenumber: "", x: "", keyA: "", keyB: "", keyC: "", keyD: "" }],
            answer2: [{ storenumber: "", x: "", keyA: "", keyB: "", keyC: "", keyD: "", key: "20" }],
            storePow2: [],
            Achoise: [{ storenumber: "", x: "", key: "" }],
            Bchoise: [{ storenumber: "", x: "", key: "" }],
            Cchoise: [{ storenumber: "", x: "", key: "" }],
            Dchoise: [{ storenumber: "", x: "", key: "" }],
            PowLastA: [],
            PowLastB: [],
            PowLastC: [],
            PowLastD: [],
            PowLastarray: [],
            bgc1: "rgb(60,207,207)",
            bgc2: "rgb(60,207,207)",
            bgc3: "rgb(60,207,207)",
            bgc4: "rgb(60,207,207)",
            truecount: 0, wholefalsecount: 0, falsecount: 0,
            cardvisible: "none",
            firstView: "flex",
            firstOpen: true,
            endtest: "none",
            numarray: "none",
            firstentest: true
        }
    }

    async  componentDidMount() {
        var j = 1;
        while (j <= 10) {
            var num = (Math.floor(Math.random() * 100) + 20);

            var retval = await this.justdivede(num);

            this.state.answer.push(retval);
            this.state.number.push({ randnum: num });
            this.setState(this.state.answer);
            this.setState(this.state.number);
            j++;
        }
        const arr = [...this.state.showquestion];
        arr[0].question = this.state.number[1].randnum;
        arr[0].qNumber = "Soru " + 1 + ":";
        this.setState({ showquestion: arr });

    }
    async  next() {
        this.setState({ bgc1: "rgb(60,207,207)", bgc2: "rgb(60,207,207)", bgc3: "rgb(60,207,207)", bgc4: "rgb(60,207,207)" });
        var k = parseInt(this.state.indexState) + 1;

        if (k <= 10)
            this.setState({ indexState: k });
        else {
            k = 10;
            this.setState({ indexState: k });
            if (this.state.firstentest) {
                this.setState({ endtest: "flex" });
            }
        }

        //  await this.setState({ answer2: [{ storenumber: "", x: "", keyA: "", keyB: "", keyC: "", keyD: "" }] })
        this.state.answer2 = this.state.answer[k];
        this.setState(this.state.answer2);


        const array = [...this.state.userAnswers];
        var val = array[k].userAnswer;

        switch (val) {
            case 1: {
                this.setState({ bgc1: "rgb(255,205,31)" });
                this.setState({ bgc2: "rgb(158,220,235)" });
                this.setState({ bgc3: "rgb(158,220,235)" });
                this.setState({ bgc4: "rgb(158,220,235)" });
                break;
            }
            case 2: {
                this.setState({ bgc1: "rgb(158,220,235)" });
                this.setState({ bgc2: "rgb(255,205,31)" });
                this.setState({ bgc3: "rgb(158,220,235)" });
                this.setState({ bgc4: "rgb(158,220,235)" });
                break;
            }
            case 3: {
                this.setState({ bgc1: "rgb(158,220,235)" });
                this.setState({ bgc2: "rgb(158,220,235)" });
                this.setState({ bgc3: "rgb(255,205,31)" });
                this.setState({ bgc4: "rgb(158,220,235)" });
                break;
            }
            case 4: {
                this.setState({ bgc1: "rgb(158,220,235)" });
                this.setState({ bgc2: "rgb(158,220,235)" });
                this.setState({ bgc3: "rgb(158,220,235)" });
                this.setState({ bgc4: "rgb(255,205,31)" });
                break;
            }
            default: {
                this.setState({ bgc1: "rgb(158,220,235)" });
                this.setState({ bgc2: "rgb(158,220,235)" });
                this.setState({ bgc3: "rgb(158,220,235)" });
                this.setState({ bgc4: "rgb(158,220,235)" });
            }
        }
        const array2 = [...this.state.number];
        var randnum = array2[k].randnum;
        const array3 = [...this.state.showquestion];
        array3[0].qNumber = "Soru " + k+":";
        array3[0].question = randnum;
        this.setState({ showquestion: array3 });

    }

    async prev() {
        if (this.state.endtest)
            this.setState({ endtest: "none" });
        this.setState({ bgc1: "rgb(60,207,207)", bgc2: "rgb(60,207,207)", bgc3: "rgb(60,207,207)", bgc4: "rgb(60,207,207)", message: "prev" });
        var k = parseInt(this.state.indexState) - 1;
        if (k >= 1)
            this.setState({ indexState: k });
        if (k <= 0) {
            k = 1;
            this.setState({ indexState: k });
        }


        this.setState({
            PowLastA: [],
            PowLastB: [],
            PowLastC: [],
            PowLastD: [],
            showquestion: [{
                qNumber: "",
                question: "",

            }]
        });

        // await this.setState({ answer2: [{ storenumber: "", x: "", keyA: "", keyB: "", keyC: "", keyD: "" }] })

        this.state.answer2 = this.state.answer[k]
        this.setState(this.state.answer2)


        const array = [...this.state.userAnswers];
        var val = array[k].userAnswer;
        switch (val) {
            case 1: {
                this.setState({ bgc1: "rgb(255,205,31)" });
                this.setState({ bgc2: "rgb(60,207,207)" });
                this.setState({ bgc3: "rgb(60,207,207)" });
                this.setState({ bgc4: "rgb(60,207,207)" });
                break;
            }
            case 2: {
                this.setState({ bgc1: "rgb(60,207,207)" });
                this.setState({ bgc2: "rgb(255,205,31)" });
                this.setState({ bgc3: "rgb(60,207,207)" });
                this.setState({ bgc4: "rgb(60,207,207)" });
                break;
            }
            case 3: {
                this.setState({ bgc1: "rgb(60,207,207)" });
                this.setState({ bgc2: "rgb(60,207,207)" });
                this.setState({ bgc3: "rgb(255,205,31)" });
                this.setState({ bgc4: "rgb(60,207,207)" });
                break;
            }
            case 4: {
                this.setState({ bgc1: "rgb(60,207,207)" });
                this.setState({ bgc2: "rgb(60,207,207)" });
                this.setState({ bgc3: "rgb(60,207,207)" });
                this.setState({ bgc4: "rgb(255,205,31)" });
                break;
            }
            default: {
                this.setState({ bgc1: "rgb(60,207,207)" });
                this.setState({ bgc2: "rgb(60,207,207)" });
                this.setState({ bgc3: "rgb(60,207,207)" });
                this.setState({ bgc4: "rgb(60,207,207)" });
            }
        }
        const array2 = [...this.state.number];
        var randnum = array2[k].randnum;
        const array3 = [...this.state.showquestion];
        array3[0].qNumber = "Soru " + k+":";
        array3[0].question = randnum;
        this.setState({ showquestion: array3 });

    }

    clk = (val) => {

        if (val == 20 && this.state.firstOpen) {
            this.setState({ firstView: "none", cardvisible: "flex", firstOpen: false });

            //var k = 1;
            //  this.state.answer2 = this.state.answer[k];
            // this.setState(this.state.answer2);
            // this.setState({ showquestion: [{ qNumber: "Soru " + k + ":", question: this.state.number[k].randnum }] });
        }
        else {
            k = parseInt(this.state.indexState);
            const array = [...this.state.userAnswers];
            array[k].userAnswer = val;
            //this.setState({ message: array[k].userAnswer });
            switch (val) {
                case 1: {
                    this.setState({ bgc1: "rgb(255,205,31)", bgc2: "rgb(60,207,207)", bgc3: "rgb(60,207,207)", bgc4: "rgb(60,207,207)" });
                    break;
                }
                case 2: {
                    this.setState({ bgc1: "rgb(60,207,207)", bgc2: "rgb(255,205,31)", bgc3: "rgb(60,207,207)", bgc4: "rgb(60,207,207)" });
                    break;
                }
                case 3: {
                    this.setState({ bgc1: "rgb(60,207,207)", bgc2: "rgb(60,207,207)", bgc3: "rgb(255,205,31)", bgc4: "rgb(60,207,207)" });
                    break;
                }
                case 4: {
                    this.setState({ bgc1: "rgb(60,207,207)", bgc2: "rgb(60,207,207)", bgc3: "rgb(60,207,207)", bgc4: "rgb(255,205,31)" });
                    break;
                }
                default: {
                    break;
                }
            }

        }
        this.next();

    }
    showanswer = () => {
        this.setState({ endtest: "none", firstentest: false, numarray: "flex" });
        const uAnswer = [...this.state.userAnswers];
        const tAnswer = [...this.state.trueAnswers];
        const sArray = [...this.state.showarray];
        for (i = 0; i < 10; i++) {
            if (uAnswer[i].userAnswer == tAnswer[i].userAnswer) {
                sArray[i].num = i + 1;
                sArray[i].key = "1";
            }
            else {
                sArray[i].num = i + 1;
                sArray[i].key = "0";
            }
        }
        this.setState({ showarray: sArray });
    }
    async goQuestion(k) {
        // await this.setState({ answer2: [{ storenumber: "", x: "", keyA: "", keyB: "", keyC: "", keyD: "" }] })
        this.state.answer2 = this.state.answer[k];
        this.setState(this.state.answer2);

        const array = [...this.state.userAnswers];
        var val = array[k].userAnswer;

        switch (val) {
            case 1: {
                this.setState({ bgc1: "rgb(255,205,31)" });
                this.setState({ bgc2: "rgb(38,134,153)" });
                this.setState({ bgc3: "rgb(38,134,153)" });
                this.setState({ bgc4: "rgb(38,134,153)" });
                break;
            }
            case 2: {
                this.setState({ bgc1: "rgb(38,134,153)" });
                this.setState({ bgc2: "rgb(255,205,31)" });
                this.setState({ bgc3: "rgb(38,134,153)" });
                this.setState({ bgc4: "rgb(38,134,153)" });
                break;
            }
            case 3: {
                this.setState({ bgc1: "rgb(38,134,153)" });
                this.setState({ bgc2: "rgb(38,134,153)" });
                this.setState({ bgc3: "rgb(255,205,31)" });
                this.setState({ bgc4: "rgb(38,134,153)" });
                break;
            }
            case 4: {
                this.setState({ bgc1: "rgb(38,134,153)" });
                this.setState({ bgc2: "rgb(38,134,153)" });
                this.setState({ bgc3: "rgb(38,134,153)" });
                this.setState({ bgc4: "rgb(255,205,31)" });
                break;
            }
            default: {
                this.setState({ bgc1: "rgb(38,134,153)" });
                this.setState({ bgc2: "rgb(38,134,153)" });
                this.setState({ bgc3: "rgb(38,134,153)" });
                this.setState({ bgc4: "rgb(38,134,153)" });
            }
        }
        const array2 = [...this.state.number];
        var randnum = array2[k].randnum;
        const array3 = [...this.state.showquestion];
        array3[0].qNumber = "Soru " + k+":";
        array3[0].question = randnum;
        this.setState({ showquestion: array3 });
    }
    render() {
        return (
            <Container>

                <Header style={{ backgroundColor: "rgb(38,134,153)", height: 50 }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={this.back}>
                            <Icon style={{ color: "white", fontSize: 40 }} type="FontAwesome" name="angle-left" />
                        </Button>
                    </Left>
                    <Body style={{ flex: 4 }}>
                        <Title style={styles.heade}>KENDİNİ DENE</Title>
                    </Body>

                </Header>

                <View style={{ flexDirection: "column" }} >

                    <View style={{ display: this.state.firstView }}>
                        <View style={{ marginTop: 30, alignItems: "center", flexDirection: "column" }}>
                            <Text style={{ color: "rgb(36,41,46)", fontSize: 28, marginLeft: 10, fontWeight: "bold" }}>
                                Verilen Sayının Çarpanlarına<Text style={{ color: "rgb(36,41,46)", textDecorationLine: "underline", fontSize: 25, fontWeight: "bold" }}> Doğru</Text>  Ayrılmış Halini İşaretleyiniz
                            </Text>
                            <Text style={{ color: "rgb(36,41,46)", fontSize: 18, marginLeft: 10, marginTop: 20, fontWeight: "bold" }}>
                                Testi Başladıktan Sonra Önceki Veya Sonraki Soruya Geçmek İçin Lütfen Soruyu Sağa Yada Sola Kaydırın..
                            </Text>
                            <View style={{ justifyContent: "center", flexDirection: "row" }}>
                                <Button style={{
                                    backgroundColor: "rgb(60,207,207)", borderRadius: 30, justifyContent: "center", marginTop: 100,
                                    alignItems: "center", minHeight: 55, minWidth: 250
                                }}
                                    onPress={() => { this.clk(20) }}>
                                    <Text style={{ fontSize: 30 }}>
                                        TESTİ BAŞLAT
                                </Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                    <View >
                        <DeckSwiper
                            onSwipeRight={() => this.prev()}
                            onSwipeLeft={() => this.next()}
                            dataSource={this.state.showquestion}
                            renderEmpty={() =>
                                <View style={{ alignSelf: "center" }}>

                                </View>}
                            renderItem={item =>
                                <Card style={{ elevation: 3, display: this.state.cardvisible }}>
                                    <CardItem >
                                        <Body>
                                            <Text style={{ fontSize: 45, color: "rgb(36,41,46)", fontWeight: "bold" }}>{item.qNumber}</Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem style={{ justifyContent: "center" }}>

                                        <Text style={{ fontSize: 45, color: "rgb(36,41,46)", fontWeight: "bold", textDecorationLine: "underline" }}>{item.question}</Text>
                                    </CardItem>
                                    <CardItem style={{ flexDirection: "column" }}>
                                        <View style={{ flexDirection: "column" }}>
                                            <Button onPress={() => { this.clk(1) }}
                                                style={{
                                                    alignSelf: "center",
                                                    minWidth: 300, borderRadius: 30,
                                                    backgroundColor: this.state.bgc1,
                                                    marginRight: 10
                                                }}>
                                                <Text
                                                    style={{
                                                        fontSize: 30, color: "rgb(63,81,181)",
                                                        fontWeight: "bold"
                                                    }}>A)</Text>
                                                <FlatList horizontal={true}
                                                    data={this.state.answer2}
                                                    renderItem={({ item }) => {
                                                        return (
                                                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                                                <Text style={{ fontSize: 30, color: "rgb(63,81,181)" }}>{item.storenumber}</Text>
                                                                <Text style={{ fontSize: 20, marginBottom: 20, color: "rgb(63,81,181)" }}>{item.keyA}</Text>
                                                            </View>
                                                        );
                                                    }}
                                                    // keyExtractor={item => item.keyA}
                                                    atA={this.state.PowLastA}
                                                />
                                            </Button>
                                            <Button onPress={() => { this.clk(2) }} style={{ alignSelf: "center", minWidth: 300, borderRadius: 30, backgroundColor: this.state.bgc2, marginTop: 20 }}>
                                                <Text style={{ fontSize: 30, color: "rgb(63,81,181)", fontWeight: "bold" }}>B)</Text>
                                                <FlatList horizontal={true}
                                                    data={this.state.answer2}
                                                    renderItem={({ item }) => {
                                                        return (
                                                            <View style={{ flexDirection: "row" }}>
                                                                <Text style={{ fontSize: 30, color: "rgb(63,81,181)" }}>{item.storenumber}</Text>
                                                                <Text style={{ fontSize: 20, marginBottom: 20, color: "rgb(63,81,181)" }}>{item.keyB}</Text>

                                                            </View>
                                                        );
                                                    }}
                                                    // keyExtractor={item => item.keyB}
                                                    atB={this.state.PowLastB}
                                                />
                                            </Button>
                                        </View>
                                        <View style={{ flexDirection: "column", marginTop: 20 }}>
                                            <Button onPress={() => { this.clk(3) }} style={{ alignSelf: "center", minWidth: 300, borderRadius: 30, backgroundColor: this.state.bgc3, marginRight: 10 }}>
                                                <Text style={{ fontSize: 30, color: "rgb(63,81,181)", fontWeight: "bold" }}>C)</Text>
                                                <FlatList horizontal={true}
                                                    data={this.state.answer2}
                                                    renderItem={({ item }) => {
                                                        return (
                                                            <View style={{ flexDirection: "row" }}>
                                                                <Text style={{ fontSize: 30, color: "rgb(63,81,181)" }}>{item.storenumber}</Text>
                                                                <Text style={{ fontSize: 20, marginBottom: 20, color: "rgb(63,81,181)" }}>{item.keyC}</Text>

                                                            </View>
                                                        );
                                                    }}
                                                    // keyExtractor={item => item.keyC}
                                                    atC={this.state.PowLastC}
                                                />
                                            </Button>
                                            <Button onPress={() => { this.clk(4) }} style={{ alignSelf: "center", minWidth: 300, borderRadius: 30, backgroundColor: this.state.bgc4, marginTop: 20 }}>
                                                <Text style={{ fontSize: 30, color: "rgb(63,81,181)", fontWeight: "bold" }}>D)</Text>
                                                <FlatList horizontal={true}
                                                    data={this.state.answer2}

                                                    renderItem={({ item }) => {
                                                        return (
                                                            <View style={{ flexDirection: "row", }}>
                                                                <Text style={{ fontSize: 30, color: "rgb(63,81,181)" }}>{item.storenumber}</Text>
                                                                <Text style={{ fontSize: 20, marginBottom: 20, color: "rgb(63,81,181)" }}>{item.keyD}</Text>

                                                            </View>
                                                        );
                                                    }}
                                                    //  keyExtractor={item => item.keyD}
                                                    atD={this.state.PowLastD}
                                                />
                                            </Button>
                                        </View>
                                    </CardItem>
                                    <Footer style={{ backgroundColor: null, alignSelf: "flex-end", }}>
                                        <Button
                                            onPress={() => this.showanswer()}
                                            style={{
                                                display: this.state.endtest,
                                                alignSelf: "flex-end",
                                                minWidth: 150, borderRadius: 30,
                                                backgroundColor: "rgb(255,114,91)",
                                                marginRight: 10
                                            }}>
                                            <Text
                                                style={{
                                                    fontSize: 30, color: "white",
                                                    fontWeight: "bold"
                                                }}>Testi Bitir</Text>

                                        </Button>
                                        <View style={{ display: this.state.numarray, alignSelf: "flex-start" }}>
                                            <FlatList horizontal={true}
                                                data={this.state.showarray}
                                                renderItem={({ item }) => {
                                                    return (
                                                        <View >
                                                            <Text onPress={() => this.goQuestion(item.num)} style={{ fontSize: 20, color: (item.key == 1) ? "green" : "red" }}>{item.num}  </Text>
                                                        </View>
                                                    );
                                                }}
                                                //keyExtractor={item => item.keyA}
                                                atA={this.state.PowLastarray}
                                            />
                                        </View>

                                    </Footer>

                                </Card>


                            }

                        />

                    </View>

                </View>

            </Container >
        );
    }
    componentWillMount() {
        BackHandler.addEventListener(
            "hardwareBackPress",
            this.handleBackButtonClick
        );
    }
    handleBackButtonClick = () => {
        this.props.navigation.navigate("powers");
        return true;
    }
    back = () => {
        this.props.navigation.navigate("Pow_findpowPages");
    };
}

const styles = StyleSheet.create({
    heade: {
        textAlign: "center",
        color: "white",
        fontSize: 25,
        padding: 5
    },
    buttontext: {
        textAlign: "center",
        color: 'white',
        padding: 5,
        fontSize: 20,
    }
});


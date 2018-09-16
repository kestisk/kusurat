import React, { Component } from 'react';
import {
    Container,
    Content,
    Button,
    Header,
    Left,
    Body,
    Title,
    Item,
    Input,
    Label,
    Footer,
    Badge,
    FooterTab,
    Row,
    Icon,
    Tab,
    Tabs
} from "native-base";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    Image,
    ScrollView
} from "react-native";
import { BackHandler } from "react-native";
import Pow_basic from "../../subFolders/pow/pow_basic";
import Pow_basicTYS from "../../subFolders/pow/pow_basicTYS";

//import Icon from "react-native-vector-icons/dist/MaterialIcons";

export default class Pow_BasictabPage extends Component {
    constructor(props) {

        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    componentDidMount() {
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
        this.props.navigation.navigate("powers");
        return true;
    }
    warn() {
        this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
    }
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "#62B1F6" }}>
                    <Left>
                        <Button transparent onPress={this.back}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.heade}>KÜSUR-AT</Title>
                    </Body>
                </Header>
                <Tabs>
                    <Tab heading="Asistan">
                        <Pow_basic />
                    </Tab>
                    <Tab heading="Kendini Dene">
                        <Pow_basicTYS />
                    </Tab>

                </Tabs>




            </Container >
        )
    }
    back = () => {
        this.props.navigation.navigate("powers");
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





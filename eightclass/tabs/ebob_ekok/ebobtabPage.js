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
import EbobPage from "../../subFolders/ebob_ekok/ebobPage";
import EbobPageTYS from "../../subFolders/ebob_ekok/ebobPageTYS";

//import Icon from "react-native-vector-icons/dist/MaterialIcons";

export default class EbobTabPage extends Component {
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
        this.props.navigation.navigate("ebob_ekokPages");
        return true;
    }
    warn() {
        this.setState({ message: "En Fazla 4 Rakam Girilebilir" });
    }
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "rgb(56,65,104)" }}>
                    <Left>
                        <Button transparent onPress={this.back}>
                            <Icon style={{ color: "rgb(142,163,226)", fontSize: 30 }} name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.heade}>KÜSUR-AT</Title>
                    </Body>
                </Header>
                <Tabs>
                    <Tab style={{ backgroundColor: "rgb(56,65,104)" }} heading="Asistan">
                        <EbobPage />
                    </Tab>
                    <Tab heading="Kendini Dene">
                        <EbobPageTYS />
                    </Tab>

                </Tabs>




            </Container >
        )
    }
    back = () => {
        this.props.navigation.navigate("ebob_ekokPages");
    };
}
const styles = StyleSheet.create({
    heade: {
        textAlign: "center",
        color: "rgb(142,163,226)",
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





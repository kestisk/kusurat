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

import Four_natural_addPage from "../../subFolders/natural/four_natural_addPage";
import Four_natural_addPageTYS from "../../subFolders/natural/four_natural_addPageTYS";
//import Icon from "react-native-vector-icons/dist/MaterialIcons";

export default class Natural_add_TabPage extends Component {
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
        this.props.navigation.navigate("naturalNumPages");
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
                        <Four_natural_addPage />
                    </Tab>
                    <Tab heading="Kendini Dene">
                        <Four_natural_addPageTYS />
                    </Tab>

                </Tabs>




            </Container >
        )
    }
    back = () => {
        this.props.navigation.navigate("naturalNumPages");
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





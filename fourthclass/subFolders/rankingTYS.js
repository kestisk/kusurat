import React from "react";
import { FlatList } from "react-native";
import { Text, ListItem, Left, Body, Icon, Right, Title, Button, View } from "native-base";
export default class NBTestApp extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                { name: "Movies", header: true },
                { name: "Interstellar", header: false },

                { name: "Music", header: true },
                { name: "Adams", header: false },

                { name: "Places", header: true },
                { name: "Jordan", header: false },

                { name: "People", header: true },
                { name: "Jazzy", header: false },

                { name: "Things", header: true },
                { name: "table", header: false },

            ],
            sezerindc: []
        };
        //  this.sk=this.sk.bind
    }
    sk = () => {
        this.state.data[3].name = "sezer";
        this.setState(this.state.data);
        var arr = [];
        this.state.data.map(obj => {

            arr.push(this.state.data.indexOf(obj));

        });

        this.setState({
            sezerindc: arr
        });
    }


    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => {
                        if (item.header) {
                            return (
                                <ListItem itemDivider>
                                    <Left />
                                    <Body style={{ marginRight: 40 }}>
                                        <Text style={{ fontWeight: "bold" }}>
                                            {item.name}
                                        </Text>
                                    </Body>
                                    <Right />
                                </ListItem>
                            );
                        } else if (!item.header) {
                            return (
                                <ListItem style={{ marginLeft: 0 }}>
                                    <Body>
                                        <Text>{item.name}</Text>
                                    </Body>
                                </ListItem>
                            );
                        }
                    }}
                    keyExtractor={item => item.name}
                    at={this.state.sezerindc}
                />
                <Button onPress={this.sk}><Text>sezer</Text></Button>
            </View>
        );
    }
}
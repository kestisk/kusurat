
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Container, Content } from 'native-base';

export default class Classes extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <Text>buraya sınıf gelecek</Text>
                    <Button rounded onPress={this.at}><Text>GERİ</Text></Button>
                </Content>
            </Container>
        );
    }
    at = () => {
        this.props.navigation.navigate('Main');
    }
}

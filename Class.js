
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Container, Content } from 'native-base';

export default class Classes extends Component {

    render() {
        return (
            <Container>
                <Content>
<<<<<<< HEAD
                    <Text>buraya sınıf</Text>
=======
                    <Text>buraygit gelecek</Text>
>>>>>>> refs/remotes/origin/kusurat
                    <Button rounded onPress={this.at}><Text>GERİ</Text></Button>
                </Content>
            </Container>
        );
    }
    at = () => {
        this.props.navigation.navigate('Main');
    }
}

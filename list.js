import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { Component } from 'react';

export default class Apppp extends Component<{}> {



    render() {

        const SampleNameArray = ["Pankaj", "Rita", "Mohan", "Amit", "Babulal", "Sakshi"];

        const fon = [SampleNameArray[1]].map((ite, k) => {
            return <Text key={k}> {ite} </Text>

        })


        return (
            <View>

                {fon}

            </View>
        );
    }
}


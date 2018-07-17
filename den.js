import React from 'react';
import { Animated, Text, View, Easing } from 'react-native';

class FadeInView extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }

    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
                toValue: 1,                   // Animate to opacity: 1 (opaque)
                duration: 5000,              // Make it take a while
            }
        ).start();                        // Starts the animation
    }

    render() {
        let { fadeAnim } = this.state;

        return (
            <Animated.View                 // Special animatable View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}
class FadeInView2 extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }

    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
                toValue: 1,                   // Animate to opacity: 1 (opaque)
                duration: 10000,              // Make it take a while
            }
        ).start()
        // Starts the animation
    }

    render() {
        let { fadeAnim } = this.state;

        return (
            <Animated.View                 // Special animatable View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}
class FadeInView3 extends React.Component {
    constructor() {
        super()
        this.spinValue = new Animated.Value(0)
    }

    componentDidMount() {
        this.spin()
    }
    spin() {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }
    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
            <View >
                <Animated.Image
                    style={{
                        width: 227,
                        height: 200,
                        transform: [{ rotate: spin }]
                    }}
                    source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
                />
            </View>
        );
    }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class Appa extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <FadeInView style={{ width: 250, height: 50 }}>
                    <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Yapacağınız</Text>
                </FadeInView>
                <FadeInView2 style={{ width: 250, height: 50 }}>
                    <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>işlemi</Text>
                </FadeInView2>
                <FadeInView3 style={{ width: 250, height: 50 }}>
                    <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>seçiniz</Text>
                </FadeInView3>
            </View>
        )
    }
}
import React from 'react';
import {
    View,
    StyleSheet,
    PixelRatio,
    TextInput,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    container: {}
});

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput/>
            </View>
        );
    }
}
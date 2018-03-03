import React from 'react';
import {
    View,
    StyleSheet,
    PixelRatio,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        borderBottomWidth: 3 / PixelRatio.get(),
        borderBottomColor: '#EF2D36',
        justifyContent:'center',
        alignItems:'center'
    },
    font: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    fontH: {
        color: '#CD1D1C'
    },
    fontT: {
        color: '#FFF',
        backgroundColor: '#EF2D36'
    }
});

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.font}>
                    <Text style={styles.fontH}>网易</Text>
                    <Text style={styles.fontT}>新闻</Text>
                    <Text>有态度</Text>
                </Text>
            </View>
        );
    }
}
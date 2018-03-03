import React from 'react';
import {
    View,
    StyleSheet,
    PixelRatio,
    Text
} from 'react-native';
import ImportantNews from '../components/ImportantNews'

export default class Content extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImportantNews news={[
                    '5;adasdadadsa哈是简单看看数据库的那就看看到三点就',
                    '5;adasdadadsa哈是简单看看数据库的那就看看到三点就',
                    '5;adasdadadsa哈是简单看看数据库的那就看看到三点就',
                    '5;adasdadadsa哈是简单看看数据库的那就看看到三点就',
                    '5;adasdadadsa哈是简单看看数据库的那就看看到三点就',
                ]}></ImportantNews>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});
import React from 'react';
import {
    View,
    StyleSheet,
    PixelRatio,
    Text,
    Image
} from 'react-native';
import ImportantNews from '../components/ImportantNews'
const normalIcon = require('../../resources/home_tab_bar_icon_user_normal.png')
const pressIcon = require('../../resources/home_tab_bar_icon_user_press.png')

export default class MainMine extends React.Component {
    static navigationOptions = {
        tabBarLabel: '我',
        tabStyle:{ borderRightWidth:3/PixelRatio.get(), borderRightColor:'#000' },
        tabBarIcon: ({tintColor,focused}) => (
            <Image
                source={!focused ? normalIcon : pressIcon}
            />
        ),
    };
    render() {
        return (
            <View style={styles.container}>
                <ImportantNews news={[
                    '4;adasdadadsa哈是简单看看数据库的那就看看到三点就',
                    '4;adasdadadsa哈是简单看看数据库的那就看看到三点就',
                    '4;adasdadadsa哈是简单看看数据库的那就看看到三点就',
                    '4;adasdadadsa哈是简单看看数据库的那就看看到三点就',
                    '4;adasdadadsa哈是简单看看数据库的那就看看到三点就'
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
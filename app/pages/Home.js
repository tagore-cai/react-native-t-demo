import React, {Component} from 'react';
import FootsItem from './src/components/FoodsItem'
import Header from './src/components/Header'
import ListItem from './src/components/ListItem'
import ImportantNews from './src/components/ImportantNews'

import {
    StyleSheet,
    View,
    Button,
} from 'react-native';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            home: 0
        }
    }

    componentDidMount() {
        let timer = setInterval(() => {
            this.setState({home: 1})
            clearInterval(timer)
        }, 10000)
    }

    render() {
        let tag = this.state.home
        if (tag == 0) {
            return (
                <View style={styles.container}>
                    <FootsItem/>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Header/>
                    <ListItem title='hasda你好啊啊'/>
                    <ListItem title='hasda你好啊啊'/>
                    <ListItem title='hasda你好啊啊'/>
                    <ListItem title='hasda你好啊啊'/>
                    <Button
                        onPress={()=>{alert("")}}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <ImportantNews news={[
                        '1;adasdadadsa哈是简单看看数据库的那就看看到三点就',
                        '1;adasdadadsa哈是简单看看数据库的那就看看到三点就',
                        '1;adasdadadsa哈是简单看看数据库的那就看看到三点就',
                        '1;adasdadadsa哈是简单看看数据库的那就看看到三点就',
                        '1;adasdadadsa哈是简单看看数据库的那就看看到三点就'
                    ]}></ImportantNews>   
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});

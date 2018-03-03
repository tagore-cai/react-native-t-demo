import React from 'react';
import HttpUtil from '../common/HttpUtil';
import cheerio from 'cheerio-without-node-native'
import {
    View,
    StyleSheet,
    PixelRatio,
    Text,
    Image
} from 'react-native';
import ImportantNews from '../components/ImportantNews'

const normalIcon = require('../../resources/home_tab_bar_icon_bookdesk_normal.png')
const pressIcon = require('../../resources/home_tab_bar_icon_bookdesk_press.png')

export default class MainDesk extends React.Component {
    constructor() {
        super()
        this.state={'items':[]}

    }

    static navigationOptions = {
        tabBarLabel: '书桌',
        tabBarIcon: ({tintColor, focused}) => (
            <Image
                source={!focused ? normalIcon : pressIcon}
            />
        ),
    };

    componentWillMount(){
        
        // if(this._login){
        //
        // }else{
        //     this.props.navigation.navigate('Login');
        // }
    }

    componentDidMount() {
        HttpUtil.get('http://192.168.1.104:7300/mock/59ad613e76562120c8eb5e10/myapp/news').then(res=>{
            this.setState({
                'news': res.normal.news
            })
        })
    }

    render() {
        return (
            <View onClick={this.getItems} style={styles.container}>
                <ImportantNews onClick={this.getItems} news={this.state.news}></ImportantNews>
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
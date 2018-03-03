import React from 'react';
import cheerio from 'cheerio-without-node-native'
import {
    StyleSheet,
    PixelRatio,
    View,
    Image,
    PanResponder,
    WebView
} from 'react-native';
import ImportantNews from '../components/ItemsList'
const normalIcon = require('../../resources/home_tab_bar_icon_leadread_normal.png')
const pressIcon =require('../../resources/home_tab_bar_icon_leadread_press.png')

export default class RLists extends React.Component {
    constructor() {
        super()
        this.state={items:[],lists:[]}
        this.getItems = this.getLists.bind(this)
    }

    static navigationOptions = {
        tabBarLabel: '领读',
        headerTitle:'领读', // 只会设置导航栏文字,
        tabStyle:{ borderRightWidth:3/PixelRatio.get(), borderRightColor:'#000' },
        tabBarIcon: ({tintColor,focused}) => (
            <Image
                source={!focused ? normalIcon : pressIcon}
            />
        ),
    };
    
    getLists(){
        let itemLists = []
        fetch(this.props.navigation.state.params.url,{
            method:'GET'
        }).then(response =>
            response.text()
        ).then(text=>{
            let $ = cheerio.load(text)
            let items = $('#alpha-inner .module-list')
            console.log(items[0].children[0].next.children[0].next.attribs.href)
            for(let i=0;i< items.length;i++){
                for(let j=0;j<items[i].children.length;j++){
                    if (items[i].children[j].type == "tag" && items[i].children[j].name=="li" ){
                        let data = items[i].children[j].children
                        itemLists.push({url:data[1].attribs.href,title:data[1].children[0].data,date:data[2].children[0].children[0].data})
                    }
                }
                
            }
            this.setState({
                lists: itemLists
            })
        })
    }
    componentDidMount() {
       this.getItems()
    }
    render() {
        if(this.state.web) {
            return (
                 <View style={styles.container} >   
                 <WebView
                source={{uri:'http://www.jianshu.com/u/d5b531888b2b'}}
                style={{width:'100%',height:'100%'}}/>
                </view？
            )
        }
        return (
            <View style={styles.container} >   
                <ImportantNews click={} news={this.state.lists}></ImportantNews>
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
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

export default class MainReading extends React.Component {
    constructor() {
        super()
        this.state={items:[]}
        this.getItems = this.getItems.bind(this)
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

    getItems(){
        let itemLists = []
        fetch("http://www.ruanyifeng.com/blog/archives.html",{
            method:'GET'
        }).then(response =>
            response.text()
        ).then(text=>{
            let $ = cheerio.load(text)
            let items = $('#beta-inner .module-list-item')
            for(let i=0;i< items.length;i++){
                itemLists.push({url:items[i].children[0].attribs.href,title:items[i].children[0].attribs.title})
            }
            this.setState({
                items: itemLists
            })
        })
    }

    getLists(){
        let itemLists = []
        fetch("http://www.ruanyifeng.com/blog/opinions/",{
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
        return (
            <View style={styles.container} >   
                <ImportantNews jump="1" click={(data)=>{this.props.navigation.navigate('RLists',data)}} news={this.state.items}></ImportantNews>
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
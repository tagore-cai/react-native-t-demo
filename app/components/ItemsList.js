import React from 'react';
import {
    View,
    StyleSheet,
    PixelRatio,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    news_title: {
        fontSize:20,
        fontWeight:'bold',
        color:'#CD1D1C',
        marginLeft:10,
        marginTop:15,
    },
    news_item:{
        marginLeft:10,
        marginRight:10,
        fontSize:15,
        lineHeight:20
    }
});
export default class ItemsList extends React.Component {
    testFunction(){

    }
    render() {
        let news = []
        for (let i in this.props.news) {
            let text = (
                <Text
                    key={i}
                    onPress={()=>{
                        if(this.props.jump){
                            this.props.click({url:this.props.news[i].url,jump:'1'})
                        }else{
                            
                        }
                    
                    }}
                    style={styles.news_item}
                    numberOfLines={2}
                >{this.props.news[i].title}
                </Text>
            )
            news.push(text)
        }
        return (
            <View >
                <Text style={styles.news_title}>今日要闻</Text>
                {news}
            </View>
        );
    }
}
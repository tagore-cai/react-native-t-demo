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

export default class ImportantNews extends React.Component {
    testFunction(){

    }
    render() {
        var news = []
        for (let i in this.props.news) {
            let text = (
                <Text
                    key={i}
                    onPress={()=>(alert(this.props.news[i]))}
                    style={styles.news_item}
                    numberOfLines={2}
                >{this.props.news[i]}
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
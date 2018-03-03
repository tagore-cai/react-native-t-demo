import React from 'react';
import {
    View,
    StyleSheet,
    PixelRatio,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    list: {
        height:40,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1/PixelRatio.get(),
        borderBottomColor:'#DDD',
        justifyContent:'center'
    },
    list_font:{
        fontSize:16
    }
});

export default class ListItem extends React.Component {
    render() {
        return (
            <View style={styles.list}>
                <Text style={styles.list_font}>{this.props.title}</Text>
            </View>
        );
    }
}
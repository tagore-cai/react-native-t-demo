import React from 'react';
import {
    View,
    StyleSheet,
    PixelRatio,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop:25,
        marginLeft:5,
        marginRight:5,
        padding:2,
        borderWidth: 1,
        borderRadius: 5,
        flexDirection:'row',
        backgroundColor:'#FF0067'
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    item:{
        flex:1,
        height:80,
    },
    flex:{
      flex:1
    },
    font:{
        fontSize:16,
        color:'#FFF',
        fontWeight:'bold'
    },
    lineLeftRight:{
        borderLeftWidth:1/PixelRatio.get(),
        borderRightWidth:1/PixelRatio.get(),
        borderColor:'#FFF'
    },
    lineCenter:{
        borderBottomWidth:1/PixelRatio.get(),
        borderColor:'#FFF'
    },
});

export default class FoodsItem extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.item ,styles.center]}>
                    <Text style={styles.font}>你好</Text>
                </View>
                <View style={[styles.item ,styles.center,styles.lineLeftRight]}>
                    <View style={[styles.center,styles.flex,styles.lineCenter]}>
                        <Text style={styles.font}>你好</Text>
                    </View>
                    <View style={[styles.center,styles.flex]}>
                        <Text style={styles.font}>你好</Text>
                    </View>
                </View>
                <View style={[styles.item ,styles.center]}>
                    <View style={[styles.center,styles.flex,styles.lineCenter]}>
                        <Text style={styles.font}>你好</Text>
                    </View>
                    <View style={[styles.center,styles.flex]}>
                        <Text style={styles.font}>你好</Text>
                    </View>
                </View>
            </View>
        );
    }
}
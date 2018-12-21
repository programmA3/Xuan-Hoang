import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export default class ListProductItem extends React.Component {
    render() {
        return (
            <View style={item.container}>
                <View style={item.id}>
                    <Text style={item.id_text}>{this.props.r_id}</Text>
                </View>
                <TouchableOpacity onPress={() => {this.props.goReportDetail(this.props.r_id)}}>
                    <Image style={item.photo} source={{uri: this.props.u_image}}/>
                </TouchableOpacity>
                <View style={item.content}>
                    <Text style={item.content_title}>{this.props.u_username}</Text>
                    <View style={item.content_sub}>
                        <Text style={item.content_sub_item}>Created: {this.props.r_updated}</Text>
                    </View>
                </View>
                <View style={item.btn}>
                    <Text>${this.props.r_total}</Text>
                </View>
            </View>
        );
    }
}

const item = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 70,
        borderWidth: 1,
        borderColor: "#0066FF",
        backgroundColor: "gray",
        marginBottom: 2
    },
    id: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        borderRightWidth: 1,
        borderColor: '#FFF',
    },
    id_text: {
        fontWeight: 'bold',
        color: '#0066FF',
    },
    photo: {
        width: 68,
        height: 68,
    },
    content: {
        flex: 3,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center'
    },
    content_title: {
        flex: 1,
        textAlignVertical: 'center',
        fontWeight: 'bold',
        color: '#FFFF99',
    },
    content_sub: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    content_sub_item: {
        color: '#FFF',
    },
    btn: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderColor: '#FFF',
    },
});
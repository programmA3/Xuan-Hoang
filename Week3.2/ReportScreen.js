import React from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity, ListView, ToastAndroid} from 'react-native';
import IP from '../config/IPConfig';
import ReportItem from './layout-item/ReportItem';
import Icon from "react-native-vector-icons/Ionicons";

export default class ReportScreen extends React.Component {
    constructor(props) {
        super(props);
        const dR = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isLoading: true,
            showList: false,
            dataReport: dR,
            total: 0,
        };
    }

    render() {
        return (
            <View style={report.container}>
                <View style={report.title}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon style={report.title_icon} name="ios-arrow-back" color="#0066FF" size={30}/>
                    </TouchableOpacity>
                    <Text style={report.title_text}>List Report</Text>
                    <Text style={report.title_icon}></Text>
                </View>
                <View style={report.report_info}>
                    {this.state.showList == false ? null :
                        <ListView
                            dataSource={this.state.dataReport}
                            renderRow={(rowData) =>
                                <ReportItem r_id={rowData.r_id} u_username={rowData.u_username}
                                            u_image={rowData.u_image}
                                            r_updated={rowData.r_updated} r_total={rowData.r_total}
                                            goReportDetail={(id) => this.props.navigation.navigate('ReportDetail', {r_id: id})}/>

                            }
                        />
                    }
                </View>
                <View style={report.total}>
                    <Text style={report.total_title}>Total:</Text>
                    <Text style={report.total_value}>${this.state.total + ""}</Text>
                </View>
            </View>
        );
    }

    componentDidMount() {
        fetch(IP + '/report/get-report-by-user-id.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                u_id: this.props.navigation.state.params.u_id
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson === 'No Results Found') {
                    ToastAndroid.show(responseJson, ToastAndroid.SHORT)
                } else {
                    let sizeData = Object.keys(responseJson).length;
                    var total = 0;
                    for(var i = 0; i < sizeData; i++){
                        total = total + responseJson[i]['r_total']
                    }
                    this.setState({
                        showList: true,
                        dataReport: this.state.dataReport.cloneWithRows(responseJson),
                        total: total
                    }), function () {
                        console.log(responseJson)
                    }
                }
            }).catch((error) => {
            console.error(error);
        })
    }
}

const report = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#CCFFFF',
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title_icon: {
        padding: 10,
    },
    title_text: {
        flex: 1,
        fontSize: 30,
        textAlign: 'center',
        color: '#0066FF',
    },
    report_info: {
        flex: 8,
    },
    total: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    total_title: {
        fontWeight: 'bold',

    },
    total_value: {
        fontWeight: 'bold',
        color: '#0066FF',
    }
});
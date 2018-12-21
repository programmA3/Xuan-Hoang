import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import {RadioButton} from 'react-native-paper';
import DatePicker from 'react-native-datepicker'

export default class AddStaff extends Component {
    constructor(props) {
        super(props)
        this.state = {checked: '0', date: "2016-05-15"}
    }

    render() {
        const {checked} = this.state;
        return (
            <View style={personStyles.container}>
                <View style={personStyles.top}>
                    <Text style={personStyles.title}>Person Information</Text>
                </View>
                <View style={personStyles.body}>
                    <View style={personStyles.account}>
                        <Text style={personStyles.account_title}>Name: </Text>
                        <TextInput style={personStyles.account_text} placeholder="Enter account"
                                   placeholderTextColor="gray"/>
                    </View>
                    <View style={personStyles.password}>
                        <Text style={personStyles.password_title}>Password: </Text>
                        <TextInput style={personStyles.password_text} placeholder="Enter password"
                                   placeholderTextColor="gray" secureTextEntry
                                   keyboardType="default"/>
                    </View>
                    <View style={personStyles.fullName}>
                        <Text style={personStyles.fullName_title}>Full Name: </Text>
                        <TextInput style={personStyles.fullName_text} placeholder="Enter full name"
                                   placeholderTextColor="gray"/>
                    </View>
                    <View style={personStyles.gender}>
                        <Text style={personStyles.gender_title}>Gender: </Text>
                        <View style={personStyles.gender_rad}>
                            <Text>Male</Text>
                            <RadioButton
                                value="0"
                                status={checked === '0' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    this.setState({checked: '0'});
                                }}
                            />
                            <Text>Female</Text>
                            <RadioButton
                                value="1"
                                status={checked === '1' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    this.setState({checked: '1'});
                                }}
                            />
                        </View>
                    </View>
                    <View style={personStyles.birthday}>
                        <Text style={personStyles.birthday_title}>Birthday:</Text>
                        <DatePicker
                            style={personStyles.birthday_dtp}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="1900-01-01"
                            maxDate="2100-01-01"
                            onDateChange={(date) => {
                                this.setState({date: date})
                            }}
                        />
                    </View>
                    <View style={personStyles.image}>
                        <Image style={personStyles.image_img} source={require('./src/images/logo_test.jpg')}/>
                        <TouchableOpacity>
                            <Text style={personStyles.image_btn}>Add image</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={personStyles.bottom}>
                    <TouchableOpacity>
                        <Text style={personStyles.btn}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={personStyles.btn}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const personStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    top: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    body: {
        flex: 10,
    },
    account: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
    },
    account_title: {
        flex: 1,
        textAlignVertical: 'center',
    },
    account_text: {
        flex: 2,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 5,
        marginLeft: 10,
    },
    password: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
    },
    password_title: {
        flex: 1,
        textAlignVertical: 'center',
    },
    password_text: {
        flex: 2,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 5,
        marginLeft: 10,
    },
    fullName: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
    },
    fullName_title: {
        flex: 1,
        textAlignVertical: 'center',
    },
    fullName_text: {
        flex: 2,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 5,
        marginLeft: 10,
    },
    gender: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,

    },
    gender_title: {
        flex: 1,
        textAlignVertical: 'center',
    },
    gender_rad: {
        flex: 2,
        flexDirection: 'row',
        textAlignVertical: 'center',
        alignItems: 'center'
    },
    birthday: {
        flex: 1,
        flexDirection: 'row',
    },
    birthday_title: {
        flex: 1,
        textAlignVertical: 'center',
    },
    birthday_dtp: {
        flex: 2,
        width: 200,
        alignItems: 'center',
    },
    image: {
        flex: 3,
        alignItems: 'center',
    },
    image_img: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 50,
    },
    image_btn: {
        width: 100,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#1E6738',
        borderRadius: 5,
        borderWidth: 1,

    },
    bottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btn: {
        flex: 1,
        width: 100,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 5,
        backgroundColor: '#1E6738',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff'
    }
});

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {productQuantity: 0};
    }

    //Increase
    increase = () => {
        //console.log('tang');
        this.setState({
            productQuantity: this.state.productQuantity + 1
        })
    }
    //Reduce
    reduce = () => {
        //console.log('giam');
        this.setState({
            productQuantity: this.state.productQuantity - 1
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.leftContent}>
                    <Image style={styles.img} source={require('./images/banphim1.jpg')}/>
                    <Text style={styles.quantity}>Quantity: {this.state.productQuantity}</Text>
                </View>
                <View style={styles.rightContent}>
                    <View style={styles.rightTopContent}>
                        <Text style={styles.productInfo}>Id: {this.props.productID}</Text>
                        <Text style={styles.productInfo}>Name: {this.props.productName}</Text>
                    </View>
                    <View style={styles.rightBottomContent}>
                        <TouchableOpacity onPress={() => {
                            this.increase();
                        }}>
                            <Text style={styles.button}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.reduce();
                        }}>
                            <Text style={styles.button}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 130,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'lightblue',
    },
    leftContent: {
        flex: 1,
        width: 130,
        marginRight: 10,
        alignItems: 'center'
    },
    img: {
        flex: 7,
        marginBottom: 10,
        width: 120,
    },
    quantity: {
        flex: 3,
        width: 120,
        backgroundColor: 'blue',
        borderColor: 1,
        borderRadius: 10,
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
    rightContent: {
        flex: 2,
    },
    rightTopContent: {
        flex: 7,
        borderColor: 1,
        backgroundColor: 'green',
        marginBottom: 10,
        justifyContent: 'center',
        paddingLeft: 15,
    },
    productInfo: {
        color: 'yellow',
        paddingBottom: 5,
    },
    rightBottomContent: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        flex: 1,
        borderColor: 1,
        backgroundColor: 'yellow',
        color: 'red',
        width: 60,
        fontSize: 20,
        textAlign: 'center',
        borderRadius: 5,
    },
});
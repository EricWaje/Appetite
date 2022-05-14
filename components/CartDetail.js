import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

const CartDetail = ({ price, img, id }) => {
    return (
        <View style={styles.containerDetail}>
            <View>
                <Image style={styles.img} source={{ uri: img }} />
            </View>
            <View>
                <Text>$ {price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerDetail: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ff6d49',
        padding: 10,
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
});

export default CartDetail;

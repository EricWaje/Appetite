import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../constants/colors';

const Tab = ({ navigation }) => {
    return (
        <View style={styles.containerTab}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <FontAwesome name="home" size={22} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome name="shopping-bag" size={22} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome name="user" size={22} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    containerTab: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 55,
        backgroundColor: '#ff6d49',
    },
});

export default Tab;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Tab = () => {
    return (
        <View style={styles.containerTab}>
            <TouchableOpacity>
                <FontAwesome name="home" size={22} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome name="shopping-bag" size={22} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome name="user" size={22} color="black" />
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
        backgroundColor: '#ecf0f1',
        borderTopWidth: 1,
        borderColor: '#18181840',
    },
});

export default Tab;

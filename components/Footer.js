import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={{ color: 'white', fontFamily: 'RobotoLight' }}>
                ericwajnrajch.com
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#ff6d49',
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Footer;

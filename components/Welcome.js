import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const Welcome = () => {
    const [loaded] = useFonts({
        Lobster: require('../assets/fonts/Lobster-Regular.ttf'),
    });

    if (!loaded) return <AppLoading />;
    return (
        <View style={styles.containerTitle}>
            <Text style={styles.title}>Appetite</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerTitle: {
        alignItems: 'center',
        marginTop: 37,
    },
    title: {
        fontSize: 35,
        fontFamily: 'Lobster',
    },
});

export default Welcome;

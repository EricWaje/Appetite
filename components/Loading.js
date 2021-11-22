import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const Loading = () => {
    const [loaded] = useFonts({
        Lobster: require('../assets/fonts/Lobster-Regular.ttf'),
    });

    if (!loaded) return <AppLoading />;
    return (
        <View style={styles.containerLoading}>
            <Text style={styles.loadingText}>Loading...</Text>
            <MaterialIcons name="food-bank" size={90} color="#ff6d49" />
            <MaterialCommunityIcons
                name="food-croissant"
                size={90}
                color="#ff6d49"
            />
            <MaterialCommunityIcons name="food" size={90} color="#ff6d49" />
        </View>
    );
};

const styles = StyleSheet.create({
    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 40,
        fontFamily: 'Lobster',
    },
});

export default Loading;

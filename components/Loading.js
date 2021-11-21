import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const Loading = () => {
    return (
        <View style={styles.containerLoading}>
            <Text style={styles.loadingText}>Loading...</Text>
            <MaterialIcons name="food-bank" size={90} color="black" />
            <MaterialCommunityIcons
                name="food-croissant"
                size={90}
                color="black"
            />
            <MaterialCommunityIcons name="food" size={90} color="black" />
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
        fontFamily: 'RobotoBold',
    },
});

export default Loading;

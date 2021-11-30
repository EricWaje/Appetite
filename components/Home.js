import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Welcome from '../components/Welcome';
import Form from './Form';

const Home = ({ navigation }) => {
    const [loaded] = useFonts({
        Lobster: require('../assets/fonts/Lobster-Regular.ttf'),
        RobotoLight: require('../assets/fonts/Roboto-Light.ttf'),
        RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
    });

    if (!loaded) return <AppLoading />;
    return (
        <View>
            <Welcome />
            <View
                style={{
                    justifyContent: 'space-between',
                    height: '90%',
                }}
            >
                <View style={styles.containerBienvenida}>
                    <Text style={styles.bienvenida}>
                        ¡Empezá a darte los gustos que siempre quisiste!
                    </Text>
                    <Form navigation={navigation} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerBienvenida: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bienvenida: {
        marginTop: 30,
        marginBottom: 10,
        fontSize: 27,
        padding: 20,
        textAlign: 'center',
        lineHeight: 37,
        color: '#ff6d49',
        fontFamily: 'Lobster',
    },
});

export default Home;

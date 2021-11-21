import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Welcome from '../components/Welcome';

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
                        ¡¡Empezá a darte los gustos que siempre quisiste!!
                    </Text>
                    <TouchableOpacity
                        style={styles.containerPedir}
                        onPress={() => navigation.navigate('Restaurants')}
                    >
                        <Text style={styles.texto}>Pedir comida 😋</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <Text style={{ color: 'white', fontFamily: 'RobotoLight' }}>
                        ericwajnrajch.com
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerBienvenida: {
        height: '50%',
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
    containerPedir: {
        backgroundColor: '#ff6d49',
        padding: 12,
        borderRadius: 10,
    },
    texto: {
        color: 'white',
        fontSize: 27,
        fontFamily: 'RobotoBold',
    },
    footer: {
        backgroundColor: '#ff6d49',
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;

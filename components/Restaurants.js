import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import useFetch from '../hooks/useFetch';
import Restaurant from './Restaurant';

const Restaurants = () => {
    const [data] = useFetch();
    /* console.log(data); */
    const [loaded] = useFonts({
        RobotoLight: require('../assets/fonts/Roboto-Light.ttf'),
        RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
    });

    if (!loaded) return <AppLoading />;
    return (
        <>
            {data.map((resto) => (
                <Restaurant key={resto.id} {...resto} />
            ))}
        </>
    );
};

const styles = StyleSheet.create({
    containerGeneral: {
        backgroundColor: '#ecf0f1',
    },
    containerResto: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
        backgroundColor: '#fff',
    },
    img: {
        width: '100%',
        height: 130,
    },
    restoName: {
        fontSize: 18,
        paddingTop: 5,
        paddingLeft: 7,
        fontWeight: 'bold',
        fontFamily: 'RobotoMedium',
    },
    restoInfo: {
        fontSize: 15,
        paddingTop: 3,
        paddingBottom: 10,
        paddingLeft: 7,
        fontFamily: 'RobotoLight',
    },
});

export default Restaurants;

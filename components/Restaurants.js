import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import useFetch from '../hooks/useFetch';
import Restaurant from './Restaurant';
import Loading from './Loading';

const Restaurants = ({ cambio }) => {
    const [data, loading] = useFetch();

    const [loaded] = useFonts({
        RobotoLight: require('../assets/fonts/Roboto-Light.ttf'),
        RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
    });

    if (!loaded) return <AppLoading />;
    return (
        <>
            {!loading && data?.length > 0 ? (
                <>
                    {data.map((resto) => (
                        <Restaurant key={resto.id} {...resto} cambio={cambio} />
                    ))}
                </>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default Restaurants;

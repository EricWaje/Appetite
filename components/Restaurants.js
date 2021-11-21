import React from 'react';
import { FlatList } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import useFetch from '../hooks/useFetch';
import Restaurant from './Restaurant';
import Loading from './Loading';
import Search from './Search';
import Welcome from './Welcome';
import Tab from './Tab';

const Restaurants = ({ navigation }) => {
    const [data, loading] = useFetch();

    const [loaded] = useFonts({
        RobotoLight: require('../assets/fonts/Roboto-Light.ttf'),
        RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
    });

    if (!loaded) return <AppLoading />;

    return (
        <>
            <Welcome />
            <Search />
            {!loading && data?.length > 0 ? (
                <>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Restaurant {...item} navigation={navigation} />
                        )}
                    />
                </>
            ) : (
                <Loading />
            )}
            <Tab navigation={navigation} />
        </>
    );
};

export default Restaurants;

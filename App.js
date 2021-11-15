import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome';
import Search from './components/Search';
import Restaurants from './components/Restaurants';
import Tab from './components/Tab';

export default function App() {
    return (
        <View style={styles.container}>
            <Welcome />
            <Search />
            <ScrollView>
                <Restaurants />
            </ScrollView>
            <Tab />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Welcome from './components/Welcome';
import Search from './components/Search';
import Restaurants from './components/Restaurants';
import Tab from './components/Tab';
import Detail from './components/Detail';

export default function App() {
    const [click, setClick] = useState();

    const cambio = (x) => {
        setClick(x);
    };

    let content = <Restaurants cambio={cambio} />;

    if (click) {
        content = <Detail />;
    }
    return (
        <View style={styles.container}>
            <Welcome />
            <Search />
            <ScrollView>{content}</ScrollView>
            <Tab />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

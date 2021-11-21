import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { comidas } from './menuMock';
import Menu from './Menu';
import RestaurantDetail from './RestaurantDetail';

const About = ({ navigation, route }) => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const traerMenu = new Promise((resolve, rejected) => {
            resolve(comidas);
        });
        traerMenu
            .then((res) => {
                setMenu(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <View>
            <RestaurantDetail route={route} />
            <FlatList
                style={{ marginBottom: 30 }}
                data={menu}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Menu {...item} />}
            />
        </View>
    );
};

export default About;

import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    ScrollView,
} from 'react-native';
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
        <View style={{ flex: 1 }}>
            <RestaurantDetail route={route} />
            <ScrollView>
                {menu.map((food) => (
                    <Menu key={food.id} food={food} route={route} />
                ))}
            </ScrollView>
        </View>
    );
};

export default About;

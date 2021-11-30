import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import RestaurantsNavigation from './RestaurantsNavigation';
import CartNavigation from './CartNavigation';
import HomeNavigator from './HomeNavigator';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tab,
                tabBarShowLabel: false,
            }}
        >
            <BottomTabs.Screen
                name="Inicio"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome
                                name="home"
                                size={24}
                                color={!focused ? 'white' : '#181818'}
                            />
                        </View>
                    ),
                }}
            />
            <BottomTabs.Screen
                name="Restaurant"
                component={RestaurantsNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Ionicons
                                name="restaurant"
                                size={24}
                                color={!focused ? 'white' : '#181818'}
                            />
                        </View>
                    ),
                }}
            />
            <BottomTabs.Screen
                name="Carrito"
                component={CartNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome
                                name="shopping-cart"
                                size={24}
                                color={!focused ? 'white' : '#181818'}
                            />
                        </View>
                    ),
                }}
            />
        </BottomTabs.Navigator>
    );
};

const styles = StyleSheet.create({
    tab: {
        backgroundColor: '#ff6d49',
        //backgroundColor: 'transparent',
        height: 60,
    },
});

export default TabNavigator;

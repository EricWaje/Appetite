import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Restaurants from '../components/Restaurants';
import About from '../components/About';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

const RestaurantsNavigation = () => (
    <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Resto" component={Restaurants} />
        <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
);

export default RestaurantsNavigation;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../components/Home';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

const HomeNavigator = () => (
    <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
);

export default HomeNavigator;

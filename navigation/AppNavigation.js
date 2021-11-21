import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../components/Home';
import Restaurants from '../components/Restaurants';
import About from '../components/About';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

const AppNavigation = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Restaurants" component={Restaurants} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigation;

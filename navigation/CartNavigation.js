import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cart from '../components/Cart';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

const CartNavigation = () => (
    <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
);

export default CartNavigation;

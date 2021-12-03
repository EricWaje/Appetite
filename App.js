import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainNavigator from './navigation';
import store from './store';
import { Provider as ShopProvider } from 'react-redux';

export default function App() {
    return (
        <ShopProvider store={store}>
            <MainNavigator />
            <StatusBar style="auto" />
        </ShopProvider>
    );
}

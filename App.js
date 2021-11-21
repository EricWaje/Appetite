import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppNavigation from './navigation/AppNavigation';

export default function App() {
    return (
        <>
            <AppNavigation />
            <StatusBar style="auto" />
        </>
    );
}

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Menu = ({ id, title, description, img, price }) => {
    const [loaded] = useFonts({
        RobotoLight: require('../assets/fonts/Roboto-Light.ttf'),
        RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoBold: require('../assets/fonts/Roboto-Bold.ttf'),
    });

    if (!loaded) return <AppLoading />;
    return (
        <View>
            <View style={styles.containerMenu}>
                <BouncyCheckbox size={20} fillColor="#ff6d49" />
                <View style={styles.containerInfo}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.price}>$ {price}</Text>
                </View>
                <View>
                    <Image style={styles.img} source={{ uri: img }} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerMenu: {
        borderWidth: 1,
        borderColor: '#61616123',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 10,
        backgroundColor: '#f8f8f8',
        shadowColor: '#30303052',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.49,
        shadowRadius: 2.65,

        elevation: 7,
    },
    containerInfo: {
        width: '60%',
    },
    title: {
        fontFamily: 'RobotoBold',
        fontSize: 19,
        marginBottom: 5,
    },
    description: {
        fontFamily: 'RobotoLight',
        fontSize: 15,
        marginBottom: 5,
    },
    price: {
        fontFamily: 'RobotoBold',
        fontSize: 19,
        marginBottom: 2,
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
});

export default Menu;

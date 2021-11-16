import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../constants/colors';

const Restaurant = ({ name, image_url, rating, location, cambio }) => {
    const [x, setX] = useState(1);
    return (
        <TouchableOpacity onPress={() => cambio(x)}>
            <View style={styles.containerGeneral}>
                <View style={styles.containerResto}>
                    <Image style={styles.img} source={{ uri: image_url }} />
                    <View style={styles.containerInfo}>
                        <View>
                            <Text style={styles.restoName}>{name}</Text>
                            <Text style={styles.restoAddress}>
                                {location.address1}
                            </Text>
                        </View>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <MaterialIcons
                                name="star-rate"
                                size={24}
                                color="#eecc0a"
                            />
                            <Text style={styles.restoInfo}>{rating}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    containerGeneral: {
        backgroundColor: colors.secondary,
    },
    containerResto: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
        backgroundColor: colors.primary,
    },
    img: {
        width: '100%',
        height: 130,
    },
    containerInfo: {
        padding: 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    restoName: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'RobotoMedium',
    },
    restoAddress: {
        fontSize: 17,
        fontFamily: 'RobotoLight',
        marginTop: 5,
    },
    restoInfo: {
        fontSize: 17,
        fontFamily: 'RobotoMedium',
        marginLeft: 5,
    },
});

export default Restaurant;

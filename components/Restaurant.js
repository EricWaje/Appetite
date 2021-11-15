import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Restaurant = ({ name, image_url, rating }) => {
    //console.log(resto);
    return (
        <View style={styles.containerGeneral}>
            <View style={styles.containerResto}>
                <Image style={styles.img} source={{ uri: image_url }} />
                <View style={styles.containerInfo}>
                    <Text style={styles.restoName}>{name}</Text>
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
                            color="gold"
                        />
                        <Text style={styles.restoInfo}>{rating}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    containerGeneral: {
        backgroundColor: '#ecf0f1',
    },
    containerResto: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        flex: 1,
        backgroundColor: '#fff',
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
    restoInfo: {
        fontSize: 17,
        fontFamily: 'RobotoMedium',
        marginLeft: 5,
    },
});

export default Restaurant;

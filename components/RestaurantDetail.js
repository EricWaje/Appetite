import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RestaurantDetail = ({ route }) => {
    const { image_url, name, rating, phone, review_count, categories } =
        route.params;

    const formatedCategories = categories.map((x) => x.title).join(' - ');
    return (
        <View style={{ marginTop: 30 }}>
            <View>
                <Image
                    style={{ width: '100%', height: 150 }}
                    source={{ uri: image_url }}
                />
            </View>
            <View style={styles.containerData}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 3,
                    }}
                >
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.rating}>⭐️{rating}</Text>
                </View>
                <View>
                    <Text style={styles.categories}>{formatedCategories}</Text>
                </View>
                <View style={styles.infoLocal}>
                    {/* <Text style={styles.infoExtra}>{location}</Text> */}
                    <Text style={styles.infoExtra}>☎️ {phone}</Text>
                    <Text style={styles.infoExtra}> ({review_count}+)</Text>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    containerData: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#61616123',
    },
    name: {
        color: 'black',
        fontSize: 21,
        fontFamily: 'RobotoMedium',
    },
    rating: {
        color: 'black',
        fontSize: 16,
    },
    categories: {
        fontStyle: 'italic',
        marginVertical: 4,
    },
    infoLocal: {
        flexDirection: 'row',
    },
    infoExtra: {
        marginRight: 5,
    },
});

export default RestaurantDetail;

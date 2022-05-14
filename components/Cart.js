import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import CartDetail from './CartDetail';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const Cart = () => {
    const [loaded] = useFonts({
        Lobster: require('../assets/fonts/Lobster-Regular.ttf'),
    });

    const products = useSelector(
        (state) => state.shopReducer.selectedItems.items
    );

    const restaurantName = useSelector(
        (state) => state.shopReducer.selectedItems.restaurant
    );

    const totall = products.reduce((prev, acc) => prev + acc.price * 1, 0);

    if (!loaded) return <AppLoading />;
    return (
        <View style={{ marginTop: 50, padding: 10 }}>
            <View>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 25,
                        fontFamily: 'Lobster',
                    }}
                >
                    Tu pedido
                </Text>
            </View>
            <View>
                {products.length === 0 ? (
                    <Text>Aún no hay productos</Text>
                ) : (
                    <View style={styles.containerCart}>
                        <View>
                            <FlatList
                                data={products}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <CartDetail
                                        {...item}
                                        restaurantName={restaurantName}
                                    />
                                )}
                            />
                        </View>
                        <Text style={styles.total}>Total: ${totall}.-</Text>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerCart: {
        height: '97%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    total: {
        marginTop: 20,
        fontSize: 25,
    },
});

export default Cart;

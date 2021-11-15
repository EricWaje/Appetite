import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Search = () => {
    return (
        <View style={styles.containerInput}>
            <FontAwesome
                style={styles.search}
                name="search"
                size={24}
                color="black"
            />
            <TextInput
                style={styles.input}
                placeholder="Buenos Aires"
                placeholderTextColor="#18181830"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerInput: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    input: {
        width: '75%',
        borderWidth: 2,
        borderColor: '#181818',
        borderRadius: 10,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 50,
        paddingRight: 20,
        fontSize: 20,
        position: 'relative',
    },
    search: {
        position: 'absolute',
        top: 9,
        left: 60,
    },
});

export default Search;

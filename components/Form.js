import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Form = ({ navigation }) => {
    const [mostrar, setMostrar] = useState(true);

    const cambioForm = () => {
        setMostrar(!mostrar);
    };

    const inicio = () => {
        if (mostrar) {
            //login firebase
            navigation.navigate('Restaurant');
        } else {
            //crear cuenta firebase
            navigation.navigate('Restaurant');
        }
    };

    return (
        <View>
            <TextInput style={styles.input} placeholder="example@gmail.com" />
            <TextInput style={styles.input} placeholder="********" />
            <TouchableOpacity style={styles.containerPedir} onPress={inicio}>
                <Text style={styles.texto}>
                    {mostrar ? 'Ingresar' : 'Crear cuenta'}
                </Text>
            </TouchableOpacity>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 15,
                }}
            >
                <Text style={{ fontSize: 16 }}>
                    {mostrar ? '¿No tenés cuenta?' : '¿Ya tenés usuario?'}
                </Text>
                <Button
                    onPress={cambioForm}
                    title={mostrar ? 'Crear cuenta' : 'Ingresá'}
                    color="#ff6d49"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ff6d49',
        marginVertical: 10,
        fontSize: 23,
        paddingHorizontal: 13,
        paddingVertical: 8,
        borderRadius: 10,
    },
    containerPedir: {
        backgroundColor: '#ff6d49',
        padding: 10,
        borderRadius: 10,
        marginTop: 15,
    },
    texto: {
        color: 'white',
        fontSize: 23,
        fontFamily: 'RobotoMedium',
        textAlign: 'center',
    },
});

export default Form;

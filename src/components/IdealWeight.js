import React from 'react';
import { Text, StyleSheet } from 'react-native';

const PesoIdeal = ({ PesoMin, PesoMax }) => {

    return (
        <Text style={styles.result}>
            Peso mínimo ideal = {PesoMin} kg
            {'\n'}
            Peso máximo ideal = {PesoMax} kg
        </Text>
    );

};

const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 16,
        textAlign: 'center',
        color: '#6acd4f',
    },
});

export default PesoIdeal;
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Classification = ({ classificacao }) => {

    return (
        <Text style={styles.result}>{classificacao}</Text>
    );

};

const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default Classification;
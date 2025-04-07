import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Função que recebe as props PesoMin e PesoMax
const PesoIdeal = ({ PesoMin, PesoMax }) => {
    return (
        // Exibe o texto com o peso mínimo e máximo ideal
        <Text style={styles.result}>
            Peso mínimo ideal = {PesoMin} kg
            {'\n'} {/* Quebra de linha no texto */}
            Peso máximo ideal = {PesoMax} kg
        </Text>
    );
};

// Estilização do texto
const styles = StyleSheet.create({
    result: {
        marginTop: 20, // Espaçamento superior
        fontSize: 16, // Tamanho da fonte
        textAlign: 'center', // Alinhamento centralizado do texto
        color: '#6acd4f', // Cor verde do texto (indicando algo positivo/ideal)
    },
});

export default PesoIdeal; // Exporta o componente para ser usado em outros arquivos

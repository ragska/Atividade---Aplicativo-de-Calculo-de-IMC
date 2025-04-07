import React from 'react';
import { Text, StyleSheet } from 'react-native';

// função que recebe a prop "classificacao" para mostrar a categoria do IMC
const Classification = ({ classificacao }) => {
    return (
        // Exibe o texto da classificação
        <Text style={styles.result}>{classificacao}</Text>
    );
};

// Estilização aplicada ao texto da classificação
const styles = StyleSheet.create({
    result: {
        marginTop: 20, // Espaço acima do texto
        fontSize: 24, // Tamanho maior da fonte para dar destaque
        textAlign: 'center', // Centraliza o texto horizontalmente
        color: '#333', // Cor do texto (cinza escuro)
    },
});

export default Classification; // Exporta o componente 'Classification' para ser usado em outros arquivos

import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Funcional que recebe a prop "imc" para exibir o resultado do cálculo
const Result = ({ imc }) => {
    return (
        // Exibe o texto com o valor do IMC, utilizando o estilo definido
        <Text style={styles.result}>Seu IMC é: {imc}</Text>
    );
};

// Estilização aplicado ao texto do resultado
const styles = StyleSheet.create({
    result: {
        marginTop: 20, // Espaço acima do texto
        fontSize: 24, // Tamanho da fonte maior para destaque
        textAlign: 'center', // Alinhamento centralizado
        color: '#333', // Cor do texto (cinza escuro)
    },
});

export default Result; // Exporta o componente para uso em outros arquivos

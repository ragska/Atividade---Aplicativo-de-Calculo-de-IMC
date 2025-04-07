import { Text, StyleSheet } from 'react-native';

// Função que exibe o título da aplicação
const Title = () => {
    return (
        // Componente de texto com estilo aplicado
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

// Estilização criada com StyleSheet
const styles = StyleSheet.create({
    title: {
        fontSize: 32, // Tamanho grande da fonte para destacar o título
        fontWeight: 'bold', // Negrito
        textAlign: 'center', // Centraliza o texto na horizontal
        marginBottom: 24, // Espaçamento inferior para separar dos próximos elementos
    },
});

export default Title; // Exporta o componente 'Title' para ser usado em outros arquivos

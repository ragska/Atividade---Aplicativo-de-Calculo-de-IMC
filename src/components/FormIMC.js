import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';  // Componente que mostra o valor do IMC
import Classification from './Classification'; // Componente que mostra a classificação do IMC
import PesoIdeal from './IdealWeight';  // Componente que mostra o peso ideal
import { useState, useEffect } from 'react';

// Componente principal do formulário de cálculo de IMC
const FormIMC = () => {

    // Estados para armazenar os valores digitados pelo usuário e calculados
    const [peso, setPeso] = useState(''); 
    const [altura, setAltura] = useState('');  
    const [imc, setIMC] = useState(null);  
    const [classificacao, setClassificacao] = useState(null); 
    const [PesoMin, setPesoMin] = useState(null); 
    const [PesoMax, setPesoMax] = useState(null);  
    const [corFundo, setCorFundo] = useState('#f0f0f0'); // Cor de fundo dinâmica baseada na classificação

    // Função para calcular o IMC com base no peso e altura
    const calcularIMC = () => {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100; // Converte altura de cm para metros
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2); // Fórmula do IMC
            setIMC(imcCalculado); // Atualiza o estado com o valor calculado
            definirClassificacao(imcCalculado); // Determina a classificação com base no IMC
            calcularPesoIdeal(alturaMetros); // Calcula o intervalo de peso ideal
        }
    };

    // Função que define a classificação com base no valor do IMC
    const definirClassificacao = (valorIMC) => {
        const imc = parseFloat(valorIMC);
        if (imc < 18.5) {
            setClassificacao('Abaixo do peso');
        } else if (imc < 25) {
            setClassificacao('Peso Normal');
        } else if (imc < 30) {
            setClassificacao('Sobrepeso');
        } else if (imc < 35) {
            setClassificacao('Obesidade grau 1');
        } else if (imc < 40) {
            setClassificacao('Obesidade grau 2');
        } else {
            setClassificacao('Obesidade grau 3 (obesidade mórbida)');
        } 
    }

    // Efeito que altera a cor de fundo do formulário de acordo com a classificação toda vez que ela é alterada
    useEffect(() => {
        if (classificacao) {
            if (classificacao === 'Peso Normal') {
                setCorFundo('#d4edda'); // verde claro
            } else if (classificacao === 'Sobrepeso') {
                setCorFundo('#fff3cd'); // amarelo claro
            } else {
                setCorFundo('#f8d7da'); // vermelho claro
            }
        }
    }, [classificacao]);

    // Função que calcula o peso ideal baseado na altura
    const calcularPesoIdeal = (altura) => {
        setPesoMin((18.5 * (altura * altura)).toFixed(2)); // Peso mínimo ideal com IMC 18.5
        setPesoMax((24.9 * (altura * altura)).toFixed(2)); // Peso máximo ideal com IMC 24.9
    };

    return (
        // Container do formulário com cor de fundo dinâmica
        <View style={[styles.formContainer, { backgroundColor: corFundo }]}>

            {/* Campo para inserir o peso */}
            <TextInput
                style={styles.input}
                placeholder='Peso (kg)'
                keyboardType='numeric'
                value={peso}
                onChangeText={setPeso}
            />

            {/* Campo para inserir a altura */}
            <TextInput
                style={styles.input}
                placeholder='Altura (cm)'
                keyboardType='numeric'
                value={altura}
                onChangeText={setAltura}
            />

            {/* Botão para calcular o IMC */}
            <Button title="Calcular IMC" onPress={calcularIMC} />

            {/* Renderiza o resultado do IMC se já tiver sido calculado */}
            {imc && <Result imc={imc}/>}

            {/* Renderiza a classificação se estiver definida */}
            {classificacao && <Classification classificacao={classificacao}/>}

            {/* Mostra o intervalo de peso ideal se disponível */}
            {PesoMin && PesoMax && <PesoIdeal PesoMin={PesoMin} PesoMax={PesoMax}/>}

            {/* Botão de limpar que só aparece quando já existe resultado */}
            {imc && (
                <View style={{marginTop:10}}>
                    <Button title="Limpar" onPress={() => {
                        // Reseta todos os campos e estados
                        setPeso('');
                        setAltura('');
                        setIMC(null);
                        setClassificacao(null);
                        setPesoMin(null);
                        setPesoMax(null);
                        setCorFundo('#f0f0f0');
                    }} />
                </View>
            )}
        </View>
    );
};

// Estilos do formulário e dos inputs
const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#f0f0f0', // cor inicial
        padding: 16, // espaçamento interno
        borderRadius: 10, // bordas arredondadas
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

export default FormIMC;

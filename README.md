# Calculadora de IMC
Aplicativo mobile desenvolvido em React Native que calcula o IMC do usuário com base no seu peso e altura. O app também classifica o IMC e informa o peso mínimo e máximo ideal com base na altura informada.

Segue as formulas usadas:

  -Classificação do IMC:
  
    Menor que 18.5: Abaixo do peso
    Entre 18.5 e 24.9: Peso normal
    Entre 25 e 29.9: Sobrepeso
    Entre 30 e 34.9: Obesidade grau 1
    Entre 35 e 39.9: Obesidade grau 2
    Maior ou igual a 40: Obesidade grau 3 (obesidade mórbida)
    
  -Peso Ideal:
  
    -Peso mínimo ideal = 18.5 × (altura em metros)²
    -Peso máximo ideal = 24.9 × (altura em metros)²ki
    

Funcionalidades

- Entrada de peso(em kg) e altura(em cm)
- Cálculo do IMC
- Exibição da classificação do IMC
- Exibição do peso ideal (minimo e máximo)
- Botão de limpar os campos

Objetivo do Projeto

O objetivo deste projeto é colocar em prática os conhecimentos de React Native, utilizando hooks como useState, useEffect, e aplicação de boas práticas

# Como baixar ou clonar o projeto

Você deve ter o Node.js, Expo CLI e o Git instalados

No GitHub:
Vá até o repositório desejado, clique no botão verde "Code" e copie o link que aparece em HTTPS

No terminal do Git Bash, digite: 

    git clone https://github.com/ragska/Atividade---Aplicativo-de-Calculo-de-IMC.git
    
Para baixar as dependências, digite:

    npm install

# Vídeos Explicativos
Testes, interface e funcionalidades:

https://youtu.be/ytZyww93G6Q

Códogo e lógica: 

https://youtu.be/IkzpZv1_9yU

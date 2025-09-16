//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

var numero = parseFloat(prompt("Digite um número:")); // Solicita ao usuário que insira um número e converte a entrada para um número de ponto flutuante

if (numero > 0) { // Verifica se o número é positivo
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}
//Crie um programa de contagem progressiva. Peça um número ao usuario e conte de 0 até esté número, usando um loop while no console do navegador.

let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");;
let contador = 0; // Inicializa o contador em 0

while (contador <= numeroMaximo) {
    console.log(contador); // Exibe o valor atual do contador no console
    contador++ // Incrementa o contador em 1 a cada iteração
}
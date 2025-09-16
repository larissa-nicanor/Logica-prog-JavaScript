//Crie um programa de contagem regressiva. Peça um número ao usuario e conte deste número até 0, usando um loop while no console do navegador.

let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo >= 0) { // Enquanto numeroMaximo for maior ou igual a 0
    console.log(numeroMaximo); // Exibe o valor atual de numeroMaximo no console
    numeroMaximo--; // Decrementa numeroMaximo em 1 a cada iteração
}

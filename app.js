alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000; //definindo o número máximo
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //número aleatório entre 1 e numeroMaximo
console.log(numeroSecreto);
let chute;
let tentativas = 1;


//enquanto chute não for um número válido...
while ( chute != numeroSecreto){
    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`); //entrada de dados
    //se o chute for igual ao número secreto, você ganhou
    if (chute == numeroSecreto) {
        break; //interrompe o laço
    } else { //se o chute for diferente do número secreto
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else { //chute < numeroSecreto
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++; //tentativas = tentativas + 1
    }
}

let palavraTativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //operador ternário
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

// if (tentativas > 1){
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
// }
alert('Boas vindas ao numero secreto');
let numeroSecreto = 6;
console.log(numeroSecreto)
let chute 

//enquanto chute não for igual ao numero Secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);

    } else {
        if (chute > numeroSecreto) {
        alert (`O numeroSecreto é menor que ${chute}`);
        } else {
        alert (`O numeroSecreto é maior que ${chute}`);
        }
    } 
}
//Exercício 1 - Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n
let n = 5;
let sizeLine = "";
for (let index = 0; index < n; index += 1) {
    sizeLine += "*";
}
for (let index = 0; index < n; index += 1) {
    console.log(sizeLine);
}



//Exercício 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base
let n = 5;
let sizeLine = "";
for (let index = 0; index < n; index += 1) {
    sizeLine += "*";
    console.log(sizeLine);
}
//Exercício 1 - Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n
let n = 5;
let lineSize = "";
for (let index = 0; index < n; index += 1) {
    lineSize += "*";
}
for (let index = 0; index < n; index += 1) {
    console.log(lineSize);
}



//Exercício 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base
let n = 5;
let lineSize = "";
for (let index = 0; index < n; index += 1) {
    lineSize += "*";
    console.log(lineSize);
}







//Exercício 4 - Depois, faça uma pirâmide com n asteriscos de base






//Exercício 5 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar





//Exercício 6 - Faça um programa que diz se um número definido numa variável é primo ou não
//
//Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
//
//Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
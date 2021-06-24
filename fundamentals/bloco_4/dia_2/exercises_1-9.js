//Exercício 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}


//Exercício 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
}
console.log(sum);


//Exercício 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
}
let average = sum / numbers.length;
console.log(average);


//Exercício 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
}
let average = sum / numbers.length;
if (average > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}


//Exercício 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let greater = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > greater) {
        greater = numbers[index];
    }
}
console.log(greater);


//Exercício 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let countOdd = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        countOdd += 1;
    }
}
console.log(countOdd);


//Exercício 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lesser = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < lesser) {
        lesser = numbers[index];
    }
}
console.log(lesser);


//Exercício 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado

let arrSize = 25;
let arr = []
for (let index = 1; index <= arrSize; index += 1) {
    arr.push(index);
}
console.log(arr);


//Exercício 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2

let arrSize = 25;
let arr = []
for (let index = 1; index <= arrSize; index += 1) {
    arr.push(index);
}
for (let index = 0; index < arr.length; index += 1) {
    console.log(arr[index] / 2);
}

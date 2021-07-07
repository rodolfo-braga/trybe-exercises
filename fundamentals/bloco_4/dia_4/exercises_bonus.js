//Ex. 1 - Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function convertRomans(romanNumber) {
    let romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let sum = romans[romanNumber[romanNumber.length - 1]];

    for (let index = romanNumber.length - 1; index > 0; index -= 1) {
        if (romans[romanNumber[index - 1]] < romans[romanNumber[index]]) {
            sum -= romans[romanNumber[index - 1]];
        } else {
            sum += romans[romanNumber[index - 1]];
        }
    }
    return sum;
}

console.log(convertRomans('MCMXCII'));




//Ex. 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

function arrayOfNumbers(vector) {
    let evenNumbers = [];
    for (let index = 0; index < vector.length; index += 1) {
        for (let index2 = 0; index2 < vector[index].length; index2 += 1) {
            if (vector[index][index2] % 2 === 0) {
                evenNumbers.push(vector[index][index2]);
            }
        }
    }
    return evenNumbers;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
console.log(arrayOfNumbers(vector));



//Ex. 3 - A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função. Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...


const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];

function countFruits(basket) {
    let newBasket = {};
    let count = 0;
    for (let fruits in basket) {
        for (let index = 0; index < basket.length; index += 1) {
            if (fruits === basket[index]) {
                count += 1;
            }
        }
        newBasket.fruits = count;
        count = 0;
    }
    return newBasket;
}

console.log(countFruits(basket));
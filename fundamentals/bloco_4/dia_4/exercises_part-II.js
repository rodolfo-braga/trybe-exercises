//Ex. 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verifyPalindrome(word) {
    isPalindrome = false;
    wordBackwards = '';
    for (let index = word.length - 1; index >= 0; index -= 1) {
        wordBackwards += word.charAt(index);
    }
    if (wordBackwards === word) {
        isPalindrome = true;
    } 
    return isPalindrome;
}

console.log(verifyPalindrome('arara'));
console.log(verifyPalindrome('desenvolvimento'));



//Ex. 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function findLargestNumber() {
    let indexLargestNumber = 0;
    let largest = Number();
    for (let index = 0; index < arguments.length; index += 1) {
        if (arguments[index] > largest) {
            largest = arguments[index];
            indexLargestNumber = index;
        }
    }
    return indexLargestNumber;
}

let numbers = [2, 3, 6, 7, 10, 1];
console.log(findLargestNumber(...numbers));



//Ex. 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function findSmallestNumber() {
    let indexSmallestNumber = 0;
    for (let index in arguments) {
        if (arguments[index] < arguments[indexSmallestNumber]) {
            indexSmallestNumber = index;
        }
    }
    return indexSmallestNumber;
}

let numbers = [2, 4, 6, 7, 10, 0, -3];
console.log(findSmallestNumber(...numbers));



//Ex. 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function findLargestName() {
    let largestName = '';
    for (let name in arguments) {
        if (arguments[name].length > largestName.length) {
            largestName = arguments[name];
        }
    }
    return largestName;
}

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(findLargestName(...names));



//Ex. 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function findMostRepeatedNumber() {
    let mostRepeated = 0;
    let count = 0;
    let newCount = 0;
    for (let number in arguments) {
        for (let index in arguments) {
            if (arguments[number] === arguments[index]) {
                newCount += 1;
            }
        }
        if (newCount > count) {
            mostRepeated = arguments[number];
            count = newCount;
        }
        newCount = 0;
    }
    return mostRepeated;
}

let numbers = [2, 3, 2, 5, 8, 2, 3];
console.log(findMostRepeatedNumber(...numbers));



//Ex. 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function sumAllNumbers(N) {
    let sum = 0;
    for (let index = 1; index <= N; index += 1) {
        sum += index;
    }
    return sum;
}

console.log(sumAllNumbers(5));



//Ex. 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verificaFimPalavra(word, ending) {
    endingMatches = false;
    if (word.slice(- ending.length) === ending) {
        endingMatches = true;
    }
    return endingMatches;
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));
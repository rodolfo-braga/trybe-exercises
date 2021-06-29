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

//console.log(verifyPalindrome('arara'));
//console.log(verifyPalindrome('desenvolvimento'));


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

//let numbers = [2, 3, 6, 7, 10, 1];
//console.log(findLargestNumber(...numbers));


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
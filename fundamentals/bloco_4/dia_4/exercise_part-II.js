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


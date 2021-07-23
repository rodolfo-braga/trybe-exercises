//Exercício 1
const factorial = (n) => {
  let result = 1;
  for (let index = 2; index <= n; index += 1) {
    result *= index;
  }
  (n <= 1) ? 1 : n *= (n - 1)

  return result;
}

console.log(factorial(5));


const factorial = (n) => n > 1 ? n * factorial(n - 1) : 1;
console.log(factorial(5));




//Exercício 2
const longestWord = (text) => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));


const longestWord = (text) => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

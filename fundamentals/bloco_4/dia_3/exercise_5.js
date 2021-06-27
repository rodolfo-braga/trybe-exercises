//Exercício 5 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar
let n = 15;
let symbol = '*';
let inputLine = '';

let midOfPyramid = (n + 1) / 2;
let controlLeft = midOfPyramid;
let controlRight = midOfPyramid;

for (let lineIndex = 0; lineIndex < midOfPyramid; lineIndex += 1) {
  for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
    if (columnIndex == controlLeft || columnIndex == controlRight || lineIndex == midOfPyramid - 1) {
      inputLine += symbol;
    } else {
      inputLine += ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};

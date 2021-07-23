//Exercício 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);




//Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

function sortNumbers(array) {
  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] < array[index2]) {
        let alt = array[index2];
        array[index2] = array[index];
        array[index] = alt;
      }
    }
  }
}

// sortNumbers(oddsAndEvens);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

console.log(`Os números ${oddsAndEvens.sort((a, b) => a-b)} se encontram ordenados de forma crescente!`);
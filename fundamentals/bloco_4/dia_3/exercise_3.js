//Exercício 3 - Agora inverta o lado do triângulo
let n = 5;
let symbol = "*";
let space = " ";

for (let indexRow = 0; indexRow < n; indexRow += 1) {
    let inputPlace = "";
    for (let indexColumn = 0; indexColumn < n; indexColumn += 1) {
        if (indexRow < n && indexColumn >= (n - indexRow) -1) {
            inputPlace += symbol;
        } else {
            inputPlace += space;
        }
    }
    console.log(inputPlace);
}
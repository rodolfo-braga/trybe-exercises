//Exercício 4 - Depois, faça uma pirâmide com n asteriscos de base
let n = 15;
let symbol = "*";
let space = " ";

for (let indexRow = 0; indexRow < n; indexRow += 1) {
    let inputPlace = "";
    for (let indexColumn = 0; indexColumn < n; indexColumn += 1) {
        if (indexRow < n && indexColumn >= (n - indexRow) - Math.ceil(n / 2) && indexColumn < (n + indexRow) - Math.floor(n / 2)) {
            inputPlace += symbol;
        } else {
            inputPlace += space;
        }
    }
    if (indexRow > n / 2) {
        break
    } else {
        console.log(inputPlace);
    }
}
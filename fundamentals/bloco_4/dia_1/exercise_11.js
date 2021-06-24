let salarioBruto = 3000.00;

let descontoInss;
let aliquotaInss;

if (salarioBruto <= 1556.94) {
    aliquotaInss = 0.08;
    descontoInss = aliquotaInss * salarioBruto;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    aliquotaInss = 0.09;
    descontoInss = aliquotaInss * salarioBruto;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    aliquotaInss = 0.11;
    descontoInss = aliquotaInss * salarioBruto;
} else (
    descontoInss = 570.88
)

let salarioBase = salarioBruto - descontoInss;
let aliquotaIr;
let parcelaADeduzir;
let valorIr;
let salarioLiquido;

if (salarioBase <= 1903.98) {
    aliquotaIr = 0;
    parcelaADeduzir = 0;
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    aliquotaIr = 0.075;
    parcelaADeduzir = 142.80;
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
    aliquotaIr = 0.15;
    parcelaADeduzir = 354.80;
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    aliquotaIr = 0.225;
    parcelaADeduzir = 636.13; 
} else {
    aliquotaIr = 0.275;
    parcelaADeduzir = 869.36;
}

valorIr = (salarioBase * aliquotaIr) - parcelaADeduzir;
salarioLiquido = salarioBase - valorIr; 

console.log("Salário: " + salarioLiquido);
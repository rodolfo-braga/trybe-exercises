let valorCusto = 10;
let valorVenda = 20;

let impostoSobreOCusto = 1.2;

let valorCustoTotal = valorCusto * impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;
let produtosVendidos = 1000;

if (valorCusto < 0 || valorVenda < 0) {
    console.log("Erro: valor inserido inválido");
} else {
    console.log(lucro * produtosVendidos);
}
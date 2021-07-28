const drawResult = (betNumber, callback) => {
  const drawNumber = Math.floor(Math.random() * 5) + 1;

  console.log(`Número sorteado: ${drawNumber}`)
  
  return callback(betNumber, drawNumber);
}

const checkNumber = (betNumber, drawNumber) => betNumber === drawNumber ? 'Parabéns você ganhou' : 'Tente novamente';

console.log(drawResult(5, checkNumber));

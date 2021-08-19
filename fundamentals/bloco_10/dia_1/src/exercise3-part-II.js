function hydrate(string) {
  const regex = /[1-9]/g;
  /** Regular Expression:
   * [1-9] => dígitos de 1 à 9
   * g => pesquisa por toda a string
   */
  const allDrinks = string.match(regex);
  /** Atribui à variável allDrinks um array com as
   * correspondências entre a string e a regex
   */
  const sumOfDrinks = allDrinks.reduce((sum, numberOfDrinks) => {
    sum += Number(numberOfDrinks);
    return sum;
  }, 0);
  
  if (sumOfDrinks > 1) {
    return `${sumOfDrinks} copos de água`;
  }
  return `${sumOfDrinks} copo de água`;
}

module.exports = hydrate;
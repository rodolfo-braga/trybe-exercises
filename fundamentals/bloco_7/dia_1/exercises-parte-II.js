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

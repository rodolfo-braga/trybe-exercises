const fetchPromise = () => {
  const newPromise = new Promise((resolve, reject) => {
    const randomNumber = () => Math.floor(Math.random() * 50) + 1;
    const array = [];
    for (let index = 0; index < 10; index += 1) {
      array.push(randomNumber() ** 2);
    }
    const sum = array.reduce((acc, currentNumber) => acc + currentNumber);
    console.log(sum);
    (sum < 8000) ? resolve(sum) : reject();
  });
  newPromise
    .then((sum) => [2, 3, 5, 10].map((divisor) => sum / divisor))
    .then((array) => array.reduce((sum, number) => sum + number))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
};

fetchPromise();
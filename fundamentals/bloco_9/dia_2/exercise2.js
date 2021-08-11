const fetchPromise = () => {
  const newPromise = new Promise((resolve, reject) => {
    const randomNumber = () => Math.floor(Math.random() * 50) + 1;
    const array = [];
    for (let index = 0; index < 10; index += 1) {
      array.push(randomNumber() ** 2);
      console.log(array)
    }
    const sum = array.reduce((acc, currentNumber) => acc + currentNumber, 0);
    console.log(sum);
    (sum < 8000) ? resolve() : reject();
  });
  newPromise
    .then(() => console.log('Promise resolvida'))
    .catch(() => console.log('Promise rejeitada'))
};

fetchPromise();
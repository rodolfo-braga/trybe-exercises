const greetPeople = (people) => {
  let greeting = 'Hello ';
  const greetings = [];

  for (const person in people) {
    greetings.push(greeting + people[person]);
  }
  return greetings;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const assert = require('assert');
assert.strictEqual(typeof greetPeople, 'function');

const output = greetPeople(parameter);
assert.deepStrictEqual(output, result);
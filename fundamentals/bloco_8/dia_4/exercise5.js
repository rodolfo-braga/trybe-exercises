const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((sumAs, name) => {
    for (let index = 0; index < name.length; index += 1) {
      if (name[index].toLowerCase() === 'a') {
        sumAs += 1;
      };
    }
    return sumAs;
  }, 0)
}

// function containsA() {
//   return names.reduce((acc, curr) =>
//      acc + curr.split('').reduce((acumulator, current) => {
//         if (current === 'a' || current === 'A') return acumulator + 1;
//         return acumulator;
//      }, 0), 0);
// }

assert.deepStrictEqual(containsA(), 20);
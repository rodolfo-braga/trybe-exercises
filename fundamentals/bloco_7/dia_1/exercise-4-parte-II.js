const string = "Tryber x aqui!";

const newString = (stringName) => {
  const toArray = string.split(' ');

  for (let index = 0; index < toArray.length; index += 1) {
    if (toArray[index] === 'x') {
      toArray[index] = stringName;
    }
  }
  return toArray.join(' ');
} 

console.log(newString('Braga'));

const skills = ['Git', 'GitHub', 'HTML', 'CSS', 'JavaScript'];

const finalString = (previousString) => {
  const skillsSorted = skills.sort();

  return `${previousString} Minhas cinco principais habilidades são:
  - ${skillsSorted[0]};
  - ${skillsSorted[1]};
  - ${skillsSorted[2]};
  - ${skillsSorted[3]};
  - ${skillsSorted[4]}; #goTrybe.`
}

console.log(finalString(newString('Braga')));
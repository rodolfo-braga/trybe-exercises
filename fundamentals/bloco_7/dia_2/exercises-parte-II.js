const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Exercício 1
const addAttribute = (object, newKey, newValue) => object[newKey] = newValue;

addAttribute(lesson2, 'turno', 'manhã');


//Exercício 2
const listObjectKeys = (object) => Object.keys(object);


//Exercício 3
const showObjectSize = (object) => Object.entries(object).length;


//Exercício 4
const listObjectValues = (object) => Object.values(object);


//Exercício 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});


//Exercício 6
const numberOfStudents = (object) => {
  let totalStudents = 0;
  const objectKeys = Object.keys(object);

  objectKeys.forEach(key => {
    totalStudents += object[key].numeroEstudantes;
  });

  return totalStudents;
}

console.log(numberOfStudents(allLessons));


//Exercício 7
const getValueByNumber = (object, index) => {
  const getObjectValues = Object.values(object);
  return getObjectValues[index];
}

console.log(getValueByNumber(lesson1, 0));


//Exercício 8
const verifyPair = (object, key, value) => {
  let result = false;
  const getObjectEntries = Object.entries(object);

  getObjectEntries.forEach(entry => {
    if (entry[0] === key && entry[1] === value) {
      result = true;
    }
  });
  return result;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

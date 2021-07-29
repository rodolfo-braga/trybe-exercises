const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const showResult = (rightAnswers, studentAnswers, callback) => callback(rightAnswers, studentAnswers);

const checkAnswers = (rightAnswers, studentAnswers) => {
  let calculateGrade = 0;

  for (let index = 0; index < studentAnswers.length; index += 1) {
    const studentAnswer = studentAnswers[index];
    const rightAnswer = rightAnswers[index];

    if (studentAnswer === rightAnswer) {
      calculateGrade += 1;
    }
    if (studentAnswer !== rightAnswer && studentAnswer !== 'N.A') {
      calculateGrade -= 0.5;
    }
  }
  return `Nota final: ${calculateGrade}`;
}

console.log(showResult(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));

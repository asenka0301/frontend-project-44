import readlineSync from 'readline-sync';

const generateNum = (max) => Math.floor(Math.random() * max);

const generateOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[generateNum(operators.length)];
};

const getResult = (exp) => {
  const arr = exp.split(' ');
  switch (arr[1]) {
    case '+':
      return +arr[0] + +arr[2];
    case '-':
      return +arr[0] - +arr[2];
    case '*':
      return +arr[0] * +arr[2];
    default:
      return 'Wrong sign';
  }
};

const generateExpression = (max) => `${generateNum(max)} ${generateOperator()} ${generateNum(max)}`;

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('My I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  let isFailure = false;
  let result = `Congratulations, ${userName}!`;
  for (let i = 0; i < 3 && !isFailure; i += 1) {
    const calculationTask = generateExpression(10);
    console.log(`Question: ${calculationTask}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getResult(calculationTask);
    if (+userAnswer === correctAnswer) {
      console.log('Coorect');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Corect answer was ${correctAnswer}`);
      isFailure = true;
      result = `Let's try again, ${userName}`;
    }
  }
  console.log(result);
};



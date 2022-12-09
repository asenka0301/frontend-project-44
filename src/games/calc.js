import { gameFlow, generateNum, GAME_ROUNDS } from '../index.js';

const MAX_RANDOM_VALUE = 10;

const generateOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[generateNum(operators.length)];
};

const getCalculationResult = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'Error: incorrect operation';
  }
};

const gameTask = 'What is the result of the expression?';

export default () => {
  const questionsAndAnswersArr = [];
  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const operand1 = generateNum(MAX_RANDOM_VALUE);
    const operand2 = generateNum(MAX_RANDOM_VALUE);
    const operator = generateOperator();
    const question = `${operand1} ${operator} ${operand2}`;
    const answer = String(getCalculationResult(operand1, operand2, operator));
    questionsAndAnswersArr.push([question, answer]);
  }
  gameFlow(gameTask, questionsAndAnswersArr);
};

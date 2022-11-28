import { gameFlow, generateNum, GAME_ROUNDS } from '../index.js';

const LEFT_MAX_RANDOM_VALUE = 10;
const RIGHT_MAX_RANDOM_VALUE = 10;

const generateOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[generateNum(operators.length)];
};
const getResult = (expression) => {
  const arr = expression.split(' ');
  switch (arr[1]) {
    case '+':
      return Number(arr[0]) + Number(arr[2]);
    case '-':
      return Number(arr[0]) - Number(arr[2]);
    case '*':
      return Number(arr[0]) * Number(arr[2]);
    default:
      return 'Error: incorrect operation';
  }
};
const generateExpression = (maxLhs, maxRhs) => `${generateNum(maxLhs)} ${generateOperator()} ${generateNum(maxRhs)}`;

const gameTask = 'What is the result of the expression?';

export default () => {
  const questionsAndAnswersArr = [];
  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const question = generateExpression(LEFT_MAX_RANDOM_VALUE, RIGHT_MAX_RANDOM_VALUE);
    const answer = String(getResult(question));
    questionsAndAnswersArr.push([question, answer]);
  }
  gameFlow(gameTask, questionsAndAnswersArr);
};

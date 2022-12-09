import { gameFlow, GAME_ROUNDS } from '../index.js';
import getRandomInRange from '../math.js';

const RANGE_MIN_VALUE = 0;
const RANGE_MAX_VALUE = 10;

const generateOperator = () => {
  const operators = ['+', '-', '*'];
  const minOperatorIndex = 0;
  const maxOperatorIndex = operators.length - 1;
  const index = getRandomInRange(minOperatorIndex, maxOperatorIndex);
  return operators[index];
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
    const operand1 = getRandomInRange(RANGE_MIN_VALUE, RANGE_MAX_VALUE);
    const operand2 = getRandomInRange(RANGE_MIN_VALUE, RANGE_MAX_VALUE);
    const operator = generateOperator();
    const question = `${operand1} ${operator} ${operand2}`;
    const answer = String(getCalculationResult(operand1, operand2, operator));
    questionsAndAnswersArr.push([question, answer]);
  }
  gameFlow(gameTask, questionsAndAnswersArr);
};

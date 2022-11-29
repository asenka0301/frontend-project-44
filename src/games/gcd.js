import { gameFlow, generateNum, GAME_ROUNDS } from '../index.js';

const LEFT_MAX_RANDOM_VALUE = 20;
const RIGHT_MAX_RANDOM_VALUE = 20;

const gameTask = 'Find the greatest common divisor of given numbers';

const findGcd = (a, b) => {
  let number1 = a;
  let number2 = b;
  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
  }
  return number1;
};

export default () => {
  const questionsAndAnswersArr = [];
  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const leftNumber = generateNum(LEFT_MAX_RANDOM_VALUE);
    const rightNumber = generateNum(RIGHT_MAX_RANDOM_VALUE);
    const question = `${leftNumber} ${rightNumber}`;
    const answer = `${findGcd(leftNumber, rightNumber)}`;
    questionsAndAnswersArr.push([question, answer]);
  }
  gameFlow(gameTask, questionsAndAnswersArr);
};

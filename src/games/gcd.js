import { gameFlow, GAME_ROUNDS } from '../index.js';
import getRandomInRange from '../math.js';

const RANGE_MIN_VALUE = 1;
const RANGE_MAX_VALUE = 20;

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

const gameTask = 'Find the greatest common divisor of given numbers.';

export default () => {
  const questionsAndAnswersArr = [];
  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const number1 = getRandomInRange(RANGE_MIN_VALUE, RANGE_MAX_VALUE);
    const number2 = getRandomInRange(RANGE_MIN_VALUE, RANGE_MAX_VALUE);
    const question = `${number1} ${number2}`;
    const answer = `${findGcd(number1, number2)}`;
    questionsAndAnswersArr.push([question, answer]);
  }
  gameFlow(gameTask, questionsAndAnswersArr);
};

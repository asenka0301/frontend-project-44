import { gameFlow, generateNum, GAME_ROUNDS } from '../index.js';

const LEFT_MAX_RANDOM_VALUE = 20;
const RIGHT_MAX_RANDOM_VALUE = 20;

const gameTask = 'Find the greatest common divisor of given numbers';

const findGcd = (expression) => {
  const numbers = expression.split(' ');
  let a = Number(numbers[0]);
  let b = Number(numbers[1]);
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

export default () => {
  const questionsAndAnswersArr = [];
  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const question = `${generateNum(LEFT_MAX_RANDOM_VALUE)} ${generateNum(RIGHT_MAX_RANDOM_VALUE)}`;
    const answer = String(findGcd(question));
    questionsAndAnswersArr.push([question, answer]);
  }
  gameFlow(gameTask, questionsAndAnswersArr);
};

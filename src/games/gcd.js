import { gameFlow, generateNum, GAME_ROUNDS } from '../index.js';

const MAX_RANDOM_VALUE_NUM1 = 20;
const MAX_RANDOM_VALUE_NUM2 = 20;

const gameTask = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  let number1 = a;
  let number2 = b;

  if (number2 === 0) {
    return number1;
  }

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
    const number1 = generateNum(MAX_RANDOM_VALUE_NUM1) + 1;
    const number2 = generateNum(MAX_RANDOM_VALUE_NUM2);
    const question = `${number1} ${number2}`;
    const answer = `${findGcd(number1, number2)}`;
    questionsAndAnswersArr.push([question, answer]);
  }
  gameFlow(gameTask, questionsAndAnswersArr);
};

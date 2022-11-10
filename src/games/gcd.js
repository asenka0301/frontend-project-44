import { gameFlow, generateNum } from '../index.js';

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
  const arrayOfQA = [];
  for (let i = 0; i < 3; i += 1) {
    const question = `${generateNum(20)} ${generateNum(20)}`;
    const answer = String(findGcd(question));
    arrayOfQA.push([question, answer]);
  }
  gameFlow(gameTask, arrayOfQA);
};

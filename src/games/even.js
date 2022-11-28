import { gameFlow, generateNum } from '../index.js';

const checkIsEven = (num) => num % 2 === 0;

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const arrayOfQA = [];
  for (let i = 0; i < 3; i += 1) {
    const question = generateNum(100);
    const answer = checkIsEven(question) ? 'yes' : 'no';
    arrayOfQA.push([question, answer]);
  }
  gameFlow(gameTask, arrayOfQA);
};

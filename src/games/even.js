import { gameFlow, generateNum } from '../index.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const arrayOfQA = [];
  for (let i = 0; i < 3; i += 1) {
    const question = generateNum(100);
    const answer = isEven(question);
    arrayOfQA.push([question, answer]);
  }
  gameFlow(gameTask, arrayOfQA);
};

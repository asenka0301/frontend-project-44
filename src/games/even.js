import { gameFlow, generateNum, GAME_ROUNDS } from '../index.js';

const MAX_RANDOM_VALUE = 100;

const checkIsEven = (num) => num % 2 === 0;

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const questionsAndAnswersArr = [];
  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const question = generateNum(MAX_RANDOM_VALUE);
    const answer = checkIsEven(question) ? 'yes' : 'no';
    questionsAndAnswersArr.push([question, answer]);
  }
  gameFlow(gameTask, questionsAndAnswersArr);
};

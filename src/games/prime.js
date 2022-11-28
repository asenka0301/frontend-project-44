import { gameFlow, generateNum } from '../index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const questionsAndAnswersArr = [];
  for (let i = 0; i < 3; i += 1) {
    const question = 1 + generateNum(40);
    const answer = isPrime(question) ? 'yes' : 'no';
    questionsAndAnswersArr.push([question, answer]);
  }
  gameFlow(gameTask, questionsAndAnswersArr);
};

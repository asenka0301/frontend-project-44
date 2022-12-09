import { gameFlow, GAME_ROUNDS } from '../index.js';
import getRandomInRange from '../math.js';

const RANGE_MIN_VALUE = 2;
const RANGE_MAX_VALUE = 100;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export default () => {
  const questionsAndAnswersArr = [];
  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const question = getRandomInRange(RANGE_MIN_VALUE, RANGE_MAX_VALUE);
    const answer = isPrime(question) ? 'yes' : 'no';
    questionsAndAnswersArr.push([question, answer]);
  }
  gameFlow(gameTask, questionsAndAnswersArr);
};

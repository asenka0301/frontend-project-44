import { gameFlow, generateNum, GAME_ROUNDS } from '../index.js';

const gameTask = 'What number is missing in the progression?';

const PROGRESSION_LENGTH = 10;
const PROGRESSION_MAX_RANDON_VALUE = 20;
const STEP_MAX_RANDON_VALUE = 7;

const generateProgression = (firstElement, step) => {
  const numbers = [];
  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    const current = firstElement + (i * step);
    numbers.push(current);
  }
  return numbers;
};

export default () => {
  const questionsAndAnswersArr = [];
  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const firstElement = generateNum(PROGRESSION_MAX_RANDON_VALUE);
    const step = generateNum(STEP_MAX_RANDON_VALUE);
    const progression = generateProgression(firstElement, step);
    const index = generateNum(progression.length);
    const answer = String(progression[index]);
    progression[index] = '..';
    const question = progression.join(' ');
    questionsAndAnswersArr.push([question, answer]);
  }
  gameFlow(gameTask, questionsAndAnswersArr);
};

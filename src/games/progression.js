import { gameFlow, generateNum, GAME_ROUNDS } from '../index.js';

const gameTask = 'What number is missing in the progression?';

const PROGRESSION_LENGTH = 10;
const PROGRESSION_MAX_RANDON_VALUE = 20;
const STEP_MAX_RANDON_VALUE = 7;

const generateProgression = (progressioStart, progressionStep) => {
  const numbers = [];
  let start = 1 + generateNum(progressioStart);
  const step = 1 + generateNum(progressionStep);
  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    numbers.push(start + step);
    start += step;
  }
  return numbers;
};

export default () => {
  const questionsAndAnswersArr = [];
  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const progression = generateProgression(PROGRESSION_MAX_RANDON_VALUE, STEP_MAX_RANDON_VALUE);
    const index = generateNum(progression.length);
    const answer = String(progression[index]);
    progression[index] = '..';
    const question = progression.join(' ');
    questionsAndAnswersArr.push([question, answer]);
  }
  gameFlow(gameTask, questionsAndAnswersArr);
};

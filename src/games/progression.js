import { gameFlow, GAME_ROUNDS } from '../index.js';
import getRandomInRange from '../math.js';

const PROGRESSION_LENGTH = 10;
const FIRST_ELEMENT_RANGE_START = 0;
const FIRST_ELEMENT_RANGE_END = 30;
const STEP_RANGE_START = 1;
const STEP_RANGE_END = 10;

const generateProgression = (firstElement, step) => {
  const numbers = [];

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    const current = firstElement + (i * step);
    numbers.push(current);
  }

  return numbers;
};

const gameTask = 'What number is missing in the progression?';

export default () => {
  const questionsAndAnswersArr = [];
  for (let i = 0; i < GAME_ROUNDS; i += 1) {
    const firstElement = getRandomInRange(FIRST_ELEMENT_RANGE_START, FIRST_ELEMENT_RANGE_END);
    const progressionStep = getRandomInRange(STEP_RANGE_START, STEP_RANGE_END);
    const progression = generateProgression(firstElement, progressionStep);
    const minRandonIndex = 0;
    const maxRandomIndex = progression.length - 1;
    const index = getRandomInRange(minRandonIndex, maxRandomIndex);
    const answer = String(progression[index]);
    progression[index] = '..';
    const question = progression.join(' ');
    questionsAndAnswersArr.push([question, answer]);
  }
  gameFlow(gameTask, questionsAndAnswersArr);
};

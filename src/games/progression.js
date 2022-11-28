import { gameFlow, generateNum } from '../index.js';

const gameTask = 'What number is missing in the progression?';

const generateProgression = (progressioStart, progressionStep) => {
  const numbers = [];
  let start = 1 + generateNum(progressioStart);
  const step = 1 + generateNum(progressionStep);
  for (let i = 0; i < 10; i += 1) {
    numbers.push(start + step);
    start += step;
  }
  return numbers;
};

export default () => {
  const questionsAndAnswersArr = [];
  for (let i = 0; i < 3; i += 1) {
    const progression = generateProgression(20, 7);
    const index = generateNum(progression.length);
    const answer = String(progression[index]);
    progression[index] = '..';
    const question = progression.join(' ');
    questionsAndAnswersArr.push([question, answer]);
  }
  gameFlow(gameTask, questionsAndAnswersArr);
};

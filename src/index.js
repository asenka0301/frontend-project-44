import readlineSync from 'readline-sync';

export const GAME_ROUNDS = 3;

export const generateNum = (max) => Math.floor(Math.random() * max);

export const gameFlow = (task, QAArray) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('My I have your name? ');
  console.log(`Hello, ${userName}!\n${task}`);

  let isFailure = false;
  for (let i = 0; i < QAArray.length && !isFailure; i += 1) {
    const [question, answer] = QAArray[i];

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}`);
      isFailure = true;
    }
  }
  let finalMessage = `Congratulations, ${userName}!`;
  if (isFailure) {
    finalMessage = `Let's try again, ${userName}!`;
  }
  console.log(finalMessage);
};

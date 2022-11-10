import readlineSync from 'readline-sync';

export const generateNum = (max) => Math.floor(Math.random() * max);

export const gameFlow = (task, QAArray) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('My I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);

  let isFailure = false;
  for (let i = 0; i < QAArray.length && !isFailure; i += 1) {
    const [question, answer] = QAArray[i];

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Corect');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Corect answer was ${answer}`);
      isFailure = true;
    }
  }

  if (isFailure) {
    console.log(`Let's try again, ${userName}!`);
  } else {
    console.log(`Congratulations, ${userName}!`);
  }
};

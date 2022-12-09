import readlineSync from 'readline-sync';

export const GAME_ROUNDS = 3;

export const gameFlow = (task, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('My I have your name? ');
  console.log(`Hello, ${userName}!\n${task}`);

  for (let i = 0; i < gameData.length; i += 1) {
    const [question, answer] = gameData[i];

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  const congratMessage = `Congratulations, ${userName}!`;
  console.log(congratMessage);
};

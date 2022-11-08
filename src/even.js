import readlineSync from 'readline-sync';

const generateNum = () => Math.floor(Math.random() * 100);

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('My I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let isFailure = false;
  let result = `Congratulations, ${userName}!`;
  for (let i = 0; i < 3 && !isFailure; i += 1) {
    const randomNum = generateNum();
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(randomNum);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Corect answer was ${correctAnswer}`);
      isFailure = true;
      result = `Let's try again, ${userName}`;
    }
  }
  console.log(result);
};

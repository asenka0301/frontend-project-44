import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('My I have your name? ');
  console.log(`Hello, ${userName}!`);
};

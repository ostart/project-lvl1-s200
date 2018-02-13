import readlineSync from 'readline-sync';
import evenGame from './games/even';
import calcGame from './games/calc';
import gcdGame from './games/gcd';

function selectGameType(gameType) {
  switch (gameType) {
    case 'even':
      return evenGame;
    case 'calc':
      return calcGame;
    case 'gcd':
      return gcdGame;
    default:
      return evenGame;
  }
}

function selectDisclaimer(gameType) {
  switch (gameType) {
    case 'even':
      return 'Answer "yes" if number even otherwise answer "no".\n';
    case 'calc':
      return 'What is the result of the expression?\n';
    case 'gcd':
      return 'Find the greatest common divisor of given numbers.\n';
    default:
      return 'Answer "yes" if number even otherwise answer "no".\n';
  }
}

export default function brainGames(gameType) {
  const checkAnswer = selectGameType(gameType);

  console.log('Welcome to the Brain Games!');
  console.log(selectDisclaimer(gameType));

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const counter = 0;
  const successTry = 3;

  const isCorrect = checkAnswer(counter, successTry);

  if (isCorrect) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}


import readlineSync from 'readline-sync';
import evenGame from './games/even';
import calcGame from './games/calc';

function selectGameType(gameType) {
  switch (gameType) {
    case 'even':
      return evenGame;
    case 'calc':
      return calcGame;
    default:
      return evenGame;
  }
}

export default function brainGames(gameType) {
  const checkAnswer = selectGameType(gameType);

  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

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


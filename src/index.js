import readlineSync from 'readline-sync';

function iter(count, success, gameData) {
  if (count === success) {
    return true;
  }

  gameData.generateNew();
  console.log(gameData.getQuestion());
  const answer = readlineSync.question('Your answer: ');
  const result = gameData.calculateResult();

  if (answer === result.toString()) {
    console.log('Correct!');
    return iter(count + 1, success, gameData);
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);

  return false;
}

export default function GameProcess() {
  let name = '';
  const counter = 0;
  const successTry = 3;

  this.playGame = function playGame(disclaimer, gameData) {
    console.log('Welcome to the Brain Games!');
    console.log(disclaimer);
    console.log();
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!\n`);

    const isCorrect = iter(counter, successTry, gameData);

    if (isCorrect) {
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`Let's try again, ${name}!`);
    }
  };
}

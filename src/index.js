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

export default class GameProcess {
  constructor() {
    this.name = '';
    this.counter = 0;
    this.successTry = 3;
  }

  playGame(disclaimer, gameData) {
    console.log('Welcome to the Brain Games!');
    console.log(disclaimer);
    this.name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${this.name}!\n`);

    const isCorrect = iter(this.counter, this.successTry, gameData);

    if (isCorrect) {
      console.log(`Congratulations, ${this.name}!`);
    } else {
      console.log(`Let's try again, ${this.name}!`);
    }
  }
}

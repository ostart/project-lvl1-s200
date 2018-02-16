import readlineSync from 'readline-sync';

const iter = (count, success, gameData) => {
  if (count === success) {
    return true;
  }

  const data = gameData();
  console.log(data.Question);
  const answer = readlineSync.question('Your answer: ');
  const result = data.Result;

  if (answer === result.toString()) {
    console.log('Correct!');
    return iter(count + 1, success, gameData);
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);

  return false;
};

const playGame = (disclaimer, gameData) => {
  const counter = 0;
  const successTry = 3;

  console.log('Welcome to the Brain Games!');
  console.log(disclaimer);
  console.log();

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const isCorrect = iter(counter, successTry, gameData);

  if (isCorrect) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default playGame;


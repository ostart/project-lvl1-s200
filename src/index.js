import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

export default function brainGames() {
  console.log('Welcome to the Brain Games!\n');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
}

export function brainEven() {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const counter = 0;
  const successTry = 3;

  const checkAnswer = (count, success) => {
    if (count === success) {
      return true;
    }

    const number = getRandomInt(0, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if ((answer === 'yes' && number % 2 === 0) || (answer === 'no' && number % 2 === 1)) {
      console.log('Correct!');
      return checkAnswer(count + 1, success);
    }

    const was = (number % 2 === 0) ? 'yes' : 'no';
    console.log(`${answer} is wrong answer ;(. Correct answer was ${was}.`);

    return false;
  };

  const isCorrect = checkAnswer(counter, successTry);

  if (isCorrect) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}

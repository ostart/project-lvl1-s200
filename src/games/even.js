import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

export default function evenGame(count, success) {
  if (count === success) {
    return true;
  }

  const number = getRandomInt(0, 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  if ((answer === 'yes' && number % 2 === 0) || (answer === 'no' && number % 2 === 1)) {
    console.log('Correct!');
    return evenGame(count + 1, success);
  }

  const was = (number % 2 === 0) ? 'yes' : 'no';
  console.log(`${answer} is wrong answer ;(. Correct answer was ${was}.`);

  return false;
}

import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

export default function gcdGame(count, success) {
  if (count === success) {
    return true;
  }

  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);

  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  const result = (number1 < number2) ? gcd(number1, number2) : gcd(number2, number1);

  if (answer === result.toString()) {
    console.log('Correct!');
    return gcdGame(count + 1, success);
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);

  return false;
}

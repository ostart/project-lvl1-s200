

import readlineSync from 'readline-sync';

const arr = ['+', '-', '*'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

function getOperator(count) {
  return arr[count];
}

function calculateResult(num1, num2, oper) {
  switch (oper) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return -1;
  }
}

export default function calcGame(count, success) {
  if (count === success) {
    return true;
  }

  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const operator = getOperator(count);

  console.log(`Question: ${number1} ${operator} ${number2}`);
  const answer = readlineSync.question('Your answer: ');
  const result = calculateResult(number1, number2, operator);

  if (answer === result.toString()) {
    console.log('Correct!');
    return calcGame(count + 1, success);
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);

  return false;
}

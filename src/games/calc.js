import playGame from '..';

const arr = ['+', '-', '*'];

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const getOperator = count => arr[count];

const calcResult = (num1, num2, oper) => {
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
};

let pointer = 0;
let operator = getOperator(pointer);

const gameData = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  operator = getOperator(pointer);
  pointer += 1;

  const quest = `Question: ${number1} ${operator} ${number2}`;

  const result = calcResult(number1, number2, operator);

  return { Question: quest, Result: result };
};

const game = () => {
  const disclaimer = 'What is the result of the expression?';
  playGame(disclaimer, gameData);
};

export default game;

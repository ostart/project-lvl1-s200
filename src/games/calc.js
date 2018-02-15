const arr = ['+', '-', '*'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

function getOperator(count) {
  return arr[count];
}

function calcResult(num1, num2, oper) {
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

function GameData() {
  let number1 = 0;
  let number2 = 0;
  let pointer = 0;
  let operator = getOperator(pointer);

  this.generateNew = function generateNew() {
    number1 = getRandomInt(0, 100);
    number2 = getRandomInt(0, 100);
    operator = getOperator(pointer);
    pointer += 1;
  };

  this.getQuestion = function getQuestion() {
    return `Question: ${number1} ${operator} ${number2}`;
  };

  this.calculateResult = function calculateResult() {
    return calcResult(number1, number2, operator);
  };
}

export default function game(gameProc) {
  const disclaimer = 'What is the result of the expression?';
  const data = new GameData();
  gameProc.playGame(disclaimer, data);
}

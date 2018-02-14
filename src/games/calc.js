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

class GameData {
  constructor() {
    this.number1 = 0;
    this.number2 = 0;
    this.pointer = 0;
    this.operator = getOperator(this.pointer);
  }

  generateNew() {
    this.number1 = getRandomInt(0, 100);
    this.number2 = getRandomInt(0, 100);
    this.operator = getOperator(this.pointer);
    this.pointer += 1;
  }

  getQuestion() {
    return `Question: ${this.number1} ${this.operator} ${this.number2}`;
  }

  calculateResult() {
    return calculateResult(this.number1, this.number2, this.operator);
  }
}

export default function game(gameProc) {
  const disclaimer = 'What is the result of the expression?\n';
  const data = new GameData();
  gameProc.playGame(disclaimer, data);
}

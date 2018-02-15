function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function GameData() {
  let number1 = 0;
  let number2 = 0;

  this.generateNew = function generateNew() {
    number1 = getRandomInt(1, 100);
    number2 = getRandomInt(1, 100);
  };

  this.getQuestion = function getQuestion() {
    return `Question: ${number1} ${number2}`;
  };

  this.calculateResult = function calculateResult() {
    const n1 = number1;
    const n2 = number2;
    return (n1 < n2) ? gcd(n1, n2) : gcd(n2, n1);
  };
}

export default function game(gameProc) {
  const disclaimer = 'Find the greatest common divisor of given numbers.';
  const data = new GameData();
  gameProc.playGame(disclaimer, data);
}


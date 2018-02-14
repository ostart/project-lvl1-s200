function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

class GameData {
  constructor() {
    this.number1 = 0;
    this.number2 = 0;
  }

  generateNew() {
    this.number1 = getRandomInt(1, 100);
    this.number2 = getRandomInt(1, 100);
  }

  getQuestion() {
    return `Question: ${this.number1} ${this.number2}`;
  }

  calculateResult() {
    const n1 = this.number1;
    const n2 = this.number2;
    return (n1 < n2) ? gcd(n1, n2) : gcd(n2, n1);
  }
}

export default function game(gameProc) {
  const disclaimer = 'Find the greatest common divisor of given numbers.\n';
  const data = new GameData();
  gameProc.playGame(disclaimer, data);
}


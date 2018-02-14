function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

function balance(a) {
  const arr = a.split('');
  arr.sort();
  if (Number(arr[arr.length - 1]) - Number(arr[0]) <= 1) {
    return arr.join('');
  }

  arr[0] = (Number(arr[0]) + 1).toString();
  arr[arr.length - 1] = (Number(arr[arr.length - 1]) - 1).toString();
  return balance(arr.join(''));
}

class GameData {
  constructor() {
    this.number = 0;
  }

  generateNew() {
    this.number = getRandomInt(100, 9999);
  }

  getQuestion() {
    return `Question: ${this.number}`;
  }

  calculateResult() {
    return balance(this.number.toString());
  }
}

export default function game(gameProc) {
  const disclaimer = 'Balance the given number.\n';
  const data = new GameData();
  gameProc.playGame(disclaimer, data);
}

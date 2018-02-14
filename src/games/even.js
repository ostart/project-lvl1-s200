function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

class GameData {
  constructor() {
    this.number = 0;
  }

  generateNew() {
    this.number = getRandomInt(0, 100);
  }

  getQuestion() {
    return `Question: ${this.number}`;
  }

  calculateResult() {
    return (this.number % 2 === 0) ? 'yes' : 'no';
  }
}

export default function game(gameProc) {
  const disclaimer = 'Answer "yes" if number even otherwise answer "no".\n';
  const data = new GameData();
  gameProc.playGame(disclaimer, data);
}

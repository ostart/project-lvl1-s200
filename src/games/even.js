import GameProcess from '..';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

function GameData() {
  let number = 0;

  this.generateNew = function generateNew() {
    number = getRandomInt(0, 100);
  };

  this.getQuestion = function getQuestion() {
    return `Question: ${number}`;
  };

  this.calculateResult = function calculateResult() {
    return (number % 2 === 0) ? 'yes' : 'no';
  };
}

export default function game() {
  const disclaimer = 'Answer "yes" if number even otherwise answer "no".';
  const data = new GameData();
  const gameProc = new GameProcess();
  gameProc.playGame(disclaimer, data);
}

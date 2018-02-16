import playGame from '..';

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const generateProgression = (init, length, step) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(init + (i * step));
  }
  return arr;
};

const gameData = () => {
  const init = getRandomInt(0, 100);
  const step = getRandomInt(1, 10);
  const length = 10;
  const progression = generateProgression(init, length, step);
  const position = getRandomInt(0, length - 1);
  const number = progression[position];
  progression[position] = '..';

  const quest = `Question: ${progression}`;

  const result = number;

  return { Question: quest, Result: result };
};

const game = () => {
  const disclaimer = 'What number is missing in this progression?';
  playGame(disclaimer, gameData);
};

export default game;

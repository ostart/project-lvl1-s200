import playGame from '..';

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const gameData = () => {
  const number = getRandomInt(0, 100);

  const quest = () => `Question: ${number}`;

  const result = () => ((number % 2 === 0) ? 'yes' : 'no');

  return { Question: quest, Result: result };
};

const game = () => {
  const disclaimer = 'Answer "yes" if number even otherwise answer "no".';
  playGame(disclaimer, gameData);
};

export default game;

import playGame from '..';
import getRandomInt from '../math';

const gameData = () => {
  const number = getRandomInt(0, 100);

  const quest = `${number}`;

  const result = (number % 2 === 0) ? 'yes' : 'no';

  return { question: quest, answer: result };
};

const game = () => {
  const disclaimer = 'Answer "yes" if number is even otherwise answer "no".';
  playGame(disclaimer, gameData);
};

export default game;

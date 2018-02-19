import playGame from '..';
import getRandomInt from '../math';

const isPrime = (a) => {
  const iter = (number, base) => {
    if (base > number / 2) {
      return true;
    }
    if (number % base === 0) {
      return false;
    }
    return iter(number, base + 1);
  };

  return iter(a, 2);
};

const gameData = () => {
  const number = getRandomInt(2, 100);

  const quest = `${number}`;

  const result = isPrime(number) ? 'yes' : 'no';

  return { question: quest, answer: result };
};

const game = () => {
  const disclaimer = 'Is this number prime?';
  playGame(disclaimer, gameData);
};

export default game;

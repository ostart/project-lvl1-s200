import playGame from '..';

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

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

  const quest = `Is this number prime? ${number}`;

  const result = isPrime(number) ? 'yes' : 'no';

  return { Question: quest, Result: result };
};

const game = () => {
  const disclaimer = 'Answer "yes" if number is prime otherwise answer "no".';
  playGame(disclaimer, gameData);
};

export default game;

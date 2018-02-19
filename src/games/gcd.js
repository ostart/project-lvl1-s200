import playGame from '..';
import getRandomInt from '../math';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const gameData = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);

  const quest = `${number1} ${number2}`;

  const result = (number1 < number2) ? gcd(number1, number2) : gcd(number2, number1);

  return { question: quest, answer: result };
};

const game = () => {
  const disclaimer = 'Find the greatest common divisor of given numbers.';
  playGame(disclaimer, gameData);
};

export default game;


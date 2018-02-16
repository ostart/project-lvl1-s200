import playGame from '..';

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const balance = (a) => {
  const arr = a.split('');
  arr.sort();
  if (Number(arr[arr.length - 1]) - Number(arr[0]) <= 1) {
    return arr.join('');
  }

  arr[0] = (Number(arr[0]) + 1).toString();
  arr[arr.length - 1] = (Number(arr[arr.length - 1]) - 1).toString();
  return balance(arr.join(''));
};

const gameData = () => {
  const number = getRandomInt(100, 9999);

  const quest = () => `Question: ${number}`;

  const result = () => balance(number.toString());

  return { Question: quest, Result: result };
};

const game = () => {
  const disclaimer = 'Balance the given number.';
  playGame(disclaimer, gameData);
};

export default game;

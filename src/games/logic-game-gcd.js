import mainLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }

  return getGcd(number2, number1 % number2);
};

const logicGcd = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(getGcd(randomNumber1, randomNumber2));

  return [question, correctAnswer];
};

export default () => mainLogic(gameRule, logicGcd);

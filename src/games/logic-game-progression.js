import mainLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'What number is missing in the progression?';

const logicProgression = () => {
  const firstNumber = getRandomNumber(1, 99);
  const step = getRandomNumber(2, 10);
  const numbersLength = getRandomNumber(5, 10);

  const result = [];
  for (let i = firstNumber; i < firstNumber + (step * numbersLength); i += step) {
    result.push(`${i}`);
  }

  const correctAnswer = String(result[Math.floor(Math.random() * result.length)]);
  result[result.indexOf(correctAnswer)] = '..';
  const question = result.join(' ');

  return [question, correctAnswer];
};

export default () => mainLogic(gameRule, logicProgression);

import mainLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const logicEven = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => mainLogic(gameRule, logicEven);

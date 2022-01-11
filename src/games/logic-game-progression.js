import mainLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'What number is missing in the progression?';

const getProgression = (progressionStart, progressionStep, progressionLength) => {
  const result = [];
  const progressionLastNumber = progressionStart + (progressionStep * progressionLength);

  for (let i = progressionStart; i < progressionLastNumber; i += progressionStep) {
    result.push(`${i}`);
  }

  return result;
};

const logicProgression = () => {
  const firstNumber = getRandomNumber(1, 99);
  const step = getRandomNumber(2, 10);
  const numbersLength = getRandomNumber(5, 10);

  const progression = getProgression(firstNumber, step, numbersLength);

  const correctAnswer = String(progression[Math.floor(Math.random() * progression.length)]);
  progression[progression.indexOf(correctAnswer)] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => mainLogic(gameRule, logicProgression);

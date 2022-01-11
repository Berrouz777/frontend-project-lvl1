import mainLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const gameRule = 'What is the result of the expression?';
const operations = ['*', '-', '+'];

const equation = (number1, operator, number2) => {
  switch (operator) {
    case '*':
      return number1 * number2;
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    default:
      throw console.log('Unreachable operator!');
  }
};

const logicCalc = () => {
  const randomOperator = operations[getRandomNumber(0, operations.length - 1)];
  const randomNumber1 = getRandomNumber(0, 10);
  const randomNumber2 = getRandomNumber(0, 10);
  const correctAnswer = String(equation(randomNumber1, randomOperator, randomNumber2));
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

  return [question, correctAnswer];
};

export default () => mainLogic(gameRule, logicCalc);

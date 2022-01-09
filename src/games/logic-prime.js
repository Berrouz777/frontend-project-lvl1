import mainLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const GAME_RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divisors = 0;
  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      divisors += 1;
    }
  }

  return divisors === 0;
};

const logicPrime = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => mainLogic(GAME_RULE, logicPrime);

import mainLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const GAME_RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const logicPrime = () => {
  const question = getRandomNumber(0, 100);

  let divisors = 0;
  for (let i = question - 1; i > 1; i -= 1) {
    if (question % i === 0) {
      divisors += 1;
    }
  }

  const correctAnswer = divisors === 0 ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => mainLogic(GAME_RULE, logicPrime);

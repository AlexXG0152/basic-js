import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(num) {
  let numStrArr = Array.from(num.toString()).map(Number); // Number convert to String and after this create Array from strings.
  let result = numStrArr.reduce((sum, current) => sum + current, 0); // sunn all values from Array
  if (result > 9) {
    let finalResult = getSumOfDigits(result); // if result bigger than 9 => start function again 
    return Number(finalResult);
  }
  return Number(result); // if result less or equal than 9
}

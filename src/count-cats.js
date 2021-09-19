import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(backyard) {
  let sum = 0;
  let find = 0;
  for (let i = 0; i < backyard.length; i++) {
      find = backyard[i].filter(i => i == '^^').length;
      sum += find;
      }
  return sum;
}

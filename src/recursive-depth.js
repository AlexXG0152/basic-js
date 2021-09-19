import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  
    calculateDepth(arr) {
      
        let count = 0;
        let current = 0;
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] == 'object') { // check i type, if Array => recursive run method
                current = this.calculateDepth(arr[i]);
            if (current > count) { // counting with replace values
                count = current;
                }
            }
        }
        return count + 1; // +1 because start Array must be counted too
    }
}



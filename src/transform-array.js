import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) { // check arr type
      throw Error("\'arr\' parameter must be an instance of the Array!");
    }
  let newArray = [...arr]; // create new Array for transforming
  
  // first case ("--discard-next")
  if (newArray.includes("--discard-next")) {
      newArray.splice((newArray.indexOf("--discard-next")) + 1, 1); // discard-next value
      newArray.splice(newArray.indexOf("--discard-next"), 1); // delete control sequence
      if (newArray.includes("--discard-prev")) newArray.splice(newArray.indexOf("--discard-prev"), 1); // delete control sequence
      if (newArray.includes("--double-next")) newArray.splice(newArray.indexOf("--double-next"), 1); // delete control sequence
      if (newArray.includes("--double-prev")) newArray.splice(newArray.indexOf("--double-prev"), 1); // delete control sequence
  }
  
  // second case ("--double-next")
  if (newArray.includes("--double-next")) {
      if (newArray.indexOf("--double-next")+1 == newArray.length) newArray.splice((newArray.indexOf("--double-next")), 1); // double-next value
      else newArray.splice(newArray.indexOf("--double-next"), 1, newArray[newArray.indexOf("--double-next")+1]); //delete control sequence
  }
  
  // third case ("--double-prev")
  if (newArray.includes("--double-prev")) {
      if (newArray.indexOf("--double-prev") == 0) newArray.splice((newArray.indexOf("--double-prev")), 1); // check if not first
      else newArray.splice(newArray.indexOf("--double-prev"), 1, newArray[newArray.indexOf("--double-prev")-1]); // replace control sequence by value
  }
  
  // fourth case ("--discard-prev")
  if (newArray.includes("--discard-prev")) {
      if (newArray.indexOf("--discard-prev") == 0) newArray.splice((newArray.indexOf("--discard-prev")), 1); // --discard-prev value 
      else {
          newArray.splice((newArray.indexOf("--discard-prev")) - 1, 1); // discard-prev value
          newArray.splice(newArray.indexOf("--discard-prev"), 1); //delete control sequence
      }
  }
  return newArray
}

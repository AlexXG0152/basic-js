import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let separator = options.separator || '+';
  let addition = options.addition === null ? 'null' : options.addition === false ? 'false' : options.addition || "";
  let additionSeparator = options.additionSeparator || '|';
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes;
  console.log(str, addition, additionSeparator, repeatTimes, separator, additionRepeatTimes);

  let newStr = (`${str}${(addition + additionSeparator).repeat((additionRepeatTimes)-1)}${(addition)}${separator}`).repeat(repeatTimes)
  return newStr.slice(0, (newStr.length)-(separator).length);
}

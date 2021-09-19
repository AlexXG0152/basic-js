import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi (diskNumber, turnsSpeed) {
  let moves = (2 ** diskNumber) - 1; // minimum number of turns to solve the puzzle 
  let second = (3600 / turnsSpeed) * moves; // minimum number of seconds to solve at a given turnsSpeed, obtained from rounded down (floor) calculation result

  return {turns: moves, seconds: Math.floor(second)}
}

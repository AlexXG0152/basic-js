import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) {
      return false
  };

  let secretName = [];
  let filtered = members.filter(e => typeof e === 'string');
  for (let i = 0; i < filtered.length; i++) {
      secretName.push(String(filtered[i]).replace(/\s/g, '').slice(0,1).toUpperCase());
  }
  return secretName.sort().join('');
}

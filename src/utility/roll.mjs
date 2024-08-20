/**
 * Returns a random number from 0 to 99.
 *
 * @returns {number}
 */
export function rolld100() {
  return rolldN(100);
}

/**
 * Returns a random number from 0 to max-1.
 *
 * @param {number} max
 */
export function rolldN(max) {
  return Math.floor(Math.random() * max);
}

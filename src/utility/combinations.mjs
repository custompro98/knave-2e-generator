/**
 * Returns an array of all possible combinations of elements from two arrays (except the empty combination).
 *
 *
 * @param {Array<string>} arr1
 * @param {Array<string>} arr2
 * @param {{ shouldInsertSpace: boolean }} [options] @default { shouldInsertSpace: true }
 * @returns {Array<string>}
 */
export function combinations(
  arr1,
  arr2,
  { shouldInsertSpace } = { shouldInsertSpace: true },
) {
  const results = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (shouldInsertSpace) {
        results.push(`${arr1[i]} ${arr2[j]}`);
      } else {
        results.push(`${arr1[i]}${arr2[j]}`);
      }
    }
  }

  return results;
}

/**
 * Returns an array of all possible combinations of elements from two arrays (except the empty combination).
 *
 *
 * @param {Array<string>} arr1
 * @param {Array<string>} arr2
 * @param {Array<string>} arr3
 * @param {{ shouldInsertSpace: boolean }} [options] @default { shouldInsertSpace: true }
 * @returns {Array<string>}
 */
export function combinations3(
  arr1,
  arr2,
  arr3,
  { shouldInsertSpace } = { shouldInsertSpace: true },
) {
  const results = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        if (shouldInsertSpace) {
          results.push(`${arr1[i]} ${arr2[j]} ${arr3[k]}`);
        } else {
          results.push(`${arr1[i]}${arr2[j]} ${arr3[k]}`);
        }
      }
    }
  }

  return results;
}

/**
 * Returns an array of all possible combinations of elements from two arrays (except the empty combination).
 *
 *
 * @param {Array<string>} arr1
 * @param {Array<string>} arr2
 * @param {Array<string>} arr3
 * @param {Array<string>} arr4
 * @param {{ shouldInsertSpace: boolean }} [options] @default { shouldInsertSpace: true }
 * @returns {Array<string>}
 */
export function combinations4(
  arr1,
  arr2,
  arr3,
  arr4,
  { shouldInsertSpace } = { shouldInsertSpace: true },
) {
  const results = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      for (let k = 0; k < arr3.length; k++) {
        for (let l = 0; l < arr4.length; l++) {
          if (shouldInsertSpace) {
            results.push(`${arr1[i]} ${arr2[j]} ${arr3[k]}`);
          } else {
            results.push(`${arr1[i]}${arr2[j]} ${arr3[k]}`);
          }
        }
      }
    }
  }

  return results;
}

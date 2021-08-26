// Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

// Examples:

function rotateRightmostDigits(num, inputIndex) {
  let digits = String(num).split('')
  digits.push(digits.splice(digits.length - inputIndex, 1))
  return Number(digits.flat().join(''))
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

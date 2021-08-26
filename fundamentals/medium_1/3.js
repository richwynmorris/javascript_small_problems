// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Examples:


function maxRotation(num){
  let numLength = String(num).length
  
  for(let index = 0; numLength >= 0; numLength -= 1){
    num = rotateRightmostDigit(num, numLength)
    index += 1
  }
  
  return num
}


function rotateRightmostDigit(num, inputIndex) {
  let digits = String(num).split('')
  digits.push(digits.splice(digits.length - inputIndex, 1))
  return Number(digits.flat().join(''))
}


maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

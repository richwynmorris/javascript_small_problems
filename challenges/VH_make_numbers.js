// You are given an array representing the number of 0s, 1s, 2s, ..., 9s you have. The function will look like:

// can_build([#0s, #1s, #2s, ..., #9s], [num1, num2, ...])

// Write a function that returns true if you can build the following numbers using only the digits you have.
// Examples

// Algorithm:
// MAP each of the digits in the first array with the number of elements
// STRINGify the index
// REPEAT the indexString the number of times in the array.
// JOIN the array into a single string.
// SPLIT the string into single characters - firstDigits
// LOOP over the values in the second array.
// STRINGIFY the value.
// SPLIT the value into characters
// IF the character is included in firstDigits
// SPLICE the index position of character in firstDigits.
// ELSE return false
// RETURN true


function canBuild(firstArr, secondArr) {
  let firstDigits = firstArr.map((num, index) => String(index).repeat(num))
                            .join('')
                            .split('')
  
  for(let index = 0; index < secondArr.length; index += 1) {
    let currentNum = String(secondArr[index]).split('')
    
    for(let innerIndex = 0; innerIndex < currentNum.length; innerIndex += 1) {
      let num = currentNum[innerIndex]
      if(firstDigits.includes(num)) {
        let indexToRemove = firstDigits.indexOf(num)
        firstDigits.splice(indexToRemove, 1)
      } else {
        return false
      }
    }
  }
  
  return true
}

canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92]) //➞ true

// You have: one 1, two 2s, two 3s, three 4s, one 8 and one 9
// Using only these digits, you can build 123, 444, and 92

canBuild([10, 2, 3, 8, 5, 8, 5, 5, 3, 1], [11, 2, 22, 49, 444, 998, 87, 44]) //➞ false

canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], []) //➞ true

canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3]) //➞ false
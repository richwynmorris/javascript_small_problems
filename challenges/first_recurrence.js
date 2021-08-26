// Create a function that identifies the very first item that has recurred in the string argument passed. It returns the identified item with the index where it first appeared and the very next index where it resurfaced -- entirely as an object; or as an empty object if the passed argument is either null, undefined, empty string, or no recurring item exists.
// Examples

// INPUT: A string
// OUTPUT: An object containing letter and start and end index

// ALGORITHM
// SPLIT the string into letters
// ITERATE over EACH letter
// START a FOR loop
// IF the currentLetter === loopLetter
//     PUSH the letter and index positions to a result array
// ELSE continue 
// SORT the result array by smallest difference between indexes
// Select the smallest difference array and convert it into an object
//  RETURN the object

function recurIndex(string) {
  let result = {}
  
  if (string === null || string === undefined || string.length === 0) {
    return result
  }
  
  let letters = string.split('')
  
  letters.forEach((letter, oIndex) => {
    for(let iIndex = oIndex + 1; iIndex < letters.length; iIndex += 1) {
      let loopLetter = letters[iIndex]
      if (letter === loopLetter && !result[letter]) {
        result[letter] = [oIndex, iIndex]
        return
      }
    }
  })
  
  let entry = Object.entries(result).sort((a,b) => {
    a = a[1][1] - a[1][0]
    b = b[1][1] - b[1][0]
    return a - b
  }).shift()
  
  
  return !entry ? {} : Object.fromEntries([entry])
}

console.log(recurIndex("DXTDXTXDTXD")) //➞ {"D": [0, 3]}
// D first appeared at index 0, resurfaced at index 3
// T appeared and resurfaced at indices 3 and 6 but D completed the cycle first

console.log(recurIndex("YXZXYTUVXWV")) //➞ {"X": [1, 3]}

console.log(recurIndex("YZTTZMNERXE")) //➞ {"T": [2, 3]}

console.log(recurIndex("AREDCBSDERD")) //➞ {"D": [3, 7]}

console.log(recurIndex("")) //➞ {}

console.log(recurIndex('ABCDEFGHIJK')) //➞ {}
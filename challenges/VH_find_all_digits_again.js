// Taking each four digit number of an array in turn, return the number that you are on when all of the digits 0-9 have been discovered. If not all of the digits can be found, return "Missing digits!".
// Examples

// Count all the digits of 0-9 that span across all the number in the array. Once all the numbers have been discovered, reutrn the number that array is currently on. 
//  If all the digits haven't been found by the time the function has iterated through all the elements reutrn 'Missing digits!'


// Questions:
// What should I do it the array is empty? => return 'Missing digits!'
// Will any non digit numbers be included in the array - NaN, infinity, -infinity? => No


// ALGORITHM:
// DECLARE a variable called digits and assign an empty array
// FOR LOOP over each number in the given array.
// STRINGIFY number
// SPLIT number into digits.
// ITERATE through EACH digit
// IF digits DOESN'T include the digit
// PUSH the digit to digits.
// SORT digits
// JOIN digits.
// IF digits is EQUAL to '0123456789'
// RETURN number
// BREAK FOR LOOP
// RETURN 'Missing digits'


function findAllDigits(array) {
  let digits = []
  
  for(let index = 0; index < array.length; index += 1) {
    let strDigits = String(array[index]).split('')
    
    strDigits.forEach(digit => {
      digits.includes(digit)? null : digits.push(digit)
    })
    
    if (digits.sort().join('') === '0123456789') {
      return array[index]
    }
  }
  
  return 'Missing digits!'

}

console.log(findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]))//  ➞ 5057
// digits found:  517-  4-38  29-6  -0

console.log(findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381])) // ➞ 3370
// digits found:  5719  -2-8  3---  --6-  ----  --4-  ----  ---0

console.log(findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868])) // ➞ "Missing digits!"
// digits found:  48-3  --76  ---9  ----  -5--  ----  ----  2---
// 0 and 1 are missing
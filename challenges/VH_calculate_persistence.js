// The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

// The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

// Create two functions that take an integer as an argument and:

//     Return its additive persistence.
//     Return its multiplicative persistence.

// Examples: Additive Persistence


// Input number
// split into an array of stringNumbers
// use reduce to calculate total
// repeat the process
// increase a count for each iteration
// output number => count

// Algorithm
// declare a variable called 'count' with the value of 0.
// create a while loop => while the persistence is not a length of 1
//    - split persistence into string numbers in an array.
//    - iterate over the array using reduce and reassigne the value to persistece
//    - increase the count by 1
// return the count


function calcPersistence(pers, type = 'add') {
  let count = 0
  let digits = String(pers).split('')
  
  if (digits.length === 1) {
    return count
  }
  
  while(digits.length !== 1) {
    let result
    if (type === 'mult') {
      result = digits.reduce((accum, element) => accum * Number(element))
    } else {
      result = digits.reduce((accum, element) => accum + Number(element), 0)
    }
    
    digits = String(result).split('')
    count += 1
  }
  
  return count 
}

function additivePersistence(num) {
  return calcPersistence(num)
}

function multiplicativePersistence(num) {
  return calcPersistence(num, 'mult')
}

additivePersistence(1679583) // ➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

additivePersistence(123456) // ➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

additivePersistence(6) //➞ 0
// Because 6 is already a single-digit integer.

// Examples: Multiplicative Persistence

multiplicativePersistence(77) //➞ 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

multiplicativePersistence(123456) //➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

multiplicativePersistence(4) //➞ 0
// Because 4 is already a single-digit integer.


// What I learned
// * Don't try to do `if.. else` statements within a reduce block. It's complicated. Just perform one intention for each function, 
// don't try to make it do everything. Raise the level of abstraction if necessary, if it adds greater clarity to the code.
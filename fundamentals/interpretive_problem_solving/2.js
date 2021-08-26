// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

// Examples:

// Algorithm
// get the space result of dividing the odd number by 2
// prepend the * with the number of spaces using the division result.
// add two to the number of stars and reduce the spaces by 1.
// when the number of stars equals the number passed to the function
// reduce the stars by 2 and prepend the string with a space.
// continue to do this until the number of stars is less than one.

function diamond(numOfStars) {
  let numOfSpaces = Math.floor(numOfStars / 2)
  let result = []
  let stars = '*'
  
  while(stars.length <= numOfStars) {
    result.push(' '.repeat(numOfSpaces) + stars + '\n')
    numOfSpaces -= 1
    stars = stars.concat('**')
  }
  
  let descendingStars = numOfStars - 2
  numOfSpaces += 2
  
  while(descendingStars > 0) {
    stars = '*'.repeat(descendingStars)
    result.push(' '.repeat(numOfSpaces) + stars + '\n')
    numOfSpaces += 1
    descendingStars -= 2
  }
  
  console.log(result.join(''))
}

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
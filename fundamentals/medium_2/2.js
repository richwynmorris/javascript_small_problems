// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// Examples:

function triangle(...arg) {
  let sorted = arg.sort((a,b) => a - b)
  
  let validLengths = (sorted[0] + sorted[1]) > sorted[2] ? true : false
  let GreaterThan0 = sorted.every(num => num > 0)
  
  if (!validLengths || !GreaterThan0) {
    return 'invalid'
  }

  if (sorted.every((side, index) => side === sorted.slice().pop())) {
    return "equilateral"
  } else if (sorted.some((el, index) => el === sorted[index + 1])) {
    return "isosceles"
  } else {
    return "scalene"
  } 
}



console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
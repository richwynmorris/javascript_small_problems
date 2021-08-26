// Write a function that takes a non-empty string argument, and returns the middle character(s) 
// of the string. If the string has an odd length, you should return exactly one character. If 
// the string has an even length, you should return exactly two characters.

// Examples:

function centerOf(string) {
  let halfWay = Math.round((string.length / 2 - 1))
  if (string.length % 2 !== 0) {
    return string[halfWay]
  }
  else {
      return string.slice(halfWay, halfWay + 2)
  }
}


console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

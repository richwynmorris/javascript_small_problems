// We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.

// Write a function that returns true if the word is balanced, and false if it's not.
// Examples

// balanced("zips") ➞ true
// // "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true

// balanced("brake") ➞ false
// // "brake" = "br|ke" = 2+18|11+5 = 20|16 = false

// Notes

//     All words will be lowercase, and have a minimum of 2 characters.
//     Palindromic words will always be balanced.

function balanced(string) {
  let balancedString = string.length % 2 === 0; 
  
  let alph = ['a','b','c','d','e','f','g','h','i','j','k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z']
  
  if(balancedString) {
    var parts = [string.slice(0, string.length / 2).split(''), string.slice(string.length / 2).split('')]
  } else {
    parts = [string.slice(0, string.length / 2).split(''), string.slice(string.length / 2 + 1).split('')]
  }
  
  let result = parts.map(arr => {
                 return arr.reduce((accum, element) => accum + (alph.indexOf(element) + 1), 0)
                })
  
  return result[0] === result[1])
}

balanced("zips")// ➞ true
balanced("brake") // ➞ false

// .reduce((accum, element) => accum + (alph.indexOf(element) + 1), 0)
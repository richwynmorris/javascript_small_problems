// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

// Examples:

function repeater(string) {
  let newStr = ''
  string.split('').forEach(element => {
    newStr += element
    newStr += element
  });
  return newStr
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
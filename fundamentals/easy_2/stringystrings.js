// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.


function stringy(num) {
  let newStr = ''
  for(let index = 1; index < num + 1; index ++) {
    if (index % 2 !== 0) {
      newStr += '1'
    } else {
      newStr += '0'
    }
  }
  console.log(newStr)
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
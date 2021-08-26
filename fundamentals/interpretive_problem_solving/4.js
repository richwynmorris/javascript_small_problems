// Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.


// Algorithm
// create an string of the alaphabetical letter in uppercase * 2
// create an string of alphabetical letters in lowercase * 2
// split the input string in to letters
// iterate through the letters and map each with the following values
//   if the letter is an upcase, return the index position of the letters first occurence in the alphabet array. Add the second value to this index position and return the value in the in new calucated index.
//  else if - do the same as above but for lowercase letters
//  else return the letter
// join the split transformed letters together and return the result.

function caesarEncrypt(string, shiftedPosition) {
  let upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.repeat(2)
  let lowerCaseAlphabet = upperCaseAlphabet.toLowerCase()
  
  let result = string.split('').map(letter => {
    let indexOfLetter = 0
      if (!letter.match(/^[A-Za-z]/)) {
        return letter
      } else if (letter === letter.toUpperCase()) {
        indexOfLetter = upperCaseAlphabet.indexOf(letter)
        return upperCaseAlphabet[indexOfLetter + shiftedPosition]
      } else if (letter === letter.toLowerCase()) {
        indexOfLetter = lowerCaseAlphabet.indexOf(letter)
        return lowerCaseAlphabet[indexOfLetter + shiftedPosition]
      }
    });
  
  return result.join('')
}

// Examples:

// simple shift
// caesarEncrypt('A', 0);       // "A"
// caesarEncrypt('A', 3);       // "D"

// // // wrap around
//  caesarEncrypt('y', 5);       // "d"
//  caesarEncrypt('a', 47);      // "v"

// // // all letters
// caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// // // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
 caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
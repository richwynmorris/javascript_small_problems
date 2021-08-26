// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the string will always contain at least one word. 

// You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or 

// repeated spaces.

// Examples:

function swap(string) {
  let words = string.split(' ');
  let newWords = []

  words.forEach(function(word) {
    let letters = word.split('')
    let firstLetter = letters[0]
    let lastLetter = letters[letters.length - 1]
    letters[0] = lastLetter
    letters[letters.length -1] = firstLetter
    newWords.push(letters.join(''))
  });

  console.log(newWords.join(' '))
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

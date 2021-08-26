// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

// Problem
// Detect if a word can be spelled only using the two letter blocks given. Each block an only be used once.
// Each word must only contain one letter from each block. if both letters are included return false.


// Questions
// How many words will be passed to the function? (just one)
// What should I do if a different datatype is passed to the function? (return false)
// What should I return in the instance that there is an empty string? (return false)


// Input: String Word
// Data structures = letter blocks - array of string blocks, string of used letters,  
// Output: boolean - true or false


// Algorithm:
// check is the argument passed is a string
//  - if not, return false
// check if the string length is greater than 0
//  - if its not, return false
// split the string into letters
// make sure all letters in the string are capitalized, map
// declare a variable called usedWords and assign an empty string
// declare a variable called spellingBlocks and assign it with an array of strings, each a capitalized version of each block.
// iterate through each of the letters, use a for loop so the we can exit the loop with a return.
// with each letter, check is the letter is already in the usedWords variable
//   if it, return false
// check if the letter is included in any of the spellings blocks, 
//    if it isn't return false
// otherwise, iterate through each letter, and push the spelling block to the used letters  
// once the index count is equal to the number of letters, exit the loop and return true

function validWord(str) {
  if(typeof str !== 'string' || str.length === 0) {
    console.log(false)
    return
  }

  let letters = str.split('')
  letters = letters.map(letter => letter.toUpperCase())
  
  let usedBlocks = ''
  let spellingBlocks = ['BO', 'XK', 'DQ', 'C:P', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM']
  
  for(let index = 0; index < letters.length; index += 1) {
    let letter = letters[index]
    if (usedBlocks.includes(letter)) {
      return false
    } else if (!spellingBlocks.some(block => block.includes(letter))) {
      return false
    }
    usedBlocks += spellingBlocks.filter(block => block.includes(letter)).pop()
  }
  
  return true
}



// Happy Paths:
// all letters are unique
validWord('BATE') // => true
// contains two words from the same block
validWord('BOMP') // => false
// contains same letter twice:
validWord('BOMB') // => false
// case insensitive result
validWord('bate') // => true

//Edge Cases:
validWord(1234) // => false
validWord('') // => false

// Time: 33:34
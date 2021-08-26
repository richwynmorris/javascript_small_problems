// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.




// Examples:
function isBlockWord(word) {
  let blockWords = {
      B:'O',   
      X:'K',   
      D:'Q',
      C:'P',
      N:'A',
      G:'T',
      R:'E',
      F:'S',
      J:'W',   
      H:'U',
      V:'I',
      L:'Y',
      Z:'M',
  }
  
  let combos = []
  
  if (word.match(/[^a-zA-Z]/g) || word === '') {
    return false
  }
  
  let words = word.toUpperCase()
  let keys = Object.keys(blockWords)
  let values = Object.values(blockWords)
  
  for(let index = 0; index < words.length; index +=1) {
    let letter = words[index]
    if (keys.includes(letter) || values.includes(letter)) {
      combos.push(words[index])
      combos.push(keys[words[index]])
    } else {
      return false
    }
  }
  
  for(let index = 0; index < combos.length; index += 1) {
    let comWord = combos.join('')
    if (comWord.slice(index + 1).includes(comWord[index])) {
      return false
    }
  }
  
  return true
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BBUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('Bu..tc1h'))     //if it contain non alphabetical chars, do we ignore them  or return false?
console.log(isBlockWord(''))
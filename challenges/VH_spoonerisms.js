// A spoonerism is when the first letters / sounds of two words are transposed onto one another. Create a function that takes a two-word string and performs a spoonerism on the phrase.
// Examples

// Select the letters before the vowels in each word, swap them
// Algorithm:
// SEARCH each of the words for the index position of the first vowel.
// SPLIT each word into letters.
// SPLICE and capture the first letters before the first vowel
// SWAP the starts of each word. 
// CONCAT both words with space 
// RETURN result.


function spoonerise(words) {
  let firstWord = words.split(' ')[0].split('')
  let secondWord = words.split(' ')[1].split('')
  
  let index1 = firstWord.join('')
                        .search(/[aeiou]/)
  let index2 = secondWord.join('')
                         .search(/[aeiou]/)
  
  let firstLetters = firstWord.splice(0, index1)
  let secondLetters = secondWord.splice(0, index2)
  
  return secondLetters.join('') + firstWord.join('') + ' ' + firstLetters.join('') + secondWord.join('')
}

spoonerise("history lecture") //➞ "listory hecture"

spoonerise("loud noises") //➞ "noud loises"

spoonerise("chow mein") //➞ "mow chein"

spoonerise("edabit rules!") //➞ "redabit ules!"

// Notes

//     Only two words will be parsed into the function. Don't worry about handling more than two.
//     You won't always just have to swap the first letters, take care to notice which letters have been switched in the examples (notice the difference between vowel-starting and consonant-starting words).
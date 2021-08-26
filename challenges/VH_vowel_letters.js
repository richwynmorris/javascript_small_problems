// Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.
// Examples

function sameVowelGroup(array) {
  let vowelWords = array.map(word => {
    return word.split('').filter(letter => letter.match(/[aeiou]/))
  })
  
  let vowelLetters = vowelWords.map(letters => {
    return letters.filter((el,index) => index === letters.indexOf(el)).sort().join('')
  })
  
  let firstLetter = vowelLetters[0].split('').sort().join('')
  
  let result = array.filter((word, idx) => {
    if (vowelLetters[idx] === firstLetter) {
      return word
    }
  })
  return result
}

sameVowelGroup(["toe", "ocelot", "maniac"]) //➞ ["toe", "ocelot"]

sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"])/// ➞ ["many"]

sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) //➞ ["hoops", "bot", "bottom"]

// Notes

//     Words will contain only lowercase letters, and may contain whitespaces.
//     Frequency does not matter (e.g. if the first word is "loopy", then you can include words with any number of o's, so long as they only contain o's, and not any other vowels).
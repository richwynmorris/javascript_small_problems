// Algorithm:
// newWord array with the length of the word
// newWord index = 1
// push first char to empty array
// index starts at 1
// loop newWord array.length == word.length
// add 3
// if index > 10
//    index -= 10
//    push char at index to newWord index 
// else push chat at index of empty array


function clockwiseCipher(word) {
  let wordLetters = word.split('')
  let newWord = []
  let newWordIndex = 0
  
  for(let start = 0; newWord.join('').length !== word.length; start += 4) {
    if (start >= 10) {
      start -= 11
      newWord[newWordIndex] = wordLetters[start]
    } else {
      newWord[newWordIndex] = wordLetters[start]
    }
    newWordIndex += 1
    console.log(newWord)
  }
  
 

}


clockwiseCipher("Mubashir Hassan") //➞ "Ms ussahr nHaaib"

clockwiseCipher("Matt MacPherson") //➞ "M ParsoMc nhteat"

clockwiseCipher("Edabit is amazing") //➞ "Eisadng  tm    i   zbia a"
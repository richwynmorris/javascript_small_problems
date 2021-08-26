// Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.
// Examples


// ALGORITHM:
// SPLIT string into words.
// MAP each word as an array.
// ARRAY should contain the word without the number and the index position -1
// SORT array by array index position.
// MAP over array and replace array with word.
// JOIN with a space.

function rearrange(string) {
  if (string.split('').every(letter => letter === ' ')) {
    return ''
  }
  
  let words = string.split(' ')
  let wordsAndIndexs = words.map(word => {
    let index = Number(word.match(/\d/).pop())
    let cleanWord = word.replace(/\d/, '')
    return [cleanWord, index]
  })
  
  let result = wordsAndIndexs.sort((a,b) => a[1] - b[1])
                             .map(arr => arr[0])
                             .join(' ')
  
  return result
}

rearrange("is2 Thi1s T4est 3a") //➞ "This is a Test"

rearrange("4of Fo1r pe6ople g3ood th5e the2")// ➞ "For the good of the people"

rearrange(" ")// ➞ ""
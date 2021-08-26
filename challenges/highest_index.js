// Given a name, return the letter with the highest index in alphabetical order, with its corresponding index, in the form of a string. You are prohibited to use max(), nor reassign a value to the alphabet array.
// Examples


function alphabetIndex(alph, string) {
  let str = string.toLowerCase().split('')
  
  let strVals = str.map((char) => {
    let index = alph.indexOf(char) + 1
    return [char, index]
  }).sort(([,a], [,b]) => b - a)
  
  return strVals[0][1] + strVals[0][0]
}

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


alphabetIndex(alphabet, "Flavio") //➞ "22v"

alphabetIndex(alphabet, "Andrey") //➞ "25y"

alphabetIndex(alphabet, "Oscar") //➞ "19s"
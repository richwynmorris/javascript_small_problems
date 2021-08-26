// Problem
// Given an array of strings, either 'run' or 'jump', check if the second argument,
// a string of characters either '_' or , '|' are equivalent to the verbs in the array.
// 'run' is equal to '_'
// 'jump' is euqal to '|'
// if both the array of strings and characters are the equivalent return the string.
// if the verb in the array is a run, when it should be a jump, replace the jump with '/'
// if the verb in the array is a jump when it should be a run, replace the run with a 'x'.

// Questions:
// Will there always be an equal number of verbs in the array as there are characters in the string. => yes.
// Will the words always either be 'run' or 'jump' -> no - if there is a word that isn't accepted, return 'You can't **verb** in hurdles!'.
// Will the verbs in the array always be lowercase? -> No.
// Will the first argument always be an array ? - Yes
// WIll the second argument always be a string ? - Yes.
// Are there any other characters the string input other than '_' or'/'? - No.

// Algorithm:
// Iterate through the given array and convert all words to lowercase.
// Check if EVERY word is equal to either 'run' or 'jump', if it isn't, get the verb and return 'You can't **verb** hurdles'.
// declare a variable called result 
// SPLIT each of the chars in string//
// MAP over each character.
// if the word is 'run' and the character is '_', return the char.
// ELSE IF the word is 'jump and the character is '|' return the char
// ELSE IF the word is run and the char is '|', return '/'
// ELSE return 'X'
// assing the MAP the result variable.
// return the result variable. 


function runningAthlete(array, string) {
  array = array.map(word => word.toLowerCase())
  
  if (!array.every(word => word === 'run' || word === 'jump')) {
    let falseVerb = array.filter(word => word !== 'run' && word !== 'jump').pop()
    return `You can't ${falseVerb} in hurdles!`
  }
  
  let result  = string.split('').map((letter, index) => {
    if (array[index] === 'run' && letter === '|') {
      return '/'
    } else if (array[index] === 'jump' && letter === '_') {
      return 'X'
    } else {
      return letter
    }
   }).join('')
  
  return result
}



runningAthlete(["run", "jump", "run", "jump", "run"], "_|_|_") // ➞ "_|_|_"

runningAthlete(["RUN", "Jump", "run", "jump", "run"], "_|_|_") // ➞ "_|_|_"

runningAthlete(["run", "jump", "run", "run", "run"], "_|_|_") // ➞ "_|_/_"

runningAthlete(["jump", "jump", "jump", "jump", "jump"], "_|_|_") // ➞ "x|x|x"

runningAthlete(["run", "run", "run", "run", "run"], "_|_|_") // ➞ "_/_/_"

runningAthlete([], "") // ➞ ""

runningAthlete(["run", "run", "throw", "run", "run"], "_|_|_") // ➞ "You can't throw in hurdles!"


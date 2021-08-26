// Given a letter, created a function which returns the nearest vowel to the letter. If two vowels are equidistant to the given letter, return the earlier vowel.
// Examples

// Problem:
// Find the nearest vowel to the letter that is passed to the function. If both values have the same distance from one another, return the earlier vowel. 

// Questions:
// WIll it always be a string passed to the function? => yes
// Will the string ever be longer than 1 character long? => no
// Will is always be an alphabetical characters? => yes.
// NOTES: Do not wrap arround.

// INPUT: a one letter alphabetical string
// OUTPUT: the closes vowel position.

// DATA STRUCTURE:
// alphabet - string
// variables which reference the indexes of the vowels in the alphabet string
// variable which references the index of the given letter.

// ALGORITHM:
// DECLARE a variable called alphabet and assign it with a string that contains the alphabet.
// DECLARE a variable called vowels and assign an array with the vowels in
// MAP over the vowels array and return a subarray of the number with its index position in the alphabet
// MAP over the vowels the subtract the index position of the vowel from the string letter
// SORT the positions form b - a with b being the smallest index
// RETURN the the vowel in the subarray that appears fist in the sorted vowels.


function nearestVowel(letter) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let letterPosition = [letter, alphabet.indexOf(letter)]
  let vowels = ['a', 'e', 'i', 'o', 'u']
  vowels = vowels.map(vowel => [vowel, alphabet.indexOf(vowel)])
  let sortedVowels = vowels.map(vowel => {
    return [vowel[0], Math.abs(vowel[1] - letterPosition[1])]
  }).sort((a,b) => a[1] - b[1])
  
  return sortedVowels.shift()[0]
}


nearestVowel("b") // ➞ "a"

nearestVowel("s") // ➞ "u"

nearestVowel("c") //➞ "a"

nearestVowel("i") // ➞ "i"

// Notes

//     All letters will be given in lowercase.
//     There will be no alphabet wrapping involved, meaning the closest vowel to "z" should return "u", not "a".
// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. 

// This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. 

// f you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

// Examples:

function isPalindrome(string) {
  reverseString = string.split('').reverse().join('')
  return string === reverseString
}

function isRealPalindrome(string) {
  newStr = string.replaceAll(/[^a-z0-9]/ig, '')
  return isPalindrome(newStr.toLowerCase())
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
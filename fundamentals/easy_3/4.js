// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. 

// A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

// Examples:

// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true

function isPalindrome(string) {
  reverseString = string.split('').reverse().join('')
  return string === reverseString
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
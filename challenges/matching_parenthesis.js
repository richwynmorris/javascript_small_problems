// Write a function that takes a string as an argument and returns true if the string contains properly balanced parentheses, false otherwise. Parentheses are properly balanced only when '(' and ')' occur in matching pairs, with each pair starting with '('.
// Examples

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false

function isBalanced(string) {
  // checks if there are any brackets
  if (/\(|\)/.test(string) === false) {
    return true
  }
  
  // removes any unneeded characters
  let regex = /[^\(|\)]/g
  let brackets = string.replace(regex, '')
  
  // remove `()` from string on each iteration. If the string is left empty, all brackets are balanced and the loop returns true.
  
  //If there are no `()` left and still characters remaining, breaks the loop and returns false
  
  while(/\(\)/.test(brackets)) {
    brackets = brackets.replace(/\(\)/g, '')
    
    if (brackets.length === 0) {
      return true
    }
  }
  
  return false
}

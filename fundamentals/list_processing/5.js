// // Write a function that takes a string argument, and returns a list of all substrings that start from the 
// beginning of the string, ordered from shortest to longest.

// Examples:

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function leadingSubstrings(string) {
  return string.split('').map((element, index, array) => array.slice(0, index + 1).join(''))
} 
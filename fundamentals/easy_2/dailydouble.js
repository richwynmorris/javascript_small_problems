function crunch(string) {
  let newStr = ''
  let currentChar
  
  for(let index = 0; index < string.length; index ++) {
      if (string[index] !== currentChar) {
        currentChar = string[index]
        newStr += currentChar
      }
      else {
        continue
      }
  }
  console.log(newStr)
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
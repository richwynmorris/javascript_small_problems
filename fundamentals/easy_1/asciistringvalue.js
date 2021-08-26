function asciiValue(string) {
  let total = 0
  string.split('').forEach(function(letter) {
    total += letter.codePointAt();
  });
  console.log(total);
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0
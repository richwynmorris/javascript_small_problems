function doubleConsonants(string) {
  let newStr = ''

  string.split('').forEach(element => {
    if (element.match(/[aeiou|\W|0-9]/gi)) {
      newStr += element
    } else {
      for (let count = 0; count < 2; count++) {
        newStr += element
      }
    }
  });

  console.log(newStr)
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
function wordSizes(string) {
  string = string.replaceAll(/[^a-z ]/ig, '')
  let words = string.split(' ');
  let letterCount = {};

  if (string.length === 0) {
    return letterCount;
  };

  words.forEach(function(word) {
    numOfLetters = word.split('').length
    if (!letterCount[numOfLetters]) {
      letterCount[numOfLetters] = 1;
    } else {
      letterCount[numOfLetters] += 1;
    }
  });
  
  return letterCount;
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}
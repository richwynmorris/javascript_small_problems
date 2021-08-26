// Write a function that takes a string consisting of one or more space separated words, 
// and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

// Examples:


function wordSizes(string) {
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

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
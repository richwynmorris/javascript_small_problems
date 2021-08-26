// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

// NOTE: The largest possible featured number is 9876543201.

// Examples:

function featured(num) {
  if (num >= 9876543201) {
    return "Error: no next featured number.";
  }

  num += 1
  
  for(;;num += 1) {
    if (num % 7 === 0 && num % 2 !== 0 && num === uniqueCharsOnly(num)) {
      return num;
    }
  }
}

function uniqueCharsOnly(num) {
  let array = String(num).split('');
  let uniqueItems = array.filter((element, index, arr) => index === arr.indexOf(element));
  return Number(uniqueItems.join(''));
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
function century(year) {
  let decade = String(Math.ceil(year / 100))
  let lastTwoDigits = decade.slice(decade[decade.length - 3])
  let lastDigit = decade[decade.length - 1]
  
  let th = ['11', '12', '13'] 
  
  if (th.includes(lastTwoDigits)) {
    console.log(decade + 'th');
  } else if (lastDigit === '0') {
    console.log(decade + 'th');
  } else if (lastDigit === '1') {
    console.log(decade + 'st');
  } else if (lastDigit === '2') {
    console.log(decade + 'nd');
  } else if (lastDigit === '3') {
    console.log(decade + 'rd');
  } else {
    console.log(decade + 'th')
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
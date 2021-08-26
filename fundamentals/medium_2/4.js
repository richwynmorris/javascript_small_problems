// Write a function that takes a year as an argument, and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

// Examples:

function fridayThe13ths(year) {
  let months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
  let fridayCount = months.map(month => {
    let date = new Date (`${month} 13, ${year}`)
    return date.getDay()
  }).filter(number => number === 5)
  
  
  console.log(fridayCount.length)
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
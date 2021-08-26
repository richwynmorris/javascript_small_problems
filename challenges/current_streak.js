// Create a function that takes the current day (e.g. "2019-09-30"), an array of date objects and returns the "current streak" (i.e. number of consecutive days in a row).
// Examples

// ALGORITHM:
// DECLARE a variable called result and assign it with the value 0
// MAP each object with the last two characters of the date object
// SORT the array by dates in descending order
//       IF the first date isn't the same as the date given,
//           RETURN 0
//       LOOP through the dates,
//           IF the date at the current index is higher than the previous index by 1
//              REASSIGN the result value by 1
//           ELSE RETURN the result.
// RETURN the result


function currentStreak(date, dates) {
  let day = Number(date.slice(8))
  let result = 0
  dates = dates.map(obj => obj.date).sort((a,b) => b.localeCompare(a))
  
  for(let index = 0; index < dates.length - 1; index += 1) {
    if (Number(dates[index].slice(8)) === day) {
      result += 1
      day -= 1
    } else {
      return result
    }
  }
  return result
}

console.log(currentStreak("2019-09-23", [
  {
    "date": "2019-09-18"
  },
  {
    "date": "2019-09-19"
  },
  {
    "date": "2019-09-21"
  },
  {
    "date": "2019-09-22"
  },
  {
    "date": "2019-09-23"
  }
])) //  ➞ 3

console.log(currentStreak("2019-09-25", [
  {
    "date": "2019-09-16"
  },
  {
    "date": "2019-09-17"
  },
  {
    "date": "2019-09-21"
  },
  {
    "date": "2019-09-22"
  },
  {
    "date": "2019-09-23"
  }
])) // ➞ 0

// Notes

//     The array of dates is sorted chronologically.
//     The today parameter will always be greater than or equal to the last date in the array.
//     An empty array should return 0.
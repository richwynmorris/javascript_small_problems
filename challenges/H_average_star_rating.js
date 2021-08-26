// Given an array of five values, calculate the average star rating, rounded to two decimal places. The array contains user votes per star, so the first element [0] contains the number of 1-star ratings and the last element [4], the number of 5-star ratings.

// Return the average score in [brackets], followed by a space and asterisks' * to represent the star rating, rounded to the nearest whole star.

starRating([55, 67, 98, 115, 61]) //➞ "[3.15] ***"

function starRating(array) {
  let totalVotes = array.reduce((accum, element) => accum + element)
  let timesByStarAddTogether = array.map((element, index) => element * (index + 1)).reduce((accum, element) => accum + element)
  let result = (timesByStarAddTogether / totalVotes).toFixed(2)
  return `[${result}] ${'*'.repeat(Math.round(result))}`
}
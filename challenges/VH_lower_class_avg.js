// What is the percentage you can score on a test, which singlehandedly brings down the class average by 5%? Given an array of your classmates' scores, create a function that returns the answer. Round to the nearest percent.
// Examples

function takeDownAverage(scores) {
  let onlyNums = /[^0-9]/g
  let numOfScores = scores.length
  let listOfNums = scores.map(score => Number(score.replace(onlyNums, '')))
  let totalScore = listOfNums.reduce((accum, el) => accum + el) 
  let average = totalScore / numOfScores
  let lowerTarget = average - 5
  let lowMultiplied = (lowerTarget) * (numOfScores + 1)
  let result = lowMultiplied - totalScore
  
  console.log(`${Math.round(result)}%`)
  
}

takeDownAverage(["95%", "83%", "90%", "87%", "88%", "93%"]) //➞ "54%"

takeDownAverage(["10%"])// ➞ "0%"

takeDownAverage(["75%", "100%"])

takeDownAverage(["53%", "79%"]) //➞ "51%"
// Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

// Examples:

function sumSquareDifference(num) {
  let sumOfFirstPosInt = []
  let sumOfSquares = []
  
  for(let count = 1; count <= num; count += 1) {
    sumOfFirstPosInt.push(count)
    sumOfSquares.push(count**2)
  }
  
  sumOfFirstPosInt = sumOfFirstPosInt.reduce((accum, element) => accum + element) ** 2
  sumOfSquares = sumOfSquares.reduce((accum, element) => accum + element)
  
  console.log(sumOfFirstPosInt - sumOfSquares)
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
// For this practice problem, we'll represent rectangles as Arrays with two elements: a height and a width.

// Write a Function named totalArea that takes an Array of rectangles as an argument. The Function should return the total area covered by all the rectangles.


function totalArea (arr) {
  let result = 0
  arr.forEach(element => result += (element[0] * element[1]))
  return result
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141


// Now, write a second Function named totalSquareArea. This Function should calculate the total area of a set of rectangles, just like totalArea. However, it should only include squares in its calculations: it should ignore rectangles that aren't square.

function totalSquareArea (arr) {
  let result = 0
  arr.forEach(element => result += (checkForSquare(element[0], element[1])))
  return result
}

function checkForSquare(element1, element2) {
  return element1 === element2 ? element1 * element2 : 0
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121
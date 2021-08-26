// Standard competition ranking (also known as "1224" ranking) assigns the same rank to matching values. Rank numbers are increased each time, so ranks are sometimes skipped. If we have 5 scores (the highest score having a rank of 1):

// No matching values:

// Scores = [99, 98, 97, 96, 95]
// Rank = 1,  2,  3,  4,  5

// With matching values:

// Scores = [99, 98, 98, 96, 95]
// Rank = 1,  2,  2,  4,  5

// // Second and third scores are equal, so rank "3" is skipped.

// Given an object containing the names and scores of 5 competitors, and a competitor name, return the rank of that competitor after applying competition ranking.


// INPUT: A object containing competitors and string of the competitor enquired.
// OUTPUT: A number which represents the competitor's position in the group. 


// QUESTIONS
// Will it always be 5 competitors ? => Yes
// WIll they always be positive numbers as values? => yes
// What should I do if a name is passed in that isn't contained in the object?  => return '**Name** isn't a part of this competition'
// What should I do is the object is empty? => Return 'invalid Data'.
// Will the name passed to the function always be a string?
// Will the scores always be given as a number? => yes.
// What should I do in the isntance that there are more than 5 names in the object => ignore any additional names.


//ALGORITHM
// CAPTURE the objects keys
// ITERATE through the keys
// MAP each key into an array with the name and score
// SORT the array with by score of each comptitor [[Jess, 87], [Bruce. 87]
// MAP each sub array
//     IF the array in previous position has the same value as the current array, assign same position.
//     ELSE assign position and add 1 to position.
// CHECK object keys index position for name,
// RETURN the same index position from sub arrays.


function competitionRank(obj, name) {
  let names = Object.keys(obj)
  let data = names.map(name => [name, obj[name]])
                  .sort((a,b) => b[1] - a[1])
  let positionTracker = 1 
  let positions = []
  
  data.forEach((subArr, index) => {
    let info = [subArr[0], positionTracker]
    if (index === 0) {
      positions.push(info)
    } else if (data[index - 1][1] === subArr[1]) {
      positions.push([subArr[0], positions[positions.length - 1][1]])
    } else {
      positions.push(info)
    }
    positionTracker += 1
  })
  
  return positions.filter(subarr => subarr[0] === name).flat()[1]
}

// Examples

competitionRank({
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
  }, "Jane") // ➞ 4

competitionRank({
  Kate: 92,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 84
  }, "Bruce") // ➞ 3


console.log(competitionRank({Aria: 90, Brooke: 90, Olivia: 90, Eve: 74, Ellie: 87}, "Ellie"))

// Notes

// The highest score has a rank value of 1.
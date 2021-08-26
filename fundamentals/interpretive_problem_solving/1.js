// You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

// Examples:

function lightsOn(switches) {
  // ...
}

// Problem
// All lights are 'on' in the first iteration,
// Second iteration, lights that are at index position 2 are switched to opposite value,
// the index position will go up and this will happen for the given number of times.

// Data structure
// Input - Number = number of iterations and number of lights.
// Ouput - An array of switches that are still on.
// Object which has light index as key and value of true. 


// Algorithm
// create a new object which a number of keys that are passed into the function. The value is set to true.
// iterate over each key
// if it is modulo by the index position and equal to 0, switch it to the opposite value.
// after the number of positions has been fulfilled, return the number of keys that have a value still at the boolean'true'.

function lightsOn(num) {
  let lights = new Object()
  let result = []
  
  for(let index = 1; index <= num; index += 1) {
    lights[index] = true
  }
  
  let keys = Object.keys(lights)
  let values = Object.values(lights)
  
  for(let index = 2; index <= num; index += 1) {
    keys.forEach(key => {
      if(key % index === 0) {
        lights[key] = lights[key] === true ? false : true
      }
    })
  }
  
  keys.forEach(key => {
   if (lights[key] === true) {
      result.push(key)
   }
  })
  
  return result
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
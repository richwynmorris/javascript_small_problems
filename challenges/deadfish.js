// Description:

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

//     i increments the value (initially 0)
//     d decrements the value
//     s squares the value
//     o outputs the value into the return array

// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]


// Return the output array, and ignore all non-op characters
function parse(data) {
  const result = []
  let deadFish = 0
    
  data.split("").forEach(letter => {
    switch(letter) {
      case 'i':
        deadFish += 1
        break
      case 'd':
        deadFish -= 1
        break
      case 's':
        deadFish *= deadFish
        break
      case 'o':
        result.push(deadFish)
        break
    }
  })
  
  return result
}
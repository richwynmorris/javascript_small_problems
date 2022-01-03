// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus.

// DECLARE A VARIABLE passengers and SET to 0
// ITERATE over array of sub arrays
//    ITERATE over the numbers in each subaray,
//       IF the index == 0 
//           Add the element to passengers
//       ELSE 
//           substract it
// RETURN the number of passengers

var number = function(busStops){
  var passengers = 0
  
  busStops.forEach(stop => {
    stop.forEach((changes, index) => {
      if (index == 0) { 
        passengers += changes
      } else { 
        passengers -= changes 
      }
    })
  })
  
  return passengers
}
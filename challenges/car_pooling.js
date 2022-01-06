var carPooling = function(trips, capacity) {
  // Declare an object called tracker
  // Loop over each of the of the subarrays, 
  //   loop over the numbers betwen the start points and the endpoint,
  //   for each drop off point, add the current number of passengers if the drop off point doesn't exist
  //   if the drop off point does exist then add the additional passengers.
  // At the end of each loop, if any of the drop off points exceed the capacity, return false
  // return true
  
  let tracker = {}
  
  for(let trip of trips) {
    for(let doPoint = trip[1]; doPoint < trip[2]; doPoint++) {
      if(doPoint in tracker) {
        tracker[doPoint] += trip[0]
      } else {
        tracker[doPoint] = trip[0]
      }
      if (tracker[doPoint] > capacity) {
        return false
      }
    }
  }
  return true
};

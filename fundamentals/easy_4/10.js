// Write a function that counts the number of occurrences of each element in a given array. 

// Once counted, log each element alongside the number of occurrences.

// Example:


function countOccurrences(array) {
  let count = {}
  array.forEach(function(vehicle) {
    if (!count[vehicle]) {
      count[vehicle] = 1
    } else {
      count[vehicle] += 1
    }
  });

  Object.keys(count).forEach(function(key) {
    console.log(`${key} => ${count[key]}`)
  });
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

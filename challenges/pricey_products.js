// You will be given an object with various consumer products and their respective prices. Return a list of the products with a minimum price of 500 in descending order.
// Examples

function products(obj) {
  return Object.entries(obj)
               .sort(([,a],[,b]) => b - a)
               .map(subarr => {
                  if (subarr[1] < 500) {
                    return null
                  } else {
                    return subarr[0]
                  }
               })
              .filter(item => item !== null)
}

console.log(products({"Computer" : 600, "TV" : 800, "Radio" : 50})) // ➞ ["TV","Computer"]

products({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501}) // ➞ ["Bike1", "Bike3"]) 

products({"Loafers" : 50, "Vans" : 10, "Crocs" : 20}) // ➞ []
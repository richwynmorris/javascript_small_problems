// There are problems with this data, though, so we first have to clean it up before we can use it:

//     The band countries are wrong: all the bands should have 'Canada' as the country. // map
//     The band name should have all words capitalized. // map
//     Remove all dots from the band names. // p

// Write a function that can process the input band Array and return an Array that contains the fixed information:

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(obj => {
    capitalizeEachWord(obj),
    changeToCanada(obj),
    removeDotsFromName(obj)
    return obj
  })
  
}

function capitalizeEachWord(obj) {
   obj.name = obj.name
                 .split(' ')
                 .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

function changeToCanada(obj) {
  obj.country = 'Canada'
}

function removeDotsFromName(obj) {
  obj.name = obj.name.replace(/\./i, '')
}

console.log(processBands(bands));

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
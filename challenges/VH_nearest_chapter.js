// Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.
// Examples

// Problem
// Given an object, containing chapters and page numbers of those chapters, and a page number, work out which chapter the page is closest to. If there are two chapters that are the same distance from one another, return the one with the higher page number.

//Input: Obj and Num
//Output: Key of object that is closest to num.

// Questions
// Will the object values ever containg a non digit number - NaN, Infinity, -Inifinty - ? No.
// Will it always be an object and a number that are passed to the function ? - Yes.
// What should I do if the object is empty? - Return 'Please add a book',
// 


// Algorithm:
// Get all the values from the object.
// iterate with map over the values
// convert them to subtracted number
// loop through the transformed values and discover the position of the lowest value
// convert the keys into an object and return the key at the same imdex of the lowest value




function nearestChapter(book, page) {
  let bookVals = Object.values(book)
  let bookKeys = Object.keys(book)
  
  if(bookKeys.length === 0) {
    return 'Please add a book'
  }
  
  let lowestPage = bookVals.map(chaPage => {
    let result = chaPage - page
    if (result < 0) {
      return result * -1
    } else {
      return result
    }
  })
  
  let lowerThan = Infinity
  let indexNeeded = 0
  
  for(let index = 0; index < lowestPage.length; index += 1) {
     if (lowestPage[index] <= lowerThan) {
        lowerThan = lowestPage[index]
        indexNeeded = index
     } else {
        continue
     }
  }
  
   return bookKeys[indexNeeded]
}


// Happy Path:
// Closest to chapter, no equidistance
nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10) // ➞ "Chapter 2"

nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200)//  ➞ "The End?"


// Equidistance on either side the same, return the higher chapter
nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3) //➞ "Chapter 1b"


nearestChapter({}, 10) // 'Please add a book'

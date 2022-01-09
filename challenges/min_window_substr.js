/*
PROBLEM:
* 2 strings - Find the smallest substring in N that contains all the characters of K
* K's length is the minimum length that the string can be
* All of k's characters will exist somewhere within N
* Both strings are lowercase characters

Examples:
Input: ["ahffaksfajeeubsne", "jefaa"]
Output: aksfaje

Input: ["aaffhkksemckelloe", "fhea"]
Output: affhkkse


Data Structures:
Use a map to store the letters and there appearences
Use two pointers to capture a window of letters - the window must never be less than the length of k
                                                - to be a valid window, the substring must contain the letters and number of appearences


Algorithm:
* DECLARE a constant with the minimum window length - the length of k
* DECLARE a variable valid chars
*    ITERATE over k and assign the letters as keys and appearences as values

* Declare a pointer at index position 0 
* DECLARE a pointer at index position (length of k)

* LOOP - If the right is at the last position and the left is within the minWindowlength - break
* SLICE the window
* ITERATE OVER the window and check that all the required chars exist,
      - create a new object - currentWind
      - count the appearecnces
      - iterate over the validChatrs keys and check that all appearences match the same values
*     If they don't move the right pointer forward one position
*     If they do
          - check if the substring meets the minWindLength,
                - if it does - break the loop and return the substring
                - else push the substring to a results array move the left pointer forward one poition


* SORT the results array
* return the array element at position 0

*/    

function MinWindowSubstring(strArr) {
  let n = strArr[0]
  const minWindLength = strArr[1].length
  const validChars = {}
  let lPointer = 0
  let rPointer = minWindLength
  const resultArray = []

  strArr[1].split("").forEach(letter => {
    if (!validChars[letter]) { validChars[letter] = 1 }
    else { validChars[letter] += 1 }
  })


  while(rPointer <= n.length & lPointer != (n.length - minWindLength + 1)) {  
    currentWindow = n.slice(lPointer, rPointer).split("")
    let tally = {}

    currentWindow.forEach(letter => {
      if (Object.keys(validChars).includes(letter)) {
        if (!tally[letter]) { tally[letter] = 1 }
        else { tally[letter] += 1}
      }
    })

    if (Object.keys(validChars).every(letter => validChars[letter] <= tally[letter])) {
      if (currentWindow.length === minWindLength) {
        return currentWindow.join("")
      } else {
        resultArray.push(currentWindow.join(""))
        lPointer += 1
      }
    } else {
      rPointer += 1
    }
  }

  return resultArray.sort((a,b) => b.length - a.length).pop()
}

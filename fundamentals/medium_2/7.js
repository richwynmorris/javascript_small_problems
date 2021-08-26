function bubbleSort(arr) {
  let arrLength = arr.length
  let swapped = false
  
  while (true) {
    let swapped = false
    for(let index = 1; index < arrLength; index += 1) {
       if(arr[index - 1] > arr[index]) {
         let first = arr.slice()[index -1]
         let second = arr.slice()[index]
         arr[index - 1] = second
         arr[index] = first
         swapped = true
       }
   }
    if (swapped === false) {
     break
    }
  }
 
   console.log(arr)
   
 }
 
 
 const array1 = [5, 3];
 bubbleSort(array1);
 console.log(array1);    // [3, 5]
 
 const array2 = [6, 2, 7, 1, 4];
 bubbleSort(array2);
 console.log(array2);    // [1, 2, 4, 6, 7]
 
 const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
 bubbleSort(array3);
 console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
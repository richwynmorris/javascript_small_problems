

1) Create a makeCounterLogger function that takes a number as an argument and returns a function. When we invoke the returned function with a second number, it should count up or down from the first number to the second number, logging each number to the console:

```js
function makeCounterLogger(num) {
  let start = num
  return function(end) {
    if (end > start) {
      for(let count = start; count <= end; count += 1) {
        console.log(count)
      }
    } else {
      for(let count = start; count > end; count -= 1) {
        console.log(count)
      }
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8
countlog(2);
// 5
// 4
// 3
// 2
``` 

2) We'll build a simple todo list program using the techniques we've seen in this assignment. Write a makeList function that returns a new function that implements a todo list. The returned function should have the following behavior:

* When called with an argument that is not already on the list, it adds that argument to the list.
* When called with an argument that is already on the list, it removes the element from the list.
* When called without arguments, it logs all items on the list. If the list is empty, it logs an appropriate message.

```js
function makeList() {
  let items = []
  return function(args) {
    if (args === undefined && items.length === 0) {
      console.log('The list is empty.')
    } else if (args === undefined) {
      items.forEach(item => console.log(item))
    } else if (items.includes(args)) {
      items.splice(items.indexOf(args), 1)
      console.log(`${args} removed!`)
    } else {
      items.push(args)
      console.log(`${args} added!`)
    }
  }
}


let list = makeList();
list();
//The list is empty.
list('make breakfast');
// // make breakfast added!
list('read book');
// // read book added!
list();
// // make breakfast
// // read book
list('make breakfast');
// // make breakfast removed!
list();
// // read book
``` 
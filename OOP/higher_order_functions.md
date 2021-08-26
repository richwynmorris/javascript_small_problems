### Higher Order Functions

A higher order function can accept a function as an argument, return a function, or do both. Function, within the context of this topic, can be thought of as values. 


```js
function timed(func) {
  let start = new Date();
  func()
  let stop = new Date();
  console.log(`Took ${stop - start} ms to perform the function`);
}


function toOneMillion() {
  let counter = 0
  for(; counter !== 1000000000;) {
    counter += 1;
  }
}

timed(toOneMillion)
``` 
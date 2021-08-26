1) Write a JavaScript function named delayLog that loops through the numbers from 1 to 10, 
and logs each number after that number of seconds. 

```js
function delayLog() {
  for (let index = 1; index <= 10; index += 1) {
     setTimeout(() => {
       console.log(index)
     }, index * 1000)
  }
}

delayLog()
```

In what sequence will the JavaScript runtime run the following lines of code? Number them from 1-8 to show the order of execution.

```js
setTimeout(() => {     // 1
  console.log('Once'); // 5
}, 1000);

setTimeout(() => {    // 2
  console.log('upon'); // 7
}, 3000);

setTimeout(() => {    // 3
  console.log('a'); // 6
}, 2000);

setTimeout(() => {    // 4
  console.log('time'); // 8
}, 4000);
```

In what sequence does the JavaScript runtime run the functions q, d, n, z, s, f, and g in the following code?

```js
setTimeout(() => {
  setTimeout(() => {
    q();
  }, 15); // 7

  d(); // 3

  setTimeout(() => {
    n();
  }, 5); // 5

  z(); // 4
}, 10);

setTimeout(() => {
  s();
}, 20); // 6

setTimeout(() => {
  f(); // 2
});

g(); // 1 
```

### Write a function named afterNSeconds that takes two arguments: a callback and a time duration in seconds. The function should wait for the indicated period, then invoke the callback function.

```js
function afterNSeconds(callback, seconds) {
  setTimeout(callback, seconds * 1000)
}

afterNSeconds(() => {
  console.log('hello world')
}, 5)
```

### Write a function named startCounting that logs a number to the console every second, starting with 1. Each number should be one greater than the previous number.

```js
let id;

function startCounting() {
  let count = 1
  id = setInterval(() => {
    console.log(count)
    count += 1
  }, 1000)
}

function stopCounting() {
  clearInterval(id);
}
```

### write some JavaScript code to move the red X to the last position in the document that the user clicked. 

```js
document.addEventListener('click', event => {
  let x = document.getElementsByClassName('x')[0]

  x.style.left = String(event.clientX) + 'px'
  x.style.top = String(event.clientY) + 'px'
})
```

### Update your solution to the previous problem to make the red X move as you move the mouse around the document instead of depending on clicks.

```js
document.addEventListener('mousemove', event => {
  let x = document.getElementsByClassName('x')[0]

  x.style.left = String(event.clientX) + 'px'
  x.style.top = String(event.clientY) + 'px'
})
```


### Update your solution to the previous problem to change the color of the red X to blue when the user presses the b key, green in response to the g key, and red in response to r. The X should continue to follow the mouse around.

```js
document.addEventListener('mousemove', event => {
  let x = document.getElementsByClassName('x')[0]

  x.style.left = String(event.clientX) + 'px'
  x.style.top = String(event.clientY) + 'px'
})

document.addEventListener('keydown', event => {
  let xHoz = document.querySelector('.x .horizontal')
  let xVert = document.querySelector('.x .vertical')
  if (event.keyCode === 66) {
    xHoz.style.background = 'blue'
    xVert.style.background = 'blue'
  } else if (event.keyCode === 71) {
    xHoz.style.background = 'green'
    xVert.style.background = 'green'
  } else if (event.keyCode === 82) {
    xHoz.style.background = 'red'
    xVert.style.background = 'red'
  }
})
```

### Using the following code, write some JavaScript to add a character counter that updates as the user types.

```js
document.addEventListener('DOMContentLoaded', () => {
  let composer = document.querySelector('.composer');
  let textarea = composer.querySelector('textarea');

  function countCharacters() {
    let characterCount = (140 - Number(textarea.value.length))
    let counter = document.querySelector('.counter')
    let invalidInput = characterCount < 0
    
    textarea.classList.toggle('invalid', invalidInput);

    counter.textContent = `${characterCount} characters        
    remaining.`
  }

  textarea.addEventListener('keyup', countCharacters)
  
  countCharacters()
})
```

### Reverse the behavior of scenario 3. Have the alert box of the div#elem1 element show up first.


```js
let elem1 = document.querySelector('#elem1');
let elem4 = document.querySelector('#elem4');

elem1.addEventListener('click', event => alert(event.currentTarget.id));
elem4.addEventListener('click', event => alert(event.currentTarget.id), false);
```
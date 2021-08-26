// Write a randomizer function that accepts n callbacks and calls each callback at some random point in time 
// between now and 2 * n seconds from now. For instance, if the caller provides 5 callbacks, the function 
// should run them all sometime within 10 seconds.

// While running, randomizer should log the elapsed time every second: 1, 2, 3, ..., 2 * n.

// Write a randomizer function that accepts n callbacks and calls each callback at some random point in time 
// between now and 2 * n seconds from now. For instance, if the caller provides 5 callbacks, the function 
// should run them all sometime within 10 seconds.

// While running, randomizer should log the elapsed time every second: 1, 2, 3, ..., 2 * n.
function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  let randomOrder = []
  
  let seconds = callbacks.length * 2
  let count = 0
  
  function getRandomNumber(end) {
    return Math.floor(Math.random() * end) + 1
  }

  while (randomOrder.length < callbacks.length) {
    let randomTime = getRandomNumber(seconds - 1)
    
    if (!randomOrder.includes(randomTime)) {
       randomOrder.push(randomTime) 
    }
  }
  
  randomOrder.sort()
  
  let timer = setInterval(() => {
    count += 1
    console.log(count)
    if (count === seconds) {
      clearInterval(timer)
    } else if (count === randomOrder[0]) {
      callbacks.sort(() => Math.random() * 0.5).pop()()
      randomOrder.shift()
    }
  }, 1000)
}

randomizer(callback1, callback2, callback3);

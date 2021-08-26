let divRed = document.querySelector('#red')
let divBlue = document.querySelector('#blue')
let divOrange = document.querySelector('#orange')
let divGreen = document.querySelector('#green')

let tracker = (() => {
  let record = [];
  
  return {
    list() {
      return record.slice()
    },

    add(event) {
      record.push(event)
    },

    elements() {
      return this.list()
    },

    clear() {
      record = []
      return record.length
    }
  }
})()

function track(callback) {
  return event => {
    tracker.add(event.target)
    callback(event)
  }
}

divRed.addEventListener('click', track(event => {
  console.log(event.currentTarget)
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'green';
}));

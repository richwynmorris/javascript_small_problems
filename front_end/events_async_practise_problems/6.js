let droptable = document.querySelector('#animal-classifications')
let droptable2 = document.querySelector('#animals')
let button = document.querySelector('#clear')

let classifications = {
  vertebrate: ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  warmBlooded: ['Bear', 'Whale', 'Ostrich'],
  coldBlooded: ['Salmon', 'Turtle'],
  mammal: ['Bear', 'Whale'],
  bird: ['Ostrich']
}

let animals = {
  bear: ['Vertebrate', 'Warm-blooded', 'Mammal'],
  turtle: ['Vertebrate', 'Cold-blooded'],
  whale: ['Vertebrate', 'Warm-blooded', 'Mammal'],
  salmon: ['Vertebrate', 'Cold-blooded'],
  ostrich: ['Vertebrate', 'Warm-blooded', 'Bird']
}

droptable.addEventListener('change', event => {
  unhideAll()

  let keyToFind;
  let targetVal = event.currentTarget.value

  if (targetVal === 'Classifications') {
    return undefined
  }

  if (targetVal === 'Vertebrate') {
    keyToFind = 'vertebrate'
  } else if (targetVal === 'Warm-blooded') {
    keyToFind = 'warmBlooded'
  } else if (targetVal === 'Cold-blooded') {
    keyToFind = 'coldBlooded'
  } else if (targetVal === 'Mammal') {
     keyToFind = 'mammal'
  } else if (targetVal === 'Bird') {
    keyToFind = 'bird'
}

  Array.prototype.slice.call(droptable2.children).forEach(animal => {
    if (!classifications[keyToFind].includes(animal.value)) {
      animal.hidden = true
    }
  })
})

droptable2.addEventListener('change', event => {
  unhideAll()

  let targetVal = event.currentTarget.value
  let keyToFind = targetVal.toLowerCase()

  if (targetVal === 'Animals') {
    return undefined
  }

  Array.prototype.slice.call(droptable.children).forEach(classification => {
    if (!animals[keyToFind].includes(classification.value)) {
      classification.hidden = true
    }
  })
})

button.addEventListener('click', event => {
  unhideAll()
})


function unhideAll() {
  Array.prototype.slice.call(droptable.children).forEach(classification => {
    classification.hidden = false
  })

  Array.prototype.slice.call(droptable2.children).forEach(animal => {
    animal.hidden = false
  })
} 
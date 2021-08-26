function makeBold(element, callback) {
  callback(element)
  element.style.fontWeight = 'bold'
}

// further exploration

function makeBold(element) {
  element.style.fontWeight = 'bold'

  let bolded = new CustomEvent('bolded')

  element.dispatchEvent(bolded)
}

function addToBold(element, callback) {
  element.addEventListener('bolded', callback(element))
  makeBold(element)
}
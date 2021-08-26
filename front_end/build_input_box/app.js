document.addEventListener('DOMContentLoaded', event => {
  let timer;
  let textField = document.querySelector('.text-field')
  let content = document.querySelector('div .content')

  textField.addEventListener('click', event => {
    event.stopPropagation()
    textField.classList.add('focused')

    if (timer === undefined) {
      timer = setInterval(() => {
        textField.classList.toggle('cursor')
      }, 500);
    }
  })

  document.addEventListener('keydown', event => {
    if ([].slice.call(textField.classList).includes('focused')) {
      if (event.key === 'Backspace') {
        content.textContent = String(content.textContent).slice(0, content.textContent.length - 1)
      } else if (event.key.length === 1 ){
        content.textContent += String(event.key)
      }
    }
    
  })

  document.addEventListener('click', event => {
    textField.classList.remove('focused')
    textField.classList.remove('cursor')
    clearTimeout(timer)
  })
})


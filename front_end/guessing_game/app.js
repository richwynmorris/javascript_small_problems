document.addEventListener('DOMContentLoaded', element => {
  let form = document.querySelector('form')
  let newGameButton = document.querySelector('a')
  let text = document.querySelector('p')
  let input = document.querySelector('#guess')
  let submitButton = document.querySelector('fieldset').children[1]
  
  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1
  }

  function validInput(input) {
    return input >= 1 && input <= 100 
  }

  function resetSubmitButton() {
    submitButton.disabled = false
    submitButton.style = 'initial'
    input.value = ''
  }


  function newGame() {
    resetSubmitButton()
    text.textContent = 'Guess a number from 1 to 100.'
    let answer = getRandomNumber()
    let count = 0

    form.addEventListener('submit', event => {
      function disableSubmitButton() {
        submitButton.disabled = true
        submitButton.style.background = '#780E24';
      }

      event.preventDefault()

      let message;
      let guess = parseInt(input.value, 10)

      if (validInput(guess)) {   
        if (answer < guess) {
          message = `My number is lower than ${guess}`
          count += 1
        } else if (answer > guess) {
          message = `My number is higher than ${guess}`
          count += 1
        } else if (answer === guess) {
          message = `You got it! It took you ${count} guesses!`
          disableSubmitButton()
        }
        text.textContent = message;
      } else {
         alert('Invalid input. Choose a number between 1 and 100 inclusive.')
      }
    })

    newGameButton.addEventListener('click', event => {
      newGame()
    })


  }

  newGame()
})
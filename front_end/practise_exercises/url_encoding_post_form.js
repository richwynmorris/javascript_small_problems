let form = document.getElementById('form')

form.addEventListener('submit', e => {
  e.preventDefault()

  let request = new XMLHttpRequest()
  request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books')
  let data = new FormData(form)

  request.addEventListener('load', e => {
    if (request.status === 201) {
      console.log(`The following book was added to the colleciton: ${request.response}`)
      request.send(data)
    } else {
      console.log('Encountered an error. Please try again later.')
    }
  })
})


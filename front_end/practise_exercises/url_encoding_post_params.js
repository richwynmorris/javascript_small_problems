let request = new XMLHttpRequest()

request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books')
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

let data = encodeURI('title=Effective Javascript&author=David Herman')

request.addEventListener('load', e => {
  if (request.status === 201) {
    console.log(`The following book had been added to the collection ${request.response}`)
    request.send(data)
  } else {
    console.log(`The book was not added to the system.`)
  }  
})



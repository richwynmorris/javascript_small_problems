//1:

let request = new XMLHttpRequest()

request.open('GET', 'https://api.github.com/repos/rails/rails')

request.addEventListener('load', e => {
  let data = JSON.parse(request.response)
  console.log(request.status)
  console.log(data.open_issues)
})

request.send()


// 2
let request = new XMLHttpRequest()

request.open('GET',"hts://api.github.com/repos/rails/rails")

request.addEventListener('load', e => {
  let data = JSON.parse(request.response)
  console.log(request.status)
  console.log(data.open_issues)
})

request.addEventListener('error', e => {
  console.log('The request could not be completed!')
})

request.send()
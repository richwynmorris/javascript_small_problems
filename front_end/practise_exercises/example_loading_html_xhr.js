document.addEventListener('DOMContentLoaded', () => {
  let store = document.getElementById('store');

  let request = new XMLHttpRequest()

  request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com/products');
  request.addEventListener('load', event => store.innerHTML = request.response)
  request.send()

  store.addEventListener('click', e => {
    e.preventDefault() // prevent the default action when link is clicked.
    let element = e.target

    if (element.tagName !== 'A') {
      return
    }

    let request = new XMLHttpRequest()
    request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com' + element.getAttribute('href'))
    request.addEventListener('load', event => store.innerHTML = request.response)
    request.send()
  })

  store.addEventListener('submit', e => {
    e.preventDefault()
    let form = e.target
    let data = new FormData(form)
    let request = new XMLHttpRequest()

    request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com' + form.getAttribute('action'));
    request.addEventListener('load', e => store.innerHTML = request.response)
    request.setRequestHeader('Authoriztion', 'token AUTH_TOKEN')
    request.send(data)
  })
})

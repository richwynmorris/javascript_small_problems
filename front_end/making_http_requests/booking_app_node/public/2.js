document.addEventListener('DOMContentLoaded', e => {
  let form = document.querySelector('#add_staff')

  form.addEventListener('submit', e => {
    e.preventDefault()

    let request = new XMLHttpRequest()
    let data = new FormData(form)

    request.open('POST', 'http://localhost:3000' + `${form.getAttribute('action')}`)
    request.addEventListener('load', e => {
      if (request.status === 201) {
        alert(`Successfully created staff with id: ${request.response}`)
      } else {
        alert(`${request.response}`)
      }
    })
    request.send(data)
  })
})
document.addEventListener('DOMContentLoaded', e => {
  let addScheduleButton = document.querySelector('#schedule_button')
  let staffSelector = document.querySelector('select')
  let submitButton = document.querySelector('#submit_button')
  let form = document.querySelector('form')

  
  let scheduleCount = 2

  // ++ Add staff id options.
  let request = new XMLHttpRequest()
  request.open('GET', 'http://localhost:3000/api/staff_members')
  request.responseType = 'json'

  request.addEventListener('load', e => {
    let data = request.response
    
    data.forEach(staff => {
      let child = document.createElement('option')
      child.value = staff.id
      child.textContent = staff.name
      staffSelector.appendChild(child)
    })
  })

  request.send()

  // ++ Append a new schedule when schedule button clicked.
  addScheduleButton.addEventListener('click', e => {
    e.preventDefault()

    let newForm = form.cloneNode(true)
    newForm.reset()
    newForm.querySelector('legend').textContent = `Schedule ${scheduleCount}`

    submitButton.insertAdjacentElement('beforebegin', newForm)
    scheduleCount += 1
  })

  // ++ Submit form data
  submitButton.addEventListener('click', e => {
    e.preventDefault()
    let request = new XMLHttpRequest()
    request.open('POST', `${form.getAttribute('action')}`)
    request.setRequestHeader('Content-Type', 'application/json')
    let forms = [].slice.call(document.querySelectorAll('form'))
    let entries = {schedules:[]}

    forms.forEach(form => {
      let formData = new FormData(form)
      let currentSchedule = {}
    
      for (let info of formData) {
        currentSchedule[info[0]] = info[1]
      }
      entries.schedules.push(currentSchedule)
    })

    request.addEventListener('load', e => {
      if (request.status === 201) {
        form.reset() 
      }
      alert(request.response)
    })

    

    request.send(JSON.stringify(entries))    
  })
})
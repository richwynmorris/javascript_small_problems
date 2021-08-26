document.addEventListener('DOMContentLoaded', e => {
  const hostApi = 'http://localhost:3000/api/'
  // schedule form
  let bookingSelector = document.querySelector('select')
  let submitButton = document.querySelector('button')
  let form = document.querySelector('form')

  // new student form:
  let newStudentForm = document.querySelector('#new-student-form')
  let bookingInput = document.querySelector('#booking')
  let newStudentBtn = document.querySelector("#new-student-submit-btn")

  function formDataToJson(formData) {
    const json = {};
    for (const pair of formData.entries()) {//alert(submitRequest.responseText)
        json[pair[0]] = pair[1];
    }

    return json;
  }

  let staffInfo = {}

  // get staff information for bookings
  let staffRequest = new XMLHttpRequest()

  staffRequest.open('GET', hostApi + 'staff_members')
  staffRequest.responseType = 'json'

  staffRequest.addEventListener('load', e => {
    staffRequest.response.forEach(staff => {
      staffInfo[staff.id] = staff.name
    })
  })

  staffRequest.send()

  // add booking schedule to select element
  let bookingsRequest = new XMLHttpRequest()

  bookingsRequest.open('GET', hostApi + 'schedules')
  bookingsRequest.responseType = 'json'

  bookingsRequest.addEventListener('load', e => {
    let allBookings = bookingsRequest.response

    allBookings.forEach(booking => {
      if (!booking.student_email) {  let newStudentRequest = new XMLHttpRequest()

        newStudentRequest.open('POST', hostApi + 'students')
        newStudentRequest.setRequestHeader('Content-Type', 'application/json')
        let bookingSlot = document.createElement('option')
        bookingSlot.value = Number(booking.id)
        bookingSlot.textContent = `${staffInfo[booking.staff_id]} | ${booking.date} | ${booking.time}`
        bookingSelector.appendChild(bookingSlot)
      }
    })
  })

  bookingsRequest.send()
  
  let makeBooking = function(e=null) {
      if (e) {
        e.preventDefault()
      }
      // serialize data 
      let data = new FormData(form)

      // Make booking
      let submitRequest = new XMLHttpRequest()
      submitRequest.open('POST', hostApi + 'bookings')
      submitRequest.setRequestHeader('Content-Type', 'application/json')

      submitRequest.addEventListener('load', e => {
        let status = submitRequest.status
        let message = submitRequest.responseText
        let bookingSequence = message.slice(message.length - 6)

        switch(status) {
          // making booking with OKAY status
          case 204:
            alert('Your meeting has been booked.')
            window.location.reload(true)
            break;
          case 404:
            // raise alert and show new student form
            alert(message)
            bookingInput.setAttribute('value', bookingSequence)
            newStudentForm.style.display = 'block'
            break;
        }
      })
      
      submitRequest.send(JSON.stringify(formDataToJson(data)))
    }

    //submit form data
    submitButton.addEventListener('click', makeBooking)

    newStudentBtn.addEventListener('click', e => {
      e.preventDefault()
  
      let newStudentRequest = new XMLHttpRequest()
  
      newStudentRequest.open('POST', hostApi + 'students')
      newStudentRequest.setRequestHeader('Content-Type', 'application/json')
      let newStudentData = new FormData(newStudentForm)
      newStudentData = JSON.stringify(formDataToJson(newStudentData))
  
      newStudentRequest.addEventListener('load', e=> {
        let status = newStudentRequest.status
        switch(status) {
          case 201:
            alert(newStudentRequest.responseText)
            makeBooking()
            break;
          case 400:
          case 404:
            alert(newStudentRequest.responseText)
            break;
        }
        
      })
      newStudentRequest.send(newStudentData)
    })
})


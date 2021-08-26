const hostApi = 'http://localhost:3000/api/'

// Cancel Schedule:
function cancelSchedule(id) {
  let request = new XMLHttpRequest()

  request.open('DELETE', hostApi + `/schedules/${id}`)
  request.addEventListener('load', e => {
    let status = request.status
    let message = request.responseText
    if (status === 204) {
      alert('Schedule deleted.')
    } else {
      alert(message)
    }
  })

  request.send()
}

cancelSchedule('18')

function cancelBooking(id) {
  let request = new XMLHttpRequest()

  request.open('PUT', hostApi + `/bookings/${id}`)
  request.addEventListener('load', e => {
    let status = request.status
    let message = request.responseText
    if (status === 204) {
      alert('Booking deleted.')
    } else {
      alert(message)
    }
  })

  request.send()
}

cancelBooking('18')
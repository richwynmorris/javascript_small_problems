document.addEventListener('DOMContentLoaded', e => {
  let request = new XMLHttpRequest()

  let timer = setTimeout(function() {
    request.abort()
    alert('Timed out - please try again')}
    , 5000)

  request.open('GET', 'http://localhost:3000/api/schedules')
  request.addEventListener('load', e => {
    let scheduleData = JSON.parse(request.response)
    getAllSchedules(scheduleData)
    clearTimeout(timer)
    alert('All schedules displayed. Thank you for your request.')

  })

  request.send()
})

function getAllSchedules(data) {
  let staffSchedules = {}
  
  data.forEach(opening => {
    let staffId = opening.staff_id
    if (!opening.student_email) {
      staffSchedules[`staff ${staffId}`] = staffSchedules[`staff ${staffId}`] + 1 || 1
    }
  })
  
  let staffKeys = Object.keys(staffSchedules)

  if (staffKeys.length === 0) {
    alert('there are currently no schedules available for booking.')
    return;
  }

  for(let count = 0; count < staffKeys.length; count += 1) {
    let currentKey = staffKeys[count]
    alert(`${currentKey}: ${staffSchedules[currentKey]}`)
  }
}
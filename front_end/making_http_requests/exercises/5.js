document.addEventListener('DOMContentLoaded', e => {
  const hostApi = 'http://localhost:3000/api/'
  let dateList = document.querySelector('#date-list')

  let dateRequest = new XMLHttpRequest()
  dateRequest.open('GET', hostApi + 'bookings')
  dateRequest.responseType = 'json'

  dateRequest.addEventListener('load', e => {

    dateRequest.response.forEach(date => {
      let dateChild = document.createElement('li')
      dateChild.textContent = date

      let subList = document.createElement('ul')

      let dateInfo = new XMLHttpRequest()
      dateInfo.open('GET', hostApi + 'bookings' + '/' + `${date}`)
      dateInfo.responseType = 'json'

      dateInfo.addEventListener('load', e => {
        dateInfo.response.forEach(info => {
          let infoChild = document.createElement('li')
          infoChild.textContent = info.join().replaceAll(',', ' | ')
          subList.style.display = 'none'
          subList.appendChild(infoChild)
        })
      })

      dateInfo.send()
      
      dateChild.appendChild(subList)
      dateList.appendChild(dateChild)

      dateChild.addEventListener('click', e => {
        dateChild.children[0].style.display = 'block'
      })
    })
  })
  
  dateRequest.send()
})
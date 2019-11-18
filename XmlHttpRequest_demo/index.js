;(function () {
  let jsonBtn = document.querySelectorAll('.submit-btn')[0]
  let txtBtn = document.querySelectorAll('.submit-btn')[1]
  let onlineBtn = document.querySelectorAll('.submit-btn')[2]
  const jsonUrl = './book.json'
  const txtUrl = './book.txt'
  const onlineUrl = 'http://192.160.0.104:9999/persons'

  // Add Click Event
  // Get json data
  jsonBtn.addEventListener('click', () => {
    markRequest(jsonUrl, (data) => {
      let div = document.createElement('div')
      let html = '<div><span>姓名</span><span>擅长</span></div>'
      let list = JSON.parse(data)
      console.log(list)
      list.forEach((item, index) => {
        console.log(item)
        html += '<div><span>' + item.name + '</span><span>' + item.ability + '</span></div>'
      })
      div.innerHTML = html
      jsonBtn.parentNode.insertBefore(div, jsonBtn)
      div.classList.add('box')
    })
  })
  // Get txt data
  txtBtn.addEventListener('click', () => {
    markRequest(txtUrl, (data) => {
      let div = document.createElement('div')
      div.innerHTML = data
      jsonBtn.parentNode.insertBefore(div, txtBtn)
    })
  })
  // Get api data
  onlineBtn.addEventListener('click', () => {
    markRequest(onlineUrl, (data) => {
      let div = document.createElement('div')
      div.innerHTML = data
      jsonBtn.parentNode.insertBefore(div, onlineBtn)
    })
  })

  // Click Event
  function markRequest (url, callback) {
    let httpRequest
    // Create httpRequest Object
    if (window.XMLHttpRequest) {
      httpRequest = new XMLHttpRequest()
    } else if (window.ActiveXObject) {
      httpRequest = new ActiveObject('microsoft.XMLHTTP')
    }

    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status == 200) {
          console.log('success')
          callback(httpRequest.responseText)
        } else {
          console.log('wrong')
        }
      }
    }
    // Setting request config
    httpRequest.open('get', url)
    // send
    httpRequest.send()
  }
})()

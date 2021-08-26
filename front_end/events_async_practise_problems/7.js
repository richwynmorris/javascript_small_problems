document.addEventListener('DOMContentLoaded', e => {

  let articleLinks = Array.prototype.slice.call(document.querySelectorAll('a'))
  let articles = Array.prototype.slice.call(document.querySelectorAll('article'))
  let body = document.querySelector('body')

  articleLinks.forEach((article, index) => {
    article.addEventListener('click', event => {
      event.preventDefault()
      clearHighlights()
      let targetArticle = document.querySelector(`#article-${index + 1}`)
      targetArticle.setAttribute('class', 'highlight')
      targetArticle.scrollIntoView()
    })
  })

  articles.forEach((article, index) => {
    article.addEventListener('click', event => {
      event.preventDefault()
      clearHighlights()
      let targetArticle = document.querySelector(`#article-${index + 1}`)
      targetArticle.setAttribute('class', 'highlight')
      targetArticle.scrollIntoView()
    })
  })

  body.addEventListener('click', e => {
    clearHighlights()
    let main = document.querySelector('main')
    main.setAttribute('class', 'highlight')
  }, true)

  
  function clearHighlights() {
    [].slice.call(document.querySelectorAll('article')).forEach(article => {
      article.className = null
    })

    document.querySelector('main').className = null
  }
})

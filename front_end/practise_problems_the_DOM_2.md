1) 

```js
function addClassName() {
let pElements = document.getElementsByTagName('p') 

let listOfPElements = Array.prototype.slice.call(pElements)

listOfPElements.forEach(element => {
  element.className = 'article-text'
})
}
```

2) 

```js
function addClassName() {
let introClass = document.getElementsByClassName('intro')

let listOfElements = Array.prototype.slice.call(introClass)

let relPElements = listOfElements.map(element => {
    return Array.prototype.slice.call(element.getElementsByTagName('p')).pop()
  })

relPElements.forEach(p => {
  p.className = 'article-text'
})
```

3) Write some JavaScript code to retrieve a word count for each h2 heading on the page.

```js
let h2List = document.querySelectorAll('h2')

h2List = Array.prototype.slice.call(h2List)

h2List.map(h2 => {
    return h2.textContent.split('').length
}) // [8, 20, 22, 27, 7, 24, 26, 7, 46, 10, 8, 10, 12, 15, 14, 15]
```

4) Use three different DOM methods to retrieve a reference to the div element that contains the table of contents.

```js
let toc1 = document.getElementById('toc')
toc1 // <div id=​"toc" class=​"toc">​…​</div>​
let toc2 = document.querySelector('#toc')
toc2 // <div id=​"toc" class=​"toc">​…​</div>​
let toc3 = document.querySelectorAll('#toc')[0]
toc3 // <div id=​"toc" class=​"toc">​…​</div>​
```

5) Write some JavaScript code to change the color for every odd indexed link in the table of contents to green.

```js
let listLinks = document.querySelectorAll('.toc a')

Array.prototype.slice.call(listLinks).forEach((a, index) => {
  if (index % 2 !== 0) {
    a.style.color = 'green' 
  }
})
```

6) Write some JavaScript code to retrieve the text of every thumbnail caption on the page.

```js
let elements = document.body.getElementsByClassName('thumbcaption')
Array.prototype.slice.call(elements).map(div => {
    return div.textContent.trim()
})
```


7) Write JavaScript code that extracts the classification of animals from the web page and logs an Object that uses the ranks as keys and the groups as values.

```js
let data = document.body.querySelectorAll('tbody tr td')

let animalClasses = []

data.forEach((td, index) => {
  if (taxonomicRanks.includes(td.textContent)) {
    let obj = {}
    let taxiconomy = td.textContent
    let value = data[index + 1].textContent
    obj[taxiconomy] = value
    animalClasses.push(obj)
  }
})
```
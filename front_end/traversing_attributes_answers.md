Starting with the document node, use the lastChild and childNodes properties to change the text color to red on the On the River heading and set its font size 48 pixels.

### Answer:
```js
let h1 = document.querySelector('h1')
h1.style.color = 'red'
h1.style.fontSize = '48px'
```

Count the paragraphs on the page, and then log the result.#

```js
function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

let count = 0

function addToCount(node) {
  if (node.nodeName === 'P') {
      count += 1
  }
}

walk(body, addToCount)

count // => 5

```

Retrieve the first word from each paragraph on the page and log the entire list.

```js
let firstWords = []

walk(body, node => {
    if(node.nodeName === 'P') {
        firstWords.push(node.childNodes[0].nodeValue.trim().split(' ')[0])
    }
})

console.log(firstWords) // ["A", "The", "The", "Where", "And"]
```

Add the class stanza to each paragraph except the first.

```js
let skipFirstP = false
undefined
walk(body, node => {
    if(node.nodeName === 'P' && skipFirstP === true) {
      node.className = 'stanza'
    } else if (node.nodeName === 'P'){
      skipFirstP = true
    }
})
```


```js
let imageCount = 0

walk(body, node => {
    if(node.nodeName === 'IMG') {
      imageCount += 1
    } 
})

imageCount // 48

let pngCount = 0

walk(body, node => {
    if(node.nodeName === 'IMG' && node.getAttribute('src').match(/png$/)) {
      pngCount += 1
    } 
})

pngCount // 23
```

Change the link color to red for every link on the page.
```js
walk(body, node => {
    if(node.nodeName === 'A') {
      node.style.color = 'red'
    } 
})
```
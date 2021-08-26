### 1
POST /books HTTP1.1 
HOST: https://ls-230-book-catalog.herokuapp.com
Content-type: application/json; charset=utf-8
Accept: */*

Body:
'{ title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' }'

### 2

```js
let require = new XMLHttpRequest()

require.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products')

require.addEventListener('load', e => {
  require.setRequestHeader('Content-type', 'application/json; charset=utf-8')

  require.setRequestHeader('Authorization', 'token AUTH_TOKEN')

  let data = {name: 'Orange Pen', sku: 'org100', price: 100}
  data = JSON.stringify(data)

  require.send(data)
})
```
## Whois.js
> Whois utility implemented in javascript;

## Install
```
$ npm install --save whois.js
```

## Example
```javascript
var whois = require("whois.js");

whois("apple.com")
.then(function(data){
  console.log(data)
})

module.exports = whois;
```

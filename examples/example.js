var whois = require(__dirname + "/../index.js")

var values = [
  "Expiration Date",
  "Domain Name",
  "Registrar",
]

whois("=joe.net")
.then(function(data){
  // console.log(data)
  var lines = data.split("\n")
  lines.forEach(function(line){
    if(line.indexOf(":") !== -1) {
      values.forEach(function(value){
        if (line.indexOf(value) !== -1){
          var key = line.split(":")[0].trimLeft()
          var value = line.split(":")[1].trimRight();
          var obj = {}
          obj[key] = value
          console.log(obj)
        }
      })
    }
  })
})

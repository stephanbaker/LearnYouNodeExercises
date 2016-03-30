var fs = require('fs')
var http = require('http')
var server = http.createServer(function callback(request, response) {
  request.setEncoding('utf8')
  request.on("data", function(data) {
    response.write(data.toUpperCase())
  })
  request.on("end", function(data) {
    response.end(data.toUpperCase());
  })
})
server.listen(process.argv[2])
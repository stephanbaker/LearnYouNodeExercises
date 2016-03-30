var fs = require('fs')
var http = require('http')
var server = http.createServer(function callback(request, response) {
  var stream = fs.createReadStream(process.argv[3])
  stream.pipe(response)
})
server.listen(process.argv[2])
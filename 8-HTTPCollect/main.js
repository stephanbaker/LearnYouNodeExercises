var http = require('http')
http.get(process.argv[2], function(res) {
  res.on('error', console.error)
  var buffer = null
  res.on('data', function(chunk) {
    if (buffer == null) {
      buffer = chunk
    } else {
      buffer = Buffer.concat([buffer, chunk], buffer.length + chunk.length)
    }
  })
  res.on('end', function() {
    console.log(buffer.length)
    console.log(buffer.toString())
  })
})
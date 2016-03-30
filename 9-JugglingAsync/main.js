var http = require('http')
var finishedCount = 0
var responses = []
var args = process.argv.slice(2, process.argv.length);
for (i = 0; i < 3; i++) {
  var url = args[i]
  getData(url)
}

function getData(url) {
  http.get(url, function(res) {
    res.on('error', console.error)
    var buffer = new Buffer([])
    res.on('data', function(chunk) {
      buffer = Buffer.concat([buffer, chunk], buffer.length + chunk.length)
    })
    res.on('end', function() {
      responses[url] = buffer.toString()
      finishedCount++
      if (finishedCount == args.length) {
        printResults()
      }
    })
  })
}

function printResults() {
  for (var index in args) {
    var url = args[index];
    console.log(responses[url]);
  }
}
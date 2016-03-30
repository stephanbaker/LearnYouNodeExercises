var http = require('http')
var url = require('url')
var querystring = require('querystring')
var server = http.createServer(function callback(request, response) {
  info = url.parse(request.url)
  var query = querystring.parse(info.query)
  switch (info.pathname) {
    case "/api/parsetime":
      handleParseTime(query, response)
      break
    case "/api/unixtime":
      handleUnixTime(query, response)
      break
  }
})
server.listen(process.argv[2])

function handleParseTime(query, response) {
  var date = new Date(query['iso'])
  var responseData = {
    "hour": date.getHours(),
    "minute": date.getMinutes(),
    "second": date.getSeconds()
  }
  var json = JSON.stringify(responseData)
  response.writeHead(200, {
    'Content-Type': 'application/json'
  })
  response.end(json)
}

function handleUnixTime(query, response) {
  var date = new Date(query['iso'])
  var responseData = {
    "unixtime": date.getTime()
  }
  var json = JSON.stringify(responseData)
  response.writeHead(200, {
    'Content-Type': 'application/json'
  })
  response.end(json)
}
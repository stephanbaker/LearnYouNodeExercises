var net = require('net')
var strftime = require('strftime')
var server = net.createServer(function(socket) {
  var dateString = strftime('%Y-%m-%d %H:%M\n', new Date())
  socket.end(dateString)
})
server.listen(process.argv[2])
var fs = require('fs')
var path = require('path')

module.exports = function filteredLS(fileName, extension, callback) {
  fs.readdir(process.argv[2], function(err, list) {
    if (err) {
      return callback(err)
    }
    var filtered = []
    list.forEach(function(file) {
      if (path.extname(file) == "." + process.argv[3]) {
        filtered.push(file)
      }
    })
    callback(null, filtered)
  })
}
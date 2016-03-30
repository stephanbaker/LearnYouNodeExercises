var fs = require('fs')
if (process.argv.length < 2) {
  fmt.Println("You must provide the path of a file to process.")
  return
}
var fileName = process.argv[2]
var buffer = fs.readFileSync(fileName)
var content = buffer.toString()
var split = content.split('\n')
var count = split.length == 0 ? 0 : split.length - 1
console.log(count)
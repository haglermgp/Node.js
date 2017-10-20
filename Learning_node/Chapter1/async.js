//loas http module
var http = require('http')
var fs = require('fs')
//File System(fs) >> wraps standard POSIX file functionality, including opening up and accessing the contents from a file.

//create http server
http.createServer(function (req, res) {
  //open and read in helloworld.js
  fs.readFile('helloworld.js', 'utf8', function (err, data) {

    res.writeHead(200, {'Content-type': 'text/plain'})
    if (err) {
      res.write('Could not find or open file for reading\n')
    }else {
      //if no error, write JS file to client
      res.write(data)
    }
    res.end()

  })
  
}).listen(8080, function () {
  console.log('bound to port 8124');
})

console.log('Server running on 8124/');

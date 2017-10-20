//load http module
var http = require('http')

//create http server
http.createServer(function (req, res) {

  //content header
  res.writeHead(200, {'content-type': 'quechuaparatodos.html'})

  //write message and signal commnucation is complete
  res.end('hello, world!\n')
  
}).listen(8080)

console.log('your sever runing on 8080');

//http.createServer([requestListener()])
// The requestListener function is the function that is executed each time the server gets a request:

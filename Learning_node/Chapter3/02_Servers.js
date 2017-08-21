// NOTE: A simple TCP server , with a socket listening for client communication on port 8080
var net = require('net')

var server = net.createServer(function (conn) {
  console.log('connected')

  conn.on('data', function (data) {
    console.log(data + ' from ' + conn.remoteAddress + ' ' + conn.remotePort);
    conn.write('Repeating: ' + data)
  })

  conn.on('close', function () {
    console.log('cliente closed connection');
  })
}).listen(8080)

console.log('listening on port 8080');

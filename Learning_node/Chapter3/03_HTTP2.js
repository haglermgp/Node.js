// NOTE: Connecting to the Unix socket and printing out received data

var http = require('http')

var options = {
  method: 'GET',
  socketPath: 'tmp/node-server-sock',
  path: '/?file=main.txt'
}

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode );
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  res.setEncoding('utf8')
  res.on('data', function (chunk) {
    console.log('chunk o\' data: ' + chunk );
  })
})

req.on('error', function (e) {
  console.log('problem with request: ' + e.message);
})

//write data request to body
req.write('data\n');
req.write('data\n');
req.end()

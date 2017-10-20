var http = require('http')

var server = http.createServer(function(req, res) {
  var data = 'sfsfs'

  // req.on('data', function(chunk) {
  //     data += chunk
  //   })
  //
  // req.on('end', function() {
  //     console.log('POST data : %', data);
  //   })

  var onData = function(chunk) {
    console.log('this is chunk once', chunk);
    req.removeListener(onData)
  }

  req.on('data', onData)

}).listen(8080)

var net = require('net')

var chatServer = net.createServer()

var numberConection = 0

chatServer.on('connection', function (client) {
	numberConection++

	client.write(`${numberConection}`)
	client.write('Hi!\n')
	// client.write('Bye!\n')

	client.on('data', function (data) {
		console.log('data ----', data)
	})

	// client.end()
})

chatServer.listen(9000)
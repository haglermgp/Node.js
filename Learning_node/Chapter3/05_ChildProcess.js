// Operating systems provide access to a great deal of functionality, but much of it is only
// accessible via the command line. It would be nice to be able to access this functionality
// from a Node application. That’s where child processes come in.

var spawn = require('child_process').spawn,
    pwd = spawn('pwd');

pwd.stdout.on('data', function(data) {
  console.log('stdout: ' + data);
})

pwd.stderr.on('data', function(data) {
  console.log('stderr: ' + data);
})

pwd.on('exit', function(code) {
  console.log('child process exited with code ' + code);
})

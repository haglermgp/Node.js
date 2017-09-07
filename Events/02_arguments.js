const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

myEmitter.on('eventName', function(a,b) {

  process.nextTick(() => {
    console.log('this happens asynchronously');
  })

})

// myEmitter.emit('eventName', 'a', 'b')

myEmitter.emit('eventName', 'a', 'b')
console.log('anotherl line ');
console.log(myEmitter);


// NOTE: error events (best practices)
myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});

myEmitter.emit('error', new Error('whoops!'));
// Prints: whoops! there was an error

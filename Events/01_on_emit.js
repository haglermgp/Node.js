const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

console.log(myEmitter);

//EventEmitter.on() method is used to register listeners
//function that allows one or more functions to be attached to named events emitted by the object
myEmitter.on('eventName', () => {
  console.log('eventName ocurred');
})

myEmitter.on('otherEvent', () => {
  console.log('otherEvent ocurred');
})

console.log(myEmitter);

//EventEmitter.emit() used to trigger the event.
myEmitter.emit('eventName')

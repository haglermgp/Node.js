const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()


// NOTE: EVENT NEW LISTENERS

// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('clase A');
    });
  }else {
    myEmitter.on('event2', () => {
      console.log('clase B');
    })
  }
});

myEmitter.on('event2', () => {
  console.log('function of the event2');
})

//this event dont will be clasified by newListener because myEmitter called once after EventEmitter.on() is called for register
myEmitter.on('event', () => {
  console.log('funcion of the event');
})



console.log(myEmitter);

myEmitter.emit('event')

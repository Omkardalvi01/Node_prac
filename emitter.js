const EventEmitter = require('events')

const customEmitter = new EventEmitter()
customEmitter.on('response',()=>{
    console.log(`data recueved`)
})
customEmitter.on('response',()=>{
    console.log(`stuff happens`)
})
customEmitter.emit('response')
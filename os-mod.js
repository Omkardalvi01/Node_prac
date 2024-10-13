const os = require('os')
console.log(`uptime: ${os.uptime} secs`)
const data = {
    type: os.type(),
    release: os.release(),
    mem : os.totalmem(),
    fmem: os.freemem()
}
console.log(data)
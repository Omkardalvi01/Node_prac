const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt',{highWaterMark: 90000 , encode:'utf8'})

stream.on('data',(result) =>{
    console.log(result)
})
stream.on('error', (err) => {
    console.log(err)
})
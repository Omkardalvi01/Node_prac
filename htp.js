const http = require('http')

const server = http.createServer((req, res)=>{
    if(req === '/'){
        res.end("Welcome to our home page")
    }
    res.end(`<h1>Opps</h1>
        <p>Wrong page</p>`)
})

server.listen(3500)
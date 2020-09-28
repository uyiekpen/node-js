const http = require("http")
const port = 2000
const Server = http.createServer((req, res)=>{
    console.log("server is ready");
    res.setHeader( "content type", "plain/Text"),
    res.end()
})

Server.listen(port, ()=>{
    console.log(`server is listening to port: ${port} `)
})


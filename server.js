const http = require("http");

const  server = http.createServer((req, res)=>{
   res.writeHead(200, {"content-type": "text/pain"});
   res.end("Hello Software-Backend-Engineering-Golang")
})

server.listen(6000, ()=>{
    console.log("Server Start.....");
    
});

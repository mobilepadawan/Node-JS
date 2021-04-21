const http = require("http")
const server = http.createServer((req, res)=> {
   res.end("Este servidor remoto está respondiendo a tu solicitud V2.0")
})
const port = 3000

server.listen(port, ()=> {
   console.log("Escuchando solicitudes...")
})
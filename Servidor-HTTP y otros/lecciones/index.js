const http = require('http');
const PORT = 3000

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hola, mundo!');
})

server.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto: ${PORT}`);
})

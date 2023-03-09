var http = require('http');

http.createServer(function(req, res){
  res.end("Bem vindo!");
}).listen(8082);

console.log("Servidor Aberto!")
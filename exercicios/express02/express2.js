//criando servidor com express e adicionando rotas com parâmetros

const express = require("express");
const app = express();

//quando o servidor for aberto será exibida essa mensagem
app.get("/", function(req, res){
  res.send("Bem vindo!");
});


//para definir parametros para as rotas, utilizamos /: e res.send(req.params) para exibir os valores dentro dos parametros
app.get("/parametros/:nome/:profissao/:cor", function(req, res){
  //res.send(req.params);
  res.send("Bem vindo(a) " + req.params.nome + "! Muito legal sua profissao de " + req.params.profissao + ". A sua cor favorita " + req.params.cor + " é muito bonita!");  //o res.send só pode ser usado uma vez
});


//porta para o servidor
app.listen(8081, function(){
  console.log("Servidor aberto!");
})
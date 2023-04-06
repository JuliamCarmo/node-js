//criando servidor com express

const express = require("express");
const app = express();              //constante app recebe a função express


//com funções de callback criamos rotas dentro do servidor
app.get("/", function(req, res){
  res.send("Seja bem vindo ao meu app!");
});

app.get("/sobre", function(req, res){
  res.send("Página Sobre");
});

app.get("/login", function(req, res){
  res.send("Página de login");
});


//essa parte serve para definir a porta do servidor e mostrar uma mensagem no cmd
app.listen(8081, function(){
  console.log("Servidor aberto na url http://localhost:8081");
});
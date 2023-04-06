//Criando um servidor que manda arquivos HTML
const express = require("express");
const app = express();

app.get("/", function (req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/sobre", function(req, res){
  res.sendFile(__dirname + "/sobre.html");
});

//sendFile() significa 'mandar arquivos'
//a variável __dirname trás o caminho raiz (lá do explorador de arquivos) e concatena ao caminho do arquivo html)


app.listen(8081, function(){
  console.log("Servidor aberto!");
});
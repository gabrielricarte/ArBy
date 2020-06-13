/*Exercicio 01*/


// var rs = require("readline-sync");

// function devolveCarro(){
// var carro = []
// carro.cor = rs.question("Qual a cor do carro?")
// carro.modelo =  rs.question("Qual o modelo do carro?")
// carro.marca = rs.question("Qual a marca do carro?")
// return carro
// }

// var automovel = devolveCarro()


// console.log(" seu automovel é um ", automove.marca, " de modelo ", automovel.modelo, " de cor ", automovel.cor)


/* Exercicio02 */


// var rs = require('readline-sync');
// var fs = require('fs');
// function devolveCarro() {
//     var carro = {};
//     carro.marca = rs.question('Qual a marca do automovel: ');
//     carro.modelo = rs.question('Escolha o modelo do seu automovel: ');
//     carro.cor = rs.question('Escoha a cor do seu automovel: ');
//     return carro;
// }
// var automovel = devolveCarro();
// console.log("Seu automovel é um", automovel.marca, "de modelo", automovel.modelo, "de cor", automovel.cor);

// var caminhoDoArquivo = 'DadosJson/carro.json';
// var automovelEmString = JSON.stringify(automovel);
// fs.writeFileSync(caminhoDoArquivo, automovelEmString);

/* Meu Codigo antigo 
var rs = require("readline-sync");
var fs = require("fs");

var cor = rs.question("Qual a cor do carro?")
var modelo = rs.question("Qual o modelo do carro?")
var marca = rs.question("Qual a marca do carro?")

var carro = {};
carro.cor = cor;
carro.modelo = modelo;
carro.marca = marca;
 
var produtoCarro = 'DadosJson/carro.json';
var carroSerializacao = JSON.stringify(carro);
fs.writeFileSync(produtoCarro, carroSerializacao);

console.log(carro)  */


/* Exercicio 03 */

// var rs = require('readline-sync');
// var fs = require('fs');
// function devolveCarro() {
//     var carro = {};
//     carro.marca = rs.question('Qual a marca do automovel: ');
//     carro.modelo = rs.question('Escolha o modelo do seu automovel: ');
//     carro.cor = rs.question('Escoha a cor do seu automovel: ');
//     return carro;
//     }
// var automovel = devolveCarro();
// console.log("Seu automovel é um", automovel.marca, "de modelo", automovel.modelo, "de cor", automovel.cor);

// var objetoDesserializado = fs.readFileSync(caminhoDoArquivo)
// var caminhoDoArquivo = 'DadosJson/carro.json';
// var carro = JSON.parse(objetoDesserializado) //variavel diferente da linha 64, é uma nova
// console.log(carro);

/*
var rs = require("readline-sync");
var fs = require("fs");

var cor = rs.question("Qual a cor do carro?")
var modelo = rs.question("Qual o modelo do carro?")
var marca = rs.question("Qual a marca do carro?")

var carro = {};
carro.cor = cor;
carro.modelo = modelo;
carro.marca = marca;
 
var automovelEmString = 'DadosJson/carro.json';
var carroDeserializacao = fs.readFileSync(produtoCarro);
fs.writeFileSync(carroDeserializacao);
var carro = JSON.parse(carroDeserializacao); */

/* Exercicio 04 */

var rs = require('readline-sync');
var fs = require('fs');
function devolveCarro() {
    var carro = {};
    carro.marca = rs.question('Qual a marca do automovel: ');
    carro.modelo = rs.question('Escolha o modelo do seu automovel: ');
    carro.cor = rs.question('Escoha a cor do seu automovel: ');
    return carro;
    }
// var automovel = devolveCarro();
// console.log("Seu automovel é um", automovel.marca, "de modelo", automovel.modelo, "de cor", automovel.cor);

// var objetoDesserializado = fs.readFileSync(caminhoDoArquivo)
// var caminhoDoArquivo = 'DadosJson/carro.json';
// var carro = JSON.parse(objetoDesserializado) //variavel diferente da linha 64, é uma nova
// console.log(carro);

function abreGaragem(caminhoObj, fs){
    var objDes = fs.readFileSync(caminhoObj)
    var garagem = JSON.parse(objDes)
    return garagem
}

function fechaGaragem(garagem, caminhoDoArquivo, fs){
    var garagemjson = JSON.stringify(garagem);
    // var caminhoDoArquivo = "DadosJson/carro.json";
    fs.writeFileSync(caminhoDoArquivo, garagemjson);

}
var caminhoJson = rs.question("Digite o caminho do arquivo: ")
var garagem = abreGaragem("DadosJson/carro.json");

while(true){
    var resposta = rs.keyInYN("Você deseja adicionar outro carro ?")
if (resposta == true){
    var carroNovo = devolveCarro()
    garagem.push(carroNovo)
    fechaGaragem(garagem, caminhoJson, fs);
    
} else {
    for (var i = 0; i < garagem.length; i++){
        console.log("Seu automovel é um", garagem[i].marca, "de modelo", garagem[i].modelo, "de cor", garagem[i].cor);
     }
    break;
 }
}

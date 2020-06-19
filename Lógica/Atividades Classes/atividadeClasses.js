/*Exercicio 01*/

var rs = require("readline-sync")

 class Carro {
     constructor(marca, modelo, cor){
         this.marca = marca;
         this.modelo = modelo;
         this.cor = cor;
     }
}

function criarCarro(){
     var carro = new Carro();
     carro.modelo = rs.question("Diga o nome do carro").toLowerCase;
     carro.marca = rs.question("Diga o nome da marca").toLowerCase;
     carro.cor = rs.question("Diga a cor do carro").toLowerCase;
     return carro;
 }

 var carro1 = criarCarro();
 var carro2 = criarCarro();


 if(carro1.marca == carro2.marca && carro1.modelo == carro2.modelo){
     console.log("Os carros são iguais");
 } else {
     console.log("Os carros são diferentes")
 }
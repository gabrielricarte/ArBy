var rs = require('readline-sync');

var primeiroNumero = rs.questionFloat("Digite um número: ")
var segundoNumero = rs.questionFloat("Digite um segundo número: ")

var  resultado = 0
for(contador = 0; contador < segundoNumero; contador++){
    resultado = resultado+primeiroNumero
}
console.log(resultado);
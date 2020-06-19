var rs = require("readline-sync")

function multiplacao(numero){
    var multiplacao = 0
    for(i=1;i <= 10; i++){
        multiplacao = i*numero
        console.log(`${i} x ${numero} = ${multiplacao}`)
    }
    
}
var pergunta = rs.questionInt("Digite o número a ser multiplicado:  ")
multiplacao(pergunta);
function Primo(numero){
    for(var i = 2; i < numero; i++){
        if(numero % i == 0){
            return false;
        }
    }
    return Primo;
}

var rs = require('readline-sync');
var num = rs.questionInt('Digite um numero maior que zero: ');

var dizQueEPrimo = Primo(num);
if (dizQueEPrimo == true){
    console.log("É primo");
} else {
    console.log("Não é primo");
}

// Esta errado, corrigr.
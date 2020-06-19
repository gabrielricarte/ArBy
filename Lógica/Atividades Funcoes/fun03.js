var rs = require('readline-sync');
// ano = 365.25 dias, mês = 30 dias
 
function calcularDia(){
    ano = rs.questionInt("Informe quantos anos de vida você tem: ");
    mes = rs.questionInt("Informe quantos meses desse ano você possui: ");
    dia = rs.questionInt("Informe quantos dias desse mês você já se encontra: ");
    var somaTotal = (ano*365.25)+(mes*30)+dia;
    // console.log("Você possui "+somaTotal+" dias de vida.")
    return somaTotal;
}

    console.log(`Você possui um total de ${calcularDia()} dias de vida.`)

// É possivel criar um objeto para ter as idades como atributos e colocar o objeto como parâmetro da função.
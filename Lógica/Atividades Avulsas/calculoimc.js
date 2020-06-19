var rs = require('readline-sync');

console.log("Bem vindo a calculadora  de IMC \n")
var peso = rs.questionFloat("Por favor, nos informe o seu peso: ")
var altura = rs.questionFloat("Por favor, nos informe a sua altura: ")
let imc = (peso/ altura ** altura);

if (imc >= 19 && imc <= 24.9){
    console.log(imc)
    console.log("Você está no seu peso ideal!");
} else if ( imc > 24.9 && imc < 29 ){
    console.log(imc)
    console.log("Você está com sobrepeso!");
} else if ( imc > 30 && imc < 34){
    console.log(imc)
    console.log("Você está com obesidade grau I!");
   
} else if (imc > 34 && imc < 39){
    console.log(imc)
    console.log("Você está com obesidade grau II!");
    
} else if ( imc > 40){
    console.log(imc)
    console.log("Você esta com obesidade grau III!");
} else {
    console.log(imc)
    console.log("Você está abaixo do seu peso do ideal!");
}



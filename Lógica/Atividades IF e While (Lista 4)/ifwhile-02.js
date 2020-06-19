// var rs = require('readline-sync');
// var numero = rs.questionInt("Insira o número 50 para ves os ímpares, pares e primos: ");
// var i = 1;
// var cont = 2;
// var ehPrimo = true;

// while(i <= numero){
//     while(cont < i){
//         if( i % cont == 0){
//             ehPrimo = false;
//             break;
//         }
//         cont++; 
//     }
   

//     if(ehPrimo){
//         if (i % 2 == 0){
//             console.log(`${i} é par e primo`);
//         } else {
//             console.log(`${i} impar e primo`);
//         }

//     } else {
//         if(ehPrimo){
//             console.log(`${i} é impar e primo`);
//         } else {
//             console.log(`${i} impar`);
//         }
//     }

  
//     i++;
// }

// /*
// Exercício realizado com a ajuda, e revizado, pela instrutora Miria.
// */




var rs = require('readline-sync');
var numero = rs.questionInt('\nInsira o número 50 para ver os ímpares, pares e primos: ');
var i = 1;
var cont = 2;
var ehPrimo = true;
while (i <= numero) {
    ehPrimo = true
    divisor = 2
    while (cont < i) {
        if (i % cont == 0) {
            ehPrimo = false;
        }
        cont++;
    }
    if (ehPrimo){
        if (i % 2 == 0) {
            console.log(`${i} é par e primo`);
        } else {
            console.log(`${i} é ímpar primo`);
        }
    } else if (i % 2 == 0){
        console.log(`${i} É par!`);
    }else{
        console.log(`${i} É ímpar!`);
    }
// cont = 2
// ehPrimo = true;
i++;
}


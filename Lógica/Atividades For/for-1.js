 /* Exercicio 01*/
 
  var rs = require("readline-sync")
  
 
  var palavra = rs.question("Escreva uma palavra");
  //pergunta.charAt(())
  var size = palavra.length;
  var palavraDois = "";

 for(var i = 0; i < size; i++){
     var letra = palavra.charAt(i);
     if(letra == "a"){
        palavraDois+= letra.toUpperCase();
     }else{
       palavraDois+= letra;
     }
     
 }

 console.log(palavraDois);



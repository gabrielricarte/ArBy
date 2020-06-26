var rs = require("readline-sync");
 
pergunta = rs.question("Digite qualquer coisa");

perguntacontada = pergunta.length;
console.log(`você digitou uma palavra com ${perguntacontada} caracteres `);
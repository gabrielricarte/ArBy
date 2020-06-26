var rs = require('readline-sync');

numero = rs.questionInt("Seja Bem vindo, qual o número do vôo do Senhor(a)?\n");
fileiras = ['A','B','C','D','F']
fileira = rs.keyInSelect(fileiras, 'E qual a fileira do senhor(a)?')



console.log("Obrigado por voar conosco! seu bilhete de embarque é o de vôo "+ numero + " na fileira "+ fileiras[fileira])
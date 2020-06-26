var rs = require('readline-sync');

mascara = rs.keyInYN('Você está usando máscara?')
lavarmaos = rs.keyInYN("Você está lavando as mãos frequentemente?")

if(mascara && lavarmaos == true){
    console.log("Muito bem!")
} else if (mascara == false && lavarmaos == false){
    console.log("Você merece uma grande bronca!")
} else {
    console.log("Você está esquecendo algo!")
}
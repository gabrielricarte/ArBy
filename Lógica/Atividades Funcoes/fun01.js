var rs = require("readline-sync")

function volumeEsfera(raio){
    raio = rs.questionFloat("\n Escreva o número do raio da esfera para cacular seu volume: \n  ")
    let volume = (4/3*Math.PI*(raio ** 3));
    console.log(volume);
    return volumeEsfera
}
    volumeEsfera();
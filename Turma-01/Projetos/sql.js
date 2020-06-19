const sqlite = require('sqlite3');

const db = new sqlite.Database('max.db', erro => {
    if (erro){
        console.log(erro);

    }
    else {
        console.log('Contecado com sucesso!');
        db.run('CREATE TABLE Carro (marca text, modelo text, cor text, ano integer)');
    }
});
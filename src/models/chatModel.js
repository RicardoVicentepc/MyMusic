var database = require("../database/config");

function enviarMensagem(mensagem,emailUser){
    return database.executar(`insert into messagem (mensagem, fk_Pessoa)values ('${mensagem}', (select idPessoa from pessoa where email = '${emailUser}'));`)
}
function retornarMensagem(){
    return database.executar(`select pessoa.email, messagem.mensagem from messagem join pessoa
	on messagem.fk_Pessoa = pessoa.idPessoa;`)
}

module.exports = {
    enviarMensagem,
    retornarMensagem
};
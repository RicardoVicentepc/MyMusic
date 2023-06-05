var database = require("../database/config");

function listar() {
    console.log("ACESSEI O Pessoa MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `SELECT count(idPessoa) as PessoasCadastradas FROM pessoa;`;
    console.log("Executando a instrução SQL: \n" + instrucao)
    return database.executar(instrucao);
}


function entrar(email, senha) {
    console.log("ACESSEI O Pessoa MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);

    var instrucao =
        `SELECT * FROM pessoa WHERE email = '${email}' AND senha = '${senha}'`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, sobreNome, email, senha) {
    var instrucao =
        `INSERT INTO pessoa (nome, sobreNome, email, senha, dtCadastro) values 
        ('${nome}', '${sobreNome}', '${email}', '${senha}', now())`;
    console.log("Executando a instrução SQL : \n" + instrucao);
    return database.executar(instrucao);
}


    function Recomendacao(email, genero, musica, desc){
        return database.executar(`select count(nomeMusica) as idnome from tbMusica where nomeMusica = '${musica}'`)
            .then(resultado => {
                var varMusicid = resultado[0].idnome
                if(varMusicid == 0){
                    database.executar(`insert into tbMusica values (null, '${musica}', '${genero}')`);
                        return database.executar(`insert into Recomendacao values (null, null, (select idMusica from tbmusica where nomeMusica ='${musica}'), '${email}', '${desc}')`)
                }else{
                    return false
            }
            }).catch((error)=>{
                console.error(error)
            })
    }
module.exports = {
    entrar,
    cadastrar,
    listar,
    Recomendacao
};
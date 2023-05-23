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
        `INSERT INTO pessoa (nome, sobreNome, email, senha) values 
        ('${nome}', '${sobreNome}', '${email}', '${senha}')`;
    console.log("Executando a instrução SQL : \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar
};
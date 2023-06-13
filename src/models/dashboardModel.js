var database = require("../database/config");


function dadosJaneiro() {
    var janeiro = "select count(dtCadastro) as dadosjaneiro from pessoa where dtCadastro >= '2023-01-01' and dtCadastro <= '2023-01-31'"
    return  database.executar(janeiro)
}
function dadosFevereiro(){
    var fevereiro = "select count(dtCadastro) as dadosFevereiro from pessoa where dtCadastro >= '2023-02-01' and dtCadastro <= '2023-02-28'"
    return database.executar(fevereiro)
}
function dadosMarco(){
    var marco = "select count(dtCadastro) as dadosMarco from pessoa where dtCadastro >= '2023-03-01' and dtCadastro <= '2023-03-31'"
    return database.executar(marco)
}
function dadosAbril(){
    var abril = "select count(dtCadastro) as dadosAbril from pessoa where dtCadastro >= '2023-04-01' and dtCadastro <= '2023-04-30'"
    return database.executar(abril)
}
function dadosMaio(){
    var maio = "select count(dtCadastro) as dadosMaio from pessoa where dtCadastro >= '2023-05-01' and dtCadastro <= '2023-05-31'"
    return database.executar(maio)
}
function dadosJunho(){
    var junho = "select count(dtCadastro) as dadosJunho from pessoa where dtCadastro >= '2023-06-01' and dtCadastro <= '2023-06-30'"
    return database.executar(junho)
}
function dadosRecomendacao(){
    var query = `select idRecomendacao, email, genero, nomeMusica, descricao from recomendacao join tbmusica
	on recomendacao.fkMusica = tbmusica.idMusica;`
    return database.executar(query)
}
function dadosRecomendacaoCadastrados(){
    var query = `select count(idRecomendacao) as RecomendacoesCadastradas from recomendacao join tbmusica
	on recomendacao.fkMusica = tbmusica.idMusica
		join pessoa
			on recomendacao.fkPessoa = pessoa.idPessoa;`
    return database.executar(query)
}
function dadosRecomendacaoNaoCadastrados(){
    var query = `select count(idRecomendacao) as RecomendacoesNaoCadastradas from recomendacao join tbmusica
	on recomendacao.fkMusica = tbmusica.idMusica;`
    return database.executar(query)
}
function deletarAvaliacao(idAvaliacao){
    var instrucao = `delete from recomendacao where idRecomendacao = ${idAvaliacao};`
    return database.executar(instrucao)
}
module.exports = {
    dadosJaneiro,
    dadosAbril,
    dadosFevereiro,
    dadosJunho,
    dadosMarco,
    dadosMaio,
    dadosRecomendacao,
    dadosRecomendacaoCadastrados,
    dadosRecomendacaoNaoCadastrados,
    deletarAvaliacao
}